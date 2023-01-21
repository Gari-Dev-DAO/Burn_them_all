import { useContext } from "react";
import { BsXLg } from "react-icons/bs";
import Button from "./Button";
import CopyClipText from "./CopyClipText";
import RoundedImage from "./RoundedImage";
import { HomeStateContext } from "../States/HomeState";
import { useLeaderBoard } from "../hooks/useLeaderBoard";

const UserRank = ({setIsLeaderBoardDisplay }) => {
  const [HomeState] = useContext(HomeStateContext);
  const { publicKey } = HomeState;
  const { rank } = useLeaderBoard();

  return (
    <div className="userRank">
      <RoundedImage src={require("../assests/Images/avtar1.png")} size={52} />
      <div style={{ width: "50%" }}>
        {publicKey && rank ? (
          <>
            <p >
              <CopyClipText text={publicKey.toString()} style={{fontSize:'20px'}} />
            </p>
            <p  style={{fontWeight:600}}>#{rank}</p>
          </>
        ) : publicKey ? (
          <p style={{fontSize:'1.2rem'}}>Bonk to be in Leaderboard</p>
        ) : (
          <p style={{fontSize:'1.2rem'}}>Connect Wallet to See your Rank</p>
        )}
      </div>
      <div style={{ position: "absolute", top: "1.2rem", right: "1.2rem" }}>
        <Button onClick={() => setIsLeaderBoardDisplay(false)}>
          <BsXLg size={26} color="#fdb000" />
        </Button>
      </div>
    </div>
  );
};

export default UserRank;
