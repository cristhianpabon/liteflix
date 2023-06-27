import "./style.css";
import PrimaryButton from "../../atoms/PrimaryButton";
import SecondaryButton from "../../atoms/SecondaryButton";
import MotionH2 from "../../atoms/MotionH2";
import MotionP from "../../atoms/MotionP";
import play from "../../../assets/img/play.svg";
import plus from "../../../assets/img/plus.svg";

function MovieContent({ movieLabelText, movieTitleText }) {
  return (
    <div className="movieContent">
      <MotionP
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.25 }}
        className="movieContentLabel"
      >
        {movieLabelText}
      </MotionP>
      <MotionH2
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="movieContentTitle"
      >
        {movieTitleText}
      </MotionH2>
      <div className="movieContentButtons">
        <PrimaryButton
          motionButtonValues={{
            initial: { opacity: 0, x: -25 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 1 },
          }}
          icon={<img src={play} alt="play icon button navbar" />}
          text={"REPRODUCIR"}
        />
        <SecondaryButton
          motionButtonValues={{
            initial: { opacity: 0, x: -25 },
            animate: { opacity: 1, x: 0 },
            transition: { duration: 1, delay: 0.5 },
          }}
          icon={<img src={plus} alt="menu icon button navbar" />}
          text={"MI LISTA"}
        />
      </div>
      <div className="backgroundGradient"></div>
    </div>
  );
}

export default MovieContent;
