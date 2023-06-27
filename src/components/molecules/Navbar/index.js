import "./style.css";
import menu from "../../../assets/img/menu.svg";
import menuMobile from "../../../assets/img/menu_mobile.svg";
import notification from "../../../assets/img/notification.svg";
import profile from "../../../assets/img/profile.svg";
import plus from "../../../assets/img/plus.svg";

function Navbar({ isOpen, setIsOpen, setModalIsVisible }) {
  const handleOnPressMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="leftMenu">
          <li className="brand">
            Lite<span>flix</span>
          </li>
          <li
            className="horizontalList"
            onClick={() => setModalIsVisible(true)}
          >
            <img
              className="icon-rightmargin"
              src={plus}
              alt="menu icon button navbar"
            />
            <p>Agregar Pelicula</p>
          </li>
        </ul>
        <ul className="horizontalList rightMenu">
          <li
            onClick={() => {
              handleOnPressMenu();
            }}
          >
            <img src={menu} alt="menu icon button navbar" />
          </li>
          <li>
            <img src={notification} alt="bell icon button navbar" />
          </li>
          <li>
            <img src={profile} alt="profile icon button navbar" />
          </li>
        </ul>
      </nav>
      <nav className="navbar-mobile">
        <ul className="navbar-mobile-menu">
          <li
            onClick={() => {
              handleOnPressMenu();
            }}
          >
            <img src={menuMobile} alt="menu icon button navbar" />
          </li>
          <li className="brand">
            Lite<span>flix</span>
          </li>
          <li>
            <img src={profile} alt="profile icon button navbar" />
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
