import useResults from "./useResults";

import SearchBar from "../SearchBar/SearchBar";
import Modal from "../Modal/Modal";

import { Container, Gallery, Img } from "./Results.styles";

const Results = () => {
  const {
    displayModal,
    closeModal,
    chosenPhotoId,
    images,
    displayModalHandler,
  } = useResults();

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
