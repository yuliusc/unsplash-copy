import axios from "axios";
import { useMemo, useState } from "react";

const useFetchSuggestions = (typedText) => {
  const [fetchedData, setFetchedData] = useState(null);

  useMemo(() => {
    axios
      .get(
        "https://api.allorigins.win/raw?url=https://unsplash.com/nautocomplete/" +
          typedText
      )
      .then((response) => {
        setFetchedData(response.data.autocomplete);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [typedText]);

  return fetchedData;
};

export default useFetchSuggestions;
