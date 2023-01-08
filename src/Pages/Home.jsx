import { useState, useEffect, useMemo } from "react";
import BonkButton from "../Components/BonkButton";
import BonkInput from "../Components/BonkInput";
import {
  burnAndTransferBonkToken,
  getBonkTokenBalance,
} from "../services/splApis";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { BONK_LIMIT } from "../utils/BonkAdmin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const { publicKey, sendTransaction } = useWallet("");
  const { connection } = useConnection();
  const [userBalance, setUserBalance] = useState(0);
  const [bonkAmount, setBonkAmount] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getBalance = async () => {
      if (publicKey) {
        const balance = await getBonkTokenBalance(publicKey?.toString());
        setUserBalance(balance);
      }
    };
    getBalance();
  }, [publicKey, connection, loading]);

  const isDisabled = useMemo(() => {
    if (!publicKey) return true;
    return userBalance < bonkAmount * BONK_LIMIT ? true : false;
  }, [publicKey, bonkAmount, userBalance]);

  const burnBonkTokens = async () => {
    setLoading(true);
    const error = await burnAndTransferBonkToken(
      bonkAmount * BONK_LIMIT,
      publicKey.toString(),
      sendTransaction
    );
    if (!error) {
      toast.success("Thanks For Bonking!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      toast.error("Something Went Wrong!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
    setLoading(false);
  };

  return (
    <div className="home">
      <BonkInput {...{ bonkAmount, setBonkAmount }} />
      <div>
        <BonkButton onClick={burnBonkTokens} isDisabled={isDisabled}>
          BONK
        </BonkButton>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Home;
