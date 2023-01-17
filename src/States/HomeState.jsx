import { createContext,useEffect,useReducer } from "react"
import { useWallet} from "@solana/wallet-adapter-react"
import { useConnection } from "@solana/wallet-adapter-react"
export const HomeStateContext=createContext()
const {Provider}=HomeStateContext

const HomeState = ({children}) => {
const {publicKey , sendTransaction}=useWallet()
const { connection } = useConnection();

useEffect(() => {
    dispatch({type:'update publicKey',value:publicKey})
    dispatch({type:'update sendTransaction',value:sendTransaction})
  }, [publicKey,connection,sendTransaction])

const reducer=(state,action)=>{
    const {type,value}=action
    if(type=='update userBalance')
      return  {...state,userBalance:value}
     else if(type=='update bonkAmount')
      return  {...state,bonkAmount:value}
     else if(type=='update loading')
      return  {...state,loading:value}
      else if(type=='update publicKey')
      return  {...state,publicKey:value}
      else if (type=='update sendTransaction')
      return {...state,sendTransaction:value}
      else if (type=='update selectedToken')
      return {...state,selectedToken:value}
    else
    return state;
  }
  

const initialState={
   selectedToken:0,
   userBalance:0,
   bonkAmount:1,
   loading:false,
   publicKey:publicKey,
   connection:connection,
   sendTransaction:sendTransaction
}

const [homeState,dispatch]=useReducer(reducer,initialState);

  return (
   <Provider value={[homeState,dispatch]}>
   {children}
   </Provider>
  )
}

export default HomeState