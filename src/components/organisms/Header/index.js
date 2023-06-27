import "./style.css";
import MovieContent from "../../molecules/MovieContent";
import MovieList from "../../molecules/MovieList";
import Navbar from "../../molecules/Navbar";
import Menu from "../../molecules/Menu";
import { useState } from "react";
import { useSelector } from "react-redux";

function Header({ setModalIsVisible }) {
  const { selectedMovie } = useSelector((state) => state.movies);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header>
      <div className="banner">
        <Navbar
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setModalIsVisible={setModalIsVisible}
        />
        <Menu
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setModalIsVisible={setModalIsVisible}
        />
        <div className="bannerContent">
          <div className="bannerContentDirection">
            <div className="bannerMovieContentDirection">
              <MovieContent
                movieLabelText={"ORIGINAL DE NETFLIX"}
                movieTitleText={selectedMovie && selectedMovie.title}
              />
            </div>
            <MovieList />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
