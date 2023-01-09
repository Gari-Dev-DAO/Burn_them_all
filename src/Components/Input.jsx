import { useContext } from "react";
import { AiOutlineUp, AiOutlineDown } from "react-icons/ai";
import { HomeStateContext } from "../States/HomeState";
import Button from "./Button";
import { useDispatcher } from "../hooks/useDispatcher";

const Input = () => {
  const [homeState]=useContext(HomeStateContext)
  const {bonkAmount}=homeState
  const {updateBonkAmount}=useDispatcher()

  const handleInputChange = (e) => {
    e.preventDefault();
    updateBonkAmount(e.target.value)
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <Button
        onClick={() => {
          updateBonkAmount(bonkAmount+1)
        }}
        style={{ background: "none", color: "blue" }}
      >
        <AiOutlineUp color="#FED900" size="25px" />
      </Button>
      <input
        type="number"
        value={bonkAmount}
        onChange={handleInputChange}
        className="input"
      />
      <Button
        onClick={() => {
         updateBonkAmount(Math.max(1, bonkAmount - 1))
        }}
      >
        <AiOutlineDown color="#FED900" size="25px" />
      </Button>
    </div>
  );
};

export default Input;
