import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

import SearchBar from "./SearchBar";
import Modal from "./Modal";

import "../assets/css/Results.css";

const Results = () => {
  const [images, setImages] = useState(null);
  const [imageInfo, setImageInfo] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);
  const location = useLocation();

  const getImageDetails = (id) => {
    axios
      .get("https://api.unsplash.com/photos/" + id, {
        headers: {
          Authorization:
            "Client-ID U_AHavzNq1TllMAV6V5HXzEtZGk_eiK_bgE5ITcxum8",
        },
      })
      .then((response) => {
        setDisplayModal(true);
        setImageInfo(response.data);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});
  };

  const fetchPhotos = (text) => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: { text },
          per_page: 50,
        },
        headers: {
          Authorization:
            "Client-ID ETRMvKeQo3cuywlMYUeDTdRKB4ZOiBsWkh_Astw4UNQ",
        },
      })
      .then((response) => {
        setImages(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .then(() => {});
  };

  useEffect(() => {
    fetchPhotos(location.pathname.replace("/photos/", "").replace("_", " "));
  }, [location.pathname]);

  const closeModal = () => {
    setDisplayModal(false);
  };

  return (
    <div className="resultsContainer">
      {!!imageInfo && displayModal ? (
        <Modal
          imageInfo={imageInfo}
          displayModal={displayModal}
          closeModal={closeModal}
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
                onClick={() => getImageDetails(p.id)}
              ></img>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Results;
