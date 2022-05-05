import ReactDOM from "react-dom";
import { useEffect } from "react";

import "../assets/css/Modal.css";

import usersvg from "../assets/icons/user.svg";
import locationsvg from "../assets/icons/location.svg";
import closesvg from "../assets/icons/close.svg";
import timesvg from "../assets/icons/time.svg";

const Modal = (props) => {
  const { imageInfo, displayModal, closeModal } = props;

  return (
    <>
      {ReactDOM.createPortal(
        <M
          imageInfo={imageInfo}
          displayModal={displayModal}
          closeModal={closeModal}
        ></M>,
        document.getElementById("modal")
      )}
      {ReactDOM.createPortal(
        <Overlay displayModal={displayModal}></Overlay>,
        document.getElementById("overlay")
      )}
    </>
  );
};

const M = (props) => {
  useEffect(() => {
    if (props.displayModal) {
      document.getElementById("modal").style.zIndex = 3;
      document.getElementById("overlay").style.zIndex = 2;
      document.getElementById("overlay").style.zIndex = 2;
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    }
  });
  const closeModal = () => {
    document.getElementById("modal").style.zIndex = -2;
    document.getElementById("overlay").style.zIndex = -2;
    document.getElementsByTagName("body")[0].style.overflow = "auto";
    props.closeModal();
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

    if (props.imageInfo.created_at) {
      let yearMonth = props.imageInfo.created_at
        .toString()
        .substr(0, 7)
        .split("-")
        .reverse();
      let result = months[+yearMonth[0] - 1] + " " + yearMonth[1];
      return result;
    }
  };

  let trnasformedDate = trnasformDate();

  return (
    <>
      {props.imageInfo.length != 0 ? (
        <div className="modal">
          <div className="top">
            <div className="author">
              <img src={usersvg} alt="User icon" className="icon user" />
              <p>{props.imageInfo.user.name}</p>
            </div>
            <img
              src={closesvg}
              alt="Close icon"
              className="icon close"
              onClick={closeModal}
            />
          </div>

          <img
            src={props.imageInfo.urls.regular}
            className="mainImg"
            alt={props.imageInfo.alt_description}
          />

          <div className="bottom">
            <div className="place">
              {props.imageInfo.location.name ? (
                <>
                  <img
                    src={locationsvg}
                    alt="Location icon"
                    className="icon location"
                  />
                  <p>{props.imageInfo.location.name}</p>
                </>
              ) : null}
            </div>
            <div className="time">
              <img src={timesvg} alt="Time icon" className="icon time" />
              <p>{trnasformedDate}</p>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
const Overlay = (props) => {
  return <div className="overlay"></div>;
};
export default Modal;
