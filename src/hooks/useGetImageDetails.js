import axios from "axios";

require("dotenv").config();

const getImageDetails = (id) => {
  axios
    .get("https://api.unsplash.com/photos/" + id, {
      headers: {
        Authorization: process.env.Authorization,
      },
    })
    .then((response) => {
      // setDisplayModal(true);
      // setImageInfo(response.data);
    })
    .catch((error) => {
      console.log(error);
    })
    .then(() => {});
};
