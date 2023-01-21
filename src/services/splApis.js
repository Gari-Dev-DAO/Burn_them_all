import { PublicKey, Connection, Transaction } from "@solana/web3.js";
import {
  createTransferInstruction,
  createBurnInstruction,
  TOKEN_PROGRAM_ID,
  getOrCreateAssociatedTokenAccount,
} from "@solana/spl-token";
import { RPC_NETWORK } from "../utils/BonkAdmin";
import { ADMIN_ACCOUNT } from "../utils/BonkAdmin";
import {
  createOrUpdateAccount,
} from "./LeaderBoardApi";
import { createNft, createOrUpdateNft } from "./underDogApis";
const connection = new Connection(RPC_NETWORK, "processed");

export const getBonkTokenBalance = async (pubKey,MintAddress) => {
  const publicKey = new PublicKey(pubKey);
  const mint = new PublicKey(MintAddress);

  try {
    const data = await connection.getParsedTokenAccountsByOwner(publicKey, {
      mint: mint,
    });
    console.log(data?.value[0]?.account?.data.parsed.info.tokenAmount.uiAmount);
    return data?.value[0]?.account?.data?.parsed?.info?.tokenAmount?.uiAmount;
  } catch (err) {
    console.log(err);
  }
};

export const burnAndTransferBonkToken = async (
  bonkAmount,
  pubKey,MintAddress,DECIMALS,sendTransaction
) => {
  const publicKey = new PublicKey(pubKey.toString());
  const ADMIN_ACC = new PublicKey(ADMIN_ACCOUNT.toString());
  const mint = new PublicKey(MintAddress.toString());
  try {
    const data = await connection.getParsedTokenAccountsByOwner(publicKey, {
      mint: mint,
    }); //get associated account of user for token
    const fromAccount = new PublicKey(data?.value[0]?.pubkey?.toString());
    const res=await getOrCreateAssociatedTokenAccount(connection,publicKey,mint,ADMIN_ACC,false)
    console.log(res?.address?.toString())
    const toAccount=new PublicKey(res?.address?.toString())
    const TransferAmount = bonkAmount * 10 ** DECIMALS * 0.4; //40% transfer to admin
    const burnAmount = bonkAmount * 10 ** DECIMALS * 0.6; //60% burning

    const transaction = new Transaction().add(
      createTransferInstruction(
        fromAccount,
        toAccount,
        publicKey,
        TransferAmount,
        [],
        TOKEN_PROGRAM_ID
      ),
      createBurnInstruction(
        fromAccount,
        mint,
        publicKey,
        burnAmount,
        [],
        TOKEN_PROGRAM_ID
      )
    );
  
    const signature = await sendTransaction(transaction, connection); //sends to wallet
    const response = await connection.confirmTransaction(
      signature,
      "processed"
    );
    // await createNft(publicKey)
    // const  err1=await createOrUpdateNft(publicKey,'token',bonkAmount,'')
    const  err2 = await createOrUpdateAccount(publicKey, bonkAmount); //send data to db
    return response?.value?.err || err2 ;
  } catch (err) {
    return "error";
  }
};


