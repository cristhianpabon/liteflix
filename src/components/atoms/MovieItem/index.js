import "./style.css";
import MotionDiv from "../MotionDiv";
import play from "../../../assets/img/play.svg";

function MovieItem({ movieTitle, movieUrl, motionValues }) {
  return (
    <MotionDiv
      initial={motionValues.initial}
      animate={motionValues.animate}
      transition={motionValues.transition}
      className="movieItem"
      style={{
        backgroundImage: `url(${movieUrl})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
      }}
    >
      <div className="movieItemButton">
        <div className="playbutton">
          <img src={play} alt="menu icon button navbar" />
        </div>
      </div>
      <div className="movieItemContent">
        <h2 className="movieItemTitle">{movieTitle}</h2>
      </div>
    </MotionDiv>
  );
}

export default MovieItem;
