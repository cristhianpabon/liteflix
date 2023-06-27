import "./style.css";
import clip from "../../../assets/img/clip.svg";
import close from "../../../assets/img/close.svg";
import { useEffect, useRef, useState } from "react";

import { motion } from "framer-motion";

function UploadModal({
  file,
  setFile,
  movieTitle,
  setMovieTitle,
  onPressUpload,
  setModalIsVisible,
  uploadedValue,
}) {
  const [loadingFile, setLoadingFile] = useState(false);
  const [loadingCompleted, setLoadingCompleted] = useState(false);
  const inputRef = useRef();

  const handleDragOver = (event) => {
    event.preventDefault();
    console.log(event);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log(event);
    setFile(event.dataTransfer.files);
  };

  const handleOnPressUpload = () => {
    onPressUpload();
    setLoadingFile(true);
  };

  useEffect(() => {
    if (uploadedValue === 100) {
      setLoadingCompleted(true);
    }
  }, [uploadedValue]);

  const handleOnPressFinishUpload = () => {
    setLoadingCompleted(false);
    setModalIsVisible(false);
  };

  return (
    <>
      {loadingCompleted ? (
        <div className="uploadModalCompleted">
          <h2 className="uploadModalCompletedTitle">LITEBOX</h2>
          <div className="uploadModalCompletedText">
            <p>¡FELICITACIONES!</p>
          </div>
          <div className="uploadModalCompletedText">
            <p>LITEFLIX THE MOVIE FUE CORRECTAMENTE SUBIDA</p>
          </div>
          <div
            className="uploadModalCompletedButton"
            onClick={() => handleOnPressFinishUpload()}
          >
            <p>IR A HOME</p>
          </div>
        </div>
      ) : (
        <div
          className="uploadModal"
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <img
            className="uploadModalCloseButton"
            src={close}
            alt="menu icon button navbar"
            onClick={() => setModalIsVisible(false)}
          />
          <h2 className="uploadModalTitle">Agregar Pelicula</h2>
          {loadingFile ? (
            <div className="progressbarContainer">
              <div className="progressbarLabel">
                <p>Cargando: {uploadedValue}%</p>
              </div>
              <div className="progressbar">
                <motion.div
                  className="progressbarValue"
                  style={{
                    width: `width: ${uploadedValue}`,
                  }}
                ></motion.div>
              </div>
            </div>
          ) : (
            <div className="uploadModalDropArea">
              <img src={clip} alt="menu icon button navbar" />
              <p onClick={() => inputRef.current.click()}>
                {file == null
                  ? "AGREGA UN ARCHIVO O ARRASTRALO Y SOLTALO AQUI"
                  : Array.from(file).map((file, idx) => file.name)}
              </p>
              <input
                type="file"
                multiple={false}
                onChange={(event) => {
                  setFile(event.target.files);
                }}
                hidden
                ref={inputRef}
              />
            </div>
          )}
          <div className="uploadModalInput">
            <input
              type="text"
              placeholder="TITULO"
              onChange={(event) => setMovieTitle(event.target.value)}
              value={movieTitle}
            />
          </div>
          <div
            className="uploadModalButton"
            onClick={() => handleOnPressUpload()}
          >
            <p>SUBIR PELICULA</p>
          </div>
          <div
            className="uploadModalButtonExit"
            onClick={() => setModalIsVisible(false)}
          >
            <p>SALIR</p>
          </div>
        </div>
      )}
    </>
  );
}

export default UploadModal;
