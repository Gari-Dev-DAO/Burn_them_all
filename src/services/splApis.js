import { PublicKey, Connection, Transaction } from "@solana/web3.js";
import {
  createTransferInstruction,
  createBurnInstruction,TOKEN_PROGRAM_ID,getAssociatedTokenAddress,ASSOCIATED_TOKEN_PROGRAM_ID
} from "@solana/spl-token";
import { RPC_NETWORK } from "../utils/BonkAdmin";
import { ADMIN_ACCOUNT } from "../utils/BonkAdmin";
import { bonkAddress,TOKEN_DECIMALS } from "../utils/tokenDetails";
const connection = new Connection(RPC_NETWORK, 'processed');

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
  const toAccount = new PublicKey(ADMIN_ACCOUNT.toString());
  const mint = new PublicKey(MintAddress.toString());
  try {
    const data = await connection.getParsedTokenAccountsByOwner(publicKey, {
      mint: mint,
    }); //get associated account of user for token
    const fromAccount = new PublicKey(data?.value[0]?.pubkey?.toString());
    // const TransferAmount = bonkAmount * 10 ** DECIMALS * 0.4;
     //40% transfer to admin
    const burnAmount = bonkAmount * 10 ** DECIMALS  ; //60% burning

    const transaction = new Transaction().add(
      // createTransferInstruction(
      //   fromAccount,
      //   toAccount,
      //   publicKey,
      //   TransferAmount,
      //   [],
      //   TOKEN_PROGRAM_ID
      // ),
      createBurnInstruction(
        fromAccount,
        mint,
        publicKey,
        burnAmount,
        [],
        TOKEN_PROGRAM_ID
      )
    );
//binds transcation in a single one
    const signature = await sendTransaction(transaction, connection); //sends to wallet
    const response = await connection.confirmTransaction(
      signature,
      "processed"
    );
    return response?.value?.err;
  } catch (err) {
    return "error";
  }
};
const USDC_MINT = new PublicKey('EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v');
const paymentAmount = 5_000_000; 
const merchantWallet = new PublicKey('BUX7s2ef2htTGb2KKoPHWkmzxPj4nTWMWRgs5CSbQxf9');

// export const testZupiter=async(userPublicKey)=>{
//   const transactions = await (
//     await fetch('https://quote-api.jup.ag/v4/swap', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({
//         route: routes[0],
//         userPublicKey: userPublicKey.toString()
//       })
//     })
//   ).json()
//   const { swapTransaction } = transactions
//   const swapTransactionBuf = Buffer.from(swapTransaction, 'base64')
//  var transaction = VersionedTransaction.deserialize(swapTransactionBuf)
//  console.log(transaction)
// }