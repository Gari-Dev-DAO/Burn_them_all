import { useContext,useMemo,useEffect } from "react"
import {toast } from "react-toastify";
import { HomeStateContext } from "../States/HomeState"
import { burnAndTransferBonkToken ,getBonkTokenBalance, testZupiter} from "../services/splApis"
import { BONK_LIMIT } from "../utils/BonkAdmin"
import { timeout } from "../utils/js-utils"
import { useDispatcher } from "./useDispatcher";
import { TOKEN } from "../utils/tokensDetail";


export const useBonk = () => {
  const [homeState,dispatch]=useContext(HomeStateContext)
  const {userBalance,bonkAmount,loading,publicKey,connection,sendTransaction,selectedToken}=homeState
 const {updateUserBalance,updateLoading}=useDispatcher()

  useEffect(() => {
    const getBalance = async () => {
      if (publicKey) {
        const {MintAddress}=TOKEN[selectedToken]
        const balance = await getBonkTokenBalance(publicKey?.toString(),MintAddress);
        updateUserBalance(balance)
      }
    };
    getBalance();
  }, [publicKey, connection, loading,selectedToken]);

  const burnBonkTokens = async () => {
  const {MintAddress,Decimals}=TOKEN[selectedToken]
   updateLoading(true)
    const error = await burnAndTransferBonkToken(
      bonkAmount * BONK_LIMIT,
      publicKey.toString(),
      MintAddress,
      Decimals,
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
  }, [publicKey, bonkAmount, userBalance,selectedToken]);

return {burnBonkTokens,isDisabled}

}

