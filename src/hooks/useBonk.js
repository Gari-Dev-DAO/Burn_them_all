import { useContext,useMemo,useEffect } from "react"
import {toast } from "react-toastify";
import { HomeStateContext } from "../States/HomeState"
import { burnAndTransferBonkToken ,getBonkTokenBalance} from "../services/splApis"
import { BONK_LIMIT } from "../utils/BonkAdmin"
import { timeout } from "../utils/js-utils"
import { useDispatcher } from "./useDispatcher";


export const useBonk = () => {
  const [homeState,dispatch]=useContext(HomeStateContext)
  const {userBalance,bonkAmount,loading,publicKey,connection,sendTransaction}=homeState
 const {updateUserBalance,updateLoading}=useDispatcher()
  useEffect(() => {
    const getBalance = async () => {
      if (publicKey) {
        const balance = await getBonkTokenBalance(publicKey?.toString());
        updateUserBalance(balance)
      }
    };
    getBalance();
  }, [publicKey, connection, loading]);


  const burnBonkTokens = async () => {
   updateLoading(true)
    const error = await burnAndTransferBonkToken(
      bonkAmount * BONK_LIMIT,
      publicKey.toString(),
      sendTransaction
    );

   updateLoading(false)
    await timeout(2000);
    if (!error) {
      toast.success("Thanks For Bonking!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Something Went Wrong!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  const isDisabled = useMemo(() => {
    if (!publicKey || !userBalance) return true;
    return userBalance < bonkAmount * BONK_LIMIT;
  }, [publicKey, bonkAmount, userBalance]);

return {burnBonkTokens,isDisabled}

}

