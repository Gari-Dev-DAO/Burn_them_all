import { SelectedGuardGroupDoesNotExistError } from '@metaplex-foundation/js';
import axios from 'axios';
import { getMintAccount } from './LeaderBoardApi';

const collectionAddress = "BRkbaBSX3JZXnE4UBBNibKHnpx6zN7uTbF5kEvnUu5G2";
const token='a8dcd1e550bdfa.565643f6c1d546ce9f909762d3bde240'

export const getCollection = async () => {
  try {
    const response = await axios.get(`https://api.underdogprotocol.com/v1/collections/${collectionAddress}`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });
    console.log('response',response)
    console.log(response.data);
  } catch (error) {

    console.error(error);
  }
}


export const createNft = async (publicKey='6hM1wBqG7SJsthgjnezMGMReh7kBQDGDwGoQp3NZwpLC') => {
 
  try {
    const response = await axios.post('https://api.underdogprotocol.com/v1/nfts', {
      name: 'Burning Nft',
      image: 'https://arweave.net/6TnZgDc7xDFV_0UFyPgfq2wn6UfRv8-DJgwVwoHfLG4',
      ownerAddress:publicKey
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}



  export const getNft = async (mintAddress) => {
    try {
      const response = await axios.get(`https://api.underdogprotocol.com/v1/nfts/${mintAddress}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
     
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  export const updateNft = async (mintAddress,attributes) => {
    try {
      const response = await axios.patch(`https://api.underdogprotocol.com/v1/nfts/${mintAddress}`, {
       attributes:attributes
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }


  export const createOrUpdateNft=async(publicKey,type,amountBonked=0,nftAttributes)=>{
         try{
          const mintAddress=await getMintAccount(publicKey)
          console.log('mi',mintAddress)
          if(!mintAddress)
           {
            if(type=='token')
            await createNft(publicKey);
           }
           else{
            const nft=getNft(mintAddress)
            let newattributes;
            if(type=='token')
            {const prevBonk=nft.attributes.bonk
             newattributes={...nft.attributes,bonk:prevBonk+amountBonked}
            }
            else{
               newattributes={...nft.attributes,'name':'nftMinted'}
            }
            await updateNft(mintAddress,newattributes)
           }
        }
        catch(error)
        {
          console.log(error)
          return 'error'
        }
  }