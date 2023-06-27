import "./style.css";
import close from "../../../assets/img/close.svg";
import notification from "../../../assets/img/notification.svg";
import profile from "../../../assets/img/profile.svg";

import { motion } from "framer-motion";

function Menu({ isOpen, setIsOpen, setModalIsVisible }) {
  const handleOnPressMenu = () => {
    setIsOpen(false);
  };

  const handleOnPressAddMovie = () => {
    setModalIsVisible(true);
    setIsOpen(false);
  };
  return (
    <motion.div
      style={{ translateX: isOpen ? "0" : "100%" }}
      transition={{ duration: 1 }}
      className="menuScreen"
    >
      <div className="menuScreenContent">
        <div className="menuScreenNavbar">
          <ul className="leftMenuScreen">
            <li
              onClick={() => {
                handleOnPressMenu();
              }}
            >
              <img src={close} alt="close icon button navbar" />
            </li>
          </ul>
          <ul className="rightMenuScreen">
            <li>
              <img src={notification} alt="notification icon button navbar" />
            </li>
            <li>
              <img src={profile} alt="profile icon button navbar" />
            </li>
          </ul>
          <ul className="menuScreenMobile">
            <li
              onClick={() => {
                handleOnPressMenu();
              }}
            >
              <img src={close} alt="notification icon button navbar" />
            </li>
            <li className="brand">
              Lite<span>flix</span>
            </li>
            <li>
              <img src={profile} alt="profile icon button navbar" />
            </li>
          </ul>
        </div>
        <ul className="menuScreenButtons">
          <li>INICIO</li>
          <li>SERIE</li>
          <li>PELICULAS</li>
          <li>AGREGADAS RECIENTEMENTE</li>
          <li>POPULARES</li>
          <li>MIS PELICULAS</li>
          <li>MI LISTA</li>
          <li
            className="menuScreenBigButton"
            onClick={() => handleOnPressAddMovie()}
          >
            + AGREGAR PELICULA
          </li>
          <li>CERRAR SESIÓN</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Menu;
