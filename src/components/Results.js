import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import SearchBar from "./SearchBar";
import Modal from "./Modal";

import "../assets/css/Results.css";
import useFetchPhotos from "../hooks/useFetchPhotos";

const Results = () => {
  const [images, setImages] = useState(null);
  // const [imageInfo, setImageInfo] = useState([]);
  // const [displayModal, setDisplayModal] = useState(false);

  const location = useLocation();

  const textToFetch = location.pathname
    .replace("/photos/", "")
    .replace("_", " ");
  const fetchedPhotos = useFetchPhotos(textToFetch);

  useEffect(() => {
    setImages(fetchedPhotos);
  }, [location.pathname]);

  // const closeModal = () => {
  //   setDisplayModal(false);
  // };

  return (
    <div className="resultsContainer">
      {/* {!!imageInfo && displayModal ? (
        <Modal
          imageInfo={imageInfo}
          displayModal={displayModal}
          closeModal={closeModal}
        ></Modal>
      ) : null} */}

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
                // onClick={() => getImageDetails(p.id)}
              ></img>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Results;
