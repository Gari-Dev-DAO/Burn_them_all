import { TOKEN_LIST_URL } from "@jup-ag/core";
import { JupiterProvider, useJupiter } from "@jup-ag/react-hook";
import { useState,useEffect } from "react";
import { PublicKey } from "@solana/web3.js";
import JSBI from "jsbi";



export const useZupiterSwap = () => {
      const [tokens, setTokens] = useState([])
      const [inputMint] = useState(new PublicKey("EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v"))
      const [outputMint] = useState(new PublicKey("Es9vMFrzaCERmJfrF4H2FYD4KCoNkY11McCe8BenwNYB"))
    
      useEffect(() => {
          fetch(TOKEN_LIST_URL[0])
            .then(response => response.json())
            .then(result => setTokens(result))
        }, [])
        
      const jupiter = useJupiter({
        amount: JSBI.BigInt(1 * (10 ** 6)), // raw input amount of tokens
        inputMint,
        outputMint,
        slippage: 1, // 1% slippage
        debounceTime: 250, // debounce ms time before refresh
      })
      
      // ...
      const {
        allTokenMints, // all the token mints that is possible to be input
        routeMap, // routeMap, same as the one in @jup-ag/core
        exchange, // exchange 
        refresh, // function to refresh rates
        lastRefreshTimestamp, // timestamp when the data was last returned
        loading, // loading states
        routes, // all the routes from inputMint to outputMint
        error,
      } = jupiter
      console.log(routes[0])
      console.log(allTokenMints)
      return routes
}

