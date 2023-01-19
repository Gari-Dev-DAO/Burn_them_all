import { useEffect, useState, useContext } from "react";
import { burnNftByMint, getAllNftsByOwner, getNftByMetaData } from "../services/nftApis";
import { HomeStateContext } from "../States/HomeState";
import { useWallet } from "@solana/wallet-adapter-react";
import { useDispatcher } from "./useDispatcher";


export const useNfts = () => {
  const wallet = useWallet();
  const {updateLoading}=useDispatcher()
  const [nfts, setNfts] = useState([]);
  

  useEffect(() => {
    if (wallet.publicKey) {
      getNfts(wallet);
    }
  }, [wallet]);

  const getNfts = async (wallet) => {
    const mintNfts = await getAllNftsByOwner(wallet);
    let nfts = mintNfts?.map(async (mintNft) => {
      const nft = await getNftByMetaData(mintNft);
      return nft;
    });
    nfts = await Promise.all(nfts);
    setNfts(nfts);
  };

  const burnNft=async(mintAddress)=>{
    updateLoading(true)
    await burnNftByMint(wallet,mintAddress)
    updateLoading(false)
  }

  return {nfts,burnNft}
};
