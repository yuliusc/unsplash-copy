import ReactDOM from "react-dom";
import { useEffect } from "react";

import useGetImageDetails from "../hooks/useGetImageDetails";

import "../assets/css/Modal.css";

import usersvg from "../assets/icons/user.svg";
import locationsvg from "../assets/icons/location.svg";
import closesvg from "../assets/icons/close.svg";
import timesvg from "../assets/icons/time.svg";

const Modal = (props) => {
  const { displayModal, closeModal, chosenPhotoId } = props;
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

const ModalWithOverlay = (props) => {
  const { displayModal, closeModal, imageInfo } = props;

  useEffect(() => {
    if (displayModal) {
      document.getElementById("modal").style.zIndex = 3;
      document.getElementById("overlay").style.zIndex = 1;
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  });

  const closeModalHandler = () => {
    document.getElementById("modal").style.zIndex = -2;
    document.getElementById("overlay").style.zIndex = -2;
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    closeModal();
  };

  const trnasformDate = () => {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (imageInfo) {
      let yearMonth = imageInfo.created_at
        .toString()
        .substr(0, 7)
        .split("-")
        .reverse();
      let result = months[+yearMonth[0] - 1] + " " + yearMonth[1];
      return result;
    }
  };

  let transformedDate = trnasformDate();

  return (
    <>
      {imageInfo && (
        <div className="modal">
          <div className="top">
            <div className="author">
              <img src={usersvg} alt="User icon" className="icon user" />
              <p>{imageInfo.user.name}</p>
            </div>
            <img
              src={closesvg}
              alt="Close icon"
              className="icon close"
              onClick={closeModalHandler}
            />
          </div>

          <div className="mainImgContainer">
            <img
              src={imageInfo.urls.regular}
              className="mainImg"
              alt={imageInfo.alt_description}
            />
          </div>
          <div className="bottom">
            <div className="place">
              {imageInfo.location.name ? (
                <>
                  <img
                    src={locationsvg}
                    alt="Location icon"
                    className="icon location"
                  />
                  <p>{imageInfo.location.name}</p>
                </>
              ) : null}
            </div>
            <div className="time">
              <img src={timesvg} alt="Time icon" className="icon time" />
              {<p>{transformedDate}</p>}
            </div>
          </div>
        </div>
      )}

      <div className="overlay" id="overlay"></div>
    </>
  );
};

export default Modal;
