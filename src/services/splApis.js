import { PublicKey, Connection, clusterApiUrl } from "@solana/web3.js";
import { TOKEN_PROGRAM_ID } from "@solana/spl-token";
import { Transaction } from "@solana/web3.js";
import {
  createTransferInstruction,
  createBurnInstruction,
} from "@solana/spl-token";
import { ADMIN_ACCOUNT } from "../utils/BonkAdmin";
const network = clusterApiUrl("devnet");
const connection = new Connection(network, "confirmed");
const bonkAddress = "872X8634pobTMkn9KiGLuFUbhdqpQASvjrnbrb6UsgXD";
const TOKEN_DECIMALS = 9;

export const getBonkTokenBalance = async (pubKey) => {
  const publicKey = new PublicKey(pubKey);
  const mint = new PublicKey(bonkAddress);
  try{
  const data = await connection.getParsedTokenAccountsByOwner(publicKey, {
    mint: mint,
  });
  console.log(data.value[0].account.data.parsed.info.tokenAmount.uiAmount);
  return data.value[0].account.data.parsed.info.tokenAmount.uiAmount;}
  catch(err)
  {
    console.log(err)
  }
};

export const burnAndTransferBonkToken = async (
  bonkAmount,
  pubKey,
  sendTransaction
) => {
  
  const publicKey = new PublicKey(pubKey.toString());
  const toAccount = new PublicKey(ADMIN_ACCOUNT.toString());
  const mint = new PublicKey(bonkAddress.toString());
  try{
  const data = await connection.getParsedTokenAccountsByOwner(publicKey, {
    mint: mint,
  });
  let tokenAccount = data.value[0].pubkey;
  const fromAccount = new PublicKey(tokenAccount.toString());

  const TransferAmount = bonkAmount * 10 ** TOKEN_DECIMALS * 0.4;
  const burnAmount = bonkAmount * 10 ** TOKEN_DECIMALS * 0.6;

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

  const signature = await sendTransaction(transaction, connection);
  const response = await connection.confirmTransaction(signature, "processed");
  return response?.value?.err
}
  catch(err)
  {
    return 'error'
  }
};
