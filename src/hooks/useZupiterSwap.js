import { TOKEN_LIST_URL } from "@jup-ag/core";
import { JupiterProvider, useJupiter } from "@jup-ag/react-hook";
import { useState,useEffect } from "react";
import { PublicKey } from "@solana/web3.js";
import JSBI from "jsbi";



export const useZupiterSwap = () => {
      const [tokens, setTokens] = useState([])
      const [inputMint] = useState(new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"))
      const [outputMint] = useState(new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"))
    
      // useEffect(() => {
      //     fetch(TOKEN_LIST_URL[0])
      //       .then(response => response.json())
      //       .then(result => setTokens(result))
      //   }, [])
        
    
}

