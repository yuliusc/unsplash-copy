import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import SearchBar from "../SearchBar/SearchBar";
import Modal from "../Modal/Modal";

import { Container, Gallery, Img } from "./Results.styles";
import useFetchPhotos from "../../hooks/useFetchPhotos";

const Results = () => {
  const [images, setImages] = useState(null);
  const [chosenPhotoId, setChosenPhotoId] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const location = useLocation();

  const textToFetch = location.pathname
    .replaceAll("/photos/", "")
    .replaceAll("_", " ");
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
    <Container>
      {displayModal ? (
        <Modal
          displayModal={displayModal}
          closeModal={closeModal}
          chosenPhotoId={chosenPhotoId}
        ></Modal>
      ) : null}

      <SearchBar></SearchBar>

      {images != null && (
        <Gallery>
          {images.map((p) => {
            return (
              <Img
                key={p.id}
                src={p.urls.small}
                loading="lazy"
                alt={p.alt_description}
                onClick={() => displayModalHandler(p.id)}
              />
            );
          })}
        </Gallery>
      )}
    </Container>
  );
};

export default Results;
