import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";
import Modal from "./Modal";

import "../assets/css/Results.css";
import useFetchPhotos from "../hooks/useFetchPhotos";

const Results = () => {
  const [images, setImages] = useState(null);
  const [chosenPhotoId, setChosenPhotoId] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const location = useLocation();

  const textToFetch = location.pathname
    .replace("/photos/", "")
    .replace("_", " ");
  const fetchedPhotos = useFetchPhotos(textToFetch);

  useEffect(() => {
    setImages(fetchedPhotos);
  }, [fetchedPhotos]);

  const closeModal = () => {
    setDisplayModal(false);
  };

  const displayModalHandler = (id) => {
    setChosenPhotoId(id);
    setDisplayModal(true);
  };

  return (
    <div className="resultsContainer">
      {displayModal ? (
        <Modal
          displayModal={displayModal}
          closeModal={closeModal}
          chosenPhotoId={chosenPhotoId}
        ></Modal>
      ) : null}

      <SearchBar className="searchBarGray"></SearchBar>

      {images != null && (
        <div className="gallery">
          {images.map((p) => {
            return (
              <img
                key={p.id}
                src={p.urls.small}
                loading="lazy"
                alt={p.alt_description}
                onClick={() => displayModalHandler(p.id)}
              ></img>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Results;
