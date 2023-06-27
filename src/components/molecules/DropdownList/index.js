import "./style.css";
import arrow from "../../../assets/img/arrow.svg";
import MotionDiv from "../../atoms/MotionDiv";
import { useState } from "react";

function DropdownList({ labelText, motionValues }) {
  const options = ["POPULARES", "MI PELICULAS"];
  const [isActive, setIsActive] = useState(false);
  const [selectedValue, setSelectedValue] = useState(options[0]);

  const handleOnPressOption = (option) => {
    setSelectedValue(option);
    setIsActive(false);
  };
  return (
    <MotionDiv
      initial={motionValues.initial}
      animate={motionValues.animate}
      transition={motionValues.transition}
      className="DropdownList"                    
    >
      <div
        className="DropdownListLabel"
        onClick={(e) => {
          setIsActive(!isActive);
        }}
      >
        <p>
          {labelText}: {selectedValue}
        </p>
        <img src={arrow} alt="menu icon button navbar" />
      </div>
      {isActive && (
        <ul className="DropdownOptions">
          {options.map((option) => (
            <li
              onClick={() => {
                handleOnPressOption(option);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </MotionDiv>
  );
}

export default DropdownList;
