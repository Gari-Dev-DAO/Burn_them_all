

const AboutBonk = ({setIsLeaderBoardDisplay}) => {
  return (
    <div className="aboutBonk">
      <button className="nftbtn" onClick={()=>setIsLeaderBoardDisplay(true)}>LeaderBoard</button>
      <p className="infoText">
        It is the first meme crypto on Solana blockchain and has been
        responsible for boosting the price of SOL token in the past weeks
      </p>
    </div>
  );
};

export default AboutBonk;