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
import ReactLoading from 'react-loading';
import "react-toastify/dist/ReactToastify.css";
import MeetBonk from "../Components/MeetBonk";
import DogImages from "../Components/DogImages";
import BonkTitle from "../Components/BonkTitle";
import AboutBonk from "../Components/AboutBonk";


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
    if (!publicKey || !userBalance) return true;
    return userBalance < bonkAmount * BONK_LIMIT ? true : false;
  }, [publicKey, bonkAmount, userBalance]);

  function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


  const burnBonkTokens = async () => {
    setLoading(true);
    
    const error = await burnAndTransferBonkToken(
      bonkAmount * BONK_LIMIT,
      publicKey.toString(),
      sendTransaction
    );
    setLoading(false);
    await timeout(2000)
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

  return (
    <div className="home">
      {loading?  <ReactLoading type={'spin'} color={'white'} height={'100px'} width={'100px'} className='loading' />:
      <>
     <BonkTitle/>
     <AboutBonk/>
      <DogImages/>
      <BonkInput {...{ bonkAmount, setBonkAmount }} />
      <div className="bonkBox">
        <img src={require('../assests/Images/baseball-bat.png')} alt='baseball-bat' className="batImage"/>
        <BonkButton onClick={burnBonkTokens} isDisabled={isDisabled}>
          BONK
        </BonkButton>
      </div>
      <MeetBonk/>
      <ToastContainer />
      </>}
    </div>
  );
};

export default Home;
