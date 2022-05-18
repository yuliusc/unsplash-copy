import ReactDOM from "react-dom";

import useModal from "./useModal";

import useGetImageDetails from "../../hooks/useGetImageDetails";

import {
  Container,
  ContainerTop,
  ContainerBottom,
  ContainerImg,
  Author,
  Time,
  Place,
  Icon,
  Image,
  Overlay,
} from "./Modal.styles";

import usersvg from "../../assets/icons/user.svg";
import locationsvg from "../../assets/icons/location.svg";
import closesvg from "../../assets/icons/close.svg";
import timesvg from "../../assets/icons/time.svg";

const Modal = ({ displayModal, closeModal, chosenPhotoId }) => {
  const imageInfo = useGetImageDetails(chosenPhotoId);

  return (
    <>
      {ReactDOM.createPortal(
        <ModalWithOverlay
          displayModal={displayModal}
          closeModal={closeModal}
          imageInfo={imageInfo}
        ></ModalWithOverlay>,
        document.getElementById("modal")
      )}
    </>
  );
};

const ModalWithOverlay = ({ displayModal, closeModal, imageInfo }) => {
  const { closeModalHandler, transformedDate } = useModal(
    imageInfo,
    displayModal,
    closeModal
  );

  return (
    <>
      {imageInfo && (
        <Container>
          <ContainerTop>
            <Author>
              <Icon src={usersvg} alt="User icon" user />
              <p>{imageInfo.user.name}</p>
            </Author>
            <Icon
              src={closesvg}
              alt="Close icon"
              onClick={closeModalHandler}
              close
            />
          </ContainerTop>

          <ContainerImg>
            <Image
              src={imageInfo.urls.regular}
              alt={imageInfo.alt_description}
            />
          </ContainerImg>
          <ContainerBottom>
            <Place>
              {imageInfo.location.name ? (
                <>
                  <Icon src={locationsvg} alt="Location icon" location />
                  <p>{imageInfo.location.name}</p>
                </>
              ) : null}
            </Place>
            <Time>
              <Icon src={timesvg} alt="Time icon" time />
              {<p>{transformedDate}</p>}
            </Time>
          </ContainerBottom>
        </Container>
      )}

      <Overlay id="overlay"></Overlay>
    </>
  );
};

export default Modal;
