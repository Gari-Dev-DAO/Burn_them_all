import { useNftBuilder } from "@metaplex-foundation/js"
import { useNfts } from "../hooks/useNfts"
import Button from "./Button"
import Discription from "./Discription"

const Nft = ({image,name,description,address}) => {
  const {burnNft}= useNfts()
  return (
    <div className="nft-container">
    <img src={image} alt={name} className='nft-img' />
     <Discription {...{name,description}}/>
     <Button onClick={()=>burnNft(address)}><p className='nft-burn-btn'>BURN</p></Button>
   </div>
  )
}

export default Nft