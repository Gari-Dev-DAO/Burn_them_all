import React, { useState, useContext } from "react";
import { TOKEN } from "../utils/tokensDetail";
import Button from "./Button";
import { useToggle } from "../hooks/useToggle";
import RoundedImage from "./RoundedImage";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import { HomeStateContext } from "../States/HomeState";
import { useDispatcher } from "../hooks/useDispatcher";

const SelectBox = () => {
  const [homeState] = useContext(HomeStateContext);
  const { selectedToken } = homeState;
  const { updateSelectedToken } = useDispatcher();
  const [isToggle, makeToggle] = useToggle(true);

  const handleOptionChange = (value) => {
    updateSelectedToken(value);
    makeToggle();
  };

  return (
    <div className="select">
      <div className="select-input-box">
        <p>
          <RoundedImage src={TOKEN[selectedToken].Icon} size={24} />
        </p>
        <Button onClick={makeToggle}>
          {isToggle ? (
            <GoTriangleUp color="#FFFFFF" size={24} />
          ) : (
            <GoTriangleDown color="#FFFFFF" size={24} />
          )}
        </Button>
      </div>
      <div className={`select-options ${isToggle ? "options-hide" : ""}`}>
        {TOKEN.map((token, index) => {
          const { Name, Icon } = token;
          return (
            <Button key={index} onClick={() => handleOptionChange(index)}>
              <div className="option">
                <RoundedImage src={Icon} size={24} />
                {Name}
              </div>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
export default SelectBox;
