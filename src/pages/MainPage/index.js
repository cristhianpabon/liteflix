import Header from "../../components/organisms/Header";
import UploadModal from "../../components/molecules/UploadModal";

import MotionDiv from "../../components/atoms/MotionDiv";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { setDisableAnimationsValue } from "../../store/animations/animationsSlice";
import {
  setSelectMovie,
  setSelectedPopularMovies,
} from "../../store/movies/moviesSlice";
import { setMyMovies } from "../../store/mymovies/mymoviesSlice";
import { getRandomMovie, getFourPopularMovies } from "../../utils";

function MainPage() {
  const { selectedMovie } = useSelector((state) => state.movies);
  const [imageUrl, setImageUrl] = useState("");
  const [file, setFile] = useState(null);
  const [movieTitle, setMovieTitle] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [uploadedValue, setUploadedValue] = useState(null);
  const dispatch = useDispatch();
  const isMobile = window.innerWidth < 960;

  const onPressUpload = () => {
    axios
      .post(
        process.env.REACT_APP_BACKEND_ADD_MOVIE,
        {
          title: movieTitle,
          image: file[0],
        },
        {
          onUploadProgress: (data) => {
            const progressValue = Math.round((data.loaded / data.total) * 100);
            setUploadedValue(progressValue);
            // console.log(data.loaded, data.total);
            // console.log(Math.round((data.loaded / data.total) * 100));
          },
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => {
        setFile(null);
        setMovieTitle("");
        setUploadedValue(null);
      })
      .catch((err) => console.log(err));
  };

  //get now playing movie data
  useEffect(() => {
    axios.get(process.env.REACT_APP_NOW_PLAYING_MOVIES).then((response) => {
      const selectedMovie = getRandomMovie(response.data.results);
      dispatch(setSelectMovie(selectedMovie));
    });
  }, [dispatch]);

  //get popular movies data
  useEffect(() => {
    axios.get(process.env.REACT_APP_POPULAR_MOVIES).then((response) => {
      const selectedPopularMovies = getFourPopularMovies(response.data.results);
      dispatch(setSelectedPopularMovies(selectedPopularMovies));
    });
  }, [dispatch]);

  //get my movies list
  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_MOVIES).then((response) => {
      const selectedMovie = getRandomMovie(response.data.data);
      dispatch(setMyMovies(selectedMovie));
    });
  }, [dispatch]);

  //validate if is a web or mobile app
  useEffect(() => {
    if (isMobile) {
      dispatch(setDisableAnimationsValue(true));
    } else {
      dispatch(setDisableAnimationsValue(false));
    }
  }, [dispatch, isMobile]);

  //select a movie & get the background image URL
  useEffect(() => {
    if (selectedMovie && selectedMovie.backdrop_path) {
      const urlData = `${process.env.REACT_APP_ORIGINAL_MOVIE_POSTER}${selectedMovie.backdrop_path}${process.env.REACT_APP_API_KEY}`;
      setImageUrl(urlData);
    }
  }, [dispatch, selectedMovie]);

  return (
    <div>
      <MotionDiv
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6 }}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "-9999",
        }}
      ></MotionDiv>
      <Header setModalIsVisible={setModalIsVisible} />
      {modalIsVisible && (
        <UploadModal
          file={file}
          setFile={setFile}
          movieTitle={movieTitle}
          setMovieTitle={setMovieTitle}
          onPressUpload={onPressUpload}
          setModalIsVisible={setModalIsVisible}
          uploadedValue={uploadedValue}
        />
      )}
    </div>
  );
}

export default MainPage;
