import { clusterApiUrl, Connection, PublicKey } from "@solana/web3.js";
import { walletAdapterIdentity } from "@metaplex-foundation/js";
import { Metaplex } from "@metaplex-foundation/js";

const connection = new Connection(clusterApiUrl("devnet"));

const makeMetaplexConnection = (wallet) => {
  const mx = Metaplex.make(connection).use(walletAdapterIdentity(wallet));
  return mx;
};

export const getAllNftsByOwner = async (wallet) => {
  let { publicKey } = wallet;
  publicKey = new PublicKey(publicKey.toString());
  const mx = makeMetaplexConnection(wallet);
  const Nfts = await mx.nfts().findAllByOwner({ owner: publicKey });
  return Nfts;
};

export const burnNftByMint = async (wallet, mint) => {
  const mintAddress = new PublicKey(mint.toString());
  const mx = makeMetaplexConnection(wallet);
  await mx.nfts().delete({ mintAddress });
};

export const getNftByMetaData=async(metadata)=>{
 const mx=makeMetaplexConnection()
 const nft = await mx.nfts().load({metadata });
 return nft
}