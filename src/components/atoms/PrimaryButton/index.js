import BaseButton from "../BaseButton/BaseButton";
import "./style.css";

function PrimaryButton({
  icon,
  text,
  textStyle,
  buttonStyle,
  onPress,
  motionButtonValues,
}) {
  return (
    <>
      <BaseButton
        icon={icon}
        text={text}
        buttonStyle={`primaryButton ${
          buttonStyle !== undefined ? buttonStyle : ""
        }`}
        textStyle={`${textStyle !== undefined ? textStyle : ""}`}
        onPress={onPress}
        motionButtonValues={motionButtonValues}
      />
    </>
  );
}

export default PrimaryButton;
