import axios from "axios";
import { useMemo, useState } from "react";

const useGetImageDetails = (id) => {
  const [fetchedData, setFetchedData] = useState(null);

  useMemo(() => {
    axios
      .get("https://api.unsplash.com/photos/" + id, {
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_KEY,
        },
      })
      .then((response) => {
        setFetchedData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  return fetchedData;
};

export default useGetImageDetails;
