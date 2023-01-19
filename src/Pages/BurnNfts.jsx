import { useNfts } from "../hooks/useNfts";
import Nft from "../Components/Nft";
import NftsContainer from "../Components/NftContainer";

const BurnNfts = () => {
  const { nfts } = useNfts();
  return (
    <div className="burn-nft">
    <NftsContainer>
      {nfts.map((nft) => {
        const { image, name ,description} = nft.json;
        const {address}=nft.mint
        console.log(nft)
        return (
        <Nft {...{image,name,description,address}}/>
        )
      })}
      </NftsContainer>
    </div>
  );
};

export default BurnNfts;
