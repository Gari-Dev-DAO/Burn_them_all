 import {useContext } from "react";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BonkButton from "../Components/BonkButton";
import BonkInput from "../Components/BonkInput";
import MeetBonk from "../Components/MeetBonk";
import DogImages from "../Components/DogImages";
import BonkTitle from "../Components/BonkTitle";
import AboutBonk from "../Components/AboutBonk";
import Loading from "../Components/Loading";
import { HomeStateContext } from "../States/HomeState";
import { useBonk } from "../hooks/useBonk";
import { useWallet } from "@solana/wallet-adapter-react";



const Home = () => {
const {publicKey}=useWallet()
const {burnBonkTokens,isDisabled}=useBonk()
const [homeState]=useContext(HomeStateContext)
const {loading}=homeState
   

  return (
    <div className="home">
      {loading ? (
        <Loading/>
      ) : (
        <>
          <BonkTitle />
          <AboutBonk />
          <DogImages />
          <BonkInput />
          <div className="bonkBox">
            <img
              src={require("../assests/Images/baseball-bat.png")}
              alt="baseball-bat"
              className="batImage"
            />
            <BonkButton onClick={burnBonkTokens} isDisabled={isDisabled}>
              BURN
            </BonkButton>
          </div>
          <MeetBonk />
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default Home;
