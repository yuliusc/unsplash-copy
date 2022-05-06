import axios from "axios";
import { useState } from "react";

const useFetchSuggestions = (typedText) => {
  const [fetchedSuggestions, setFetchedSuggestions] = useState(null);

  axios
    .get(
      "https://api.allorigins.win/raw?url=https://unsplash.com/nautocomplete/" +
        typedText
    )
    .then((response) => {
      setFetchedSuggestions(response.data.autocomplete);
    })
    .catch((error) => {
      console.log(error);
    });

  return fetchedSuggestions;
};

export default useFetchSuggestions;
