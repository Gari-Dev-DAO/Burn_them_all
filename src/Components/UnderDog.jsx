import React from 'react'
import { createNft, getCollection } from '../services/underDogApis'

const UnderDog = () => {
  return (
    <div>
        <button onClick={getCollection }>get Collection</button>
        <br></br>
        <button onClick={createNft }>create Nft</button>
    </div>
  )
}

export default UnderDog