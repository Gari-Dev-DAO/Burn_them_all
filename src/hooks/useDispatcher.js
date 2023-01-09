import { useContext } from "react"
import { HomeStateContext } from "../States/HomeState"

export const useDispatcher = () => {
    const [homeState,dispatch]=useContext(HomeStateContext)

     const updateBonkAmount=(value)=>{
        dispatch({type:'update bonkAmount',value:value})
    }

    const updateLoading=(value)=>{
        dispatch({type:'update loading',value:value})
    }

    const updateUserBalance=(value)=>{
        dispatch({type:'update userBalance',value:value})
    }

   

    const values={
        updateBonkAmount:updateBonkAmount,
        updateLoading:updateLoading,
        updateUserBalance:updateUserBalance,
    }
    return values
}

