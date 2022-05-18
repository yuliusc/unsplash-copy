import { useEffect } from "react";

const useModal = (imageInfo, displayModal, closeModal) => {
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

  return { closeModalHandler, transformedDate };
};

export default useModal;
