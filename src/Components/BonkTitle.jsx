const BonkTitle = () => {
  return (
    <div className="bonkTitleContainer">
      <div className="title">
        <p className="emText">
          BONK EM ALL
        </p>
        <p className="burnText">BURN THE BONK$</p>
      </div>
      <div>
        <img
          src={require("../assests/Images/BonkLogo.png")}
          alt="BonkLogo"
          className="bonkLogo"
        />
      </div>
    </div>
  );
};

export default BonkTitle;
