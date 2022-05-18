import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import useFetchPhotos from "../../hooks/useFetchPhotos";

const useResults = () => {
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

  return {
    displayModal,
    closeModal,
    chosenPhotoId,
    images,
    displayModalHandler,
  };
};

export default useResults;
