import axios from "axios";
import { useMemo, useState } from "react";

const useFetchPhotos = (text) => {
  const [fetchedData, setFetchedData] = useState(null);

  useMemo(() => {
    axios
      .get("https://api.unsplash.com/search/photos", {
        params: {
          query: { text },
          per_page: 50,
        },
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_KEY,
        },
      })
      .then((response) => {
        setFetchedData(response.data.results);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [text]);

  return fetchedData;
};

export default useFetchPhotos;
