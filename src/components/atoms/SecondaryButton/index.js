import BaseButton from "../BaseButton/BaseButton";
import "./style.css";

function SecondaryButton({
  icon,
  text,
  textStyle,
  buttonStyle,
  onPress,
  motionButtonValues,
  motionTextValues,
}) {
  return (
    <>
      <BaseButton
        icon={icon}
        text={text}
        buttonStyle={`secondaryButton ${
          buttonStyle !== undefined ? buttonStyle : ""
        }`}
        textStyle={`${textStyle !== undefined ? textStyle : ""}`}
        onPress={onPress}
        motionButtonValues={motionButtonValues}
        motionTextValues={motionTextValues}
      />
    </>
  );
}

export default SecondaryButton;
