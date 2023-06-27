import "./style.css";
import MotionDiv from "../MotionDiv";
import MotionP from "../MotionP";

function BaseButton({
  icon,
  text,
  buttonStyle,
  textStyle,
  onPress,
  motionButtonValues,
  motionTextValues,
}) {
  return (
    <>
      {motionButtonValues ? (
        <MotionDiv
          initial={motionButtonValues.initial}
          animate={motionButtonValues.animate}
          transition={motionButtonValues.transition}
          className={`baseButton ${
            buttonStyle !== undefined ? buttonStyle : ""
          } ${icon && "align-icon-button"}`}
          onClick={() => onPress && onPress()}
        >
          {icon && icon}{" "}
          {motionTextValues ? (
            <MotionP
              initial={motionTextValues.initial}
              animate={motionTextValues.animate}
              transition={motionTextValues.transition}
              className={`${textStyle !== undefined ? textStyle : ""} ${
                icon && "icon-leftmargin"
              }`}
            >
              {text}
            </MotionP>
          ) : (
            <p
              className={`${textStyle !== undefined ? textStyle : ""} ${
                icon && "icon-leftmargin"
              }`}
            >
              {text}
            </p>
          )}
        </MotionDiv>
      ) : (
        <div
          className={`baseButton ${
            buttonStyle !== undefined ? buttonStyle : ""
          } ${icon && "align-icon-button"}`}
          onClick={() => onPress && onPress()}
        >
          {icon && icon}{" "}
          <p
            className={`${textStyle !== undefined ? textStyle : ""} ${
              icon && "icon-leftmargin"
            }`}
          >
            {text}
          </p>
        </div>
      )}
    </>
  );
}

export default BaseButton;
