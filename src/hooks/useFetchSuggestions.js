import axios from "axios";
import { useState, useMemo } from "react";

const useFetchSuggestions = (typedText) => {
  // const [fetchedSuggestions, setFetchedSuggestions] = useState(null);

  // const temp = useMemo(() => {
  //   return typedText;
  // }, [typedText]);

  axios
    .get(
      "https://api.allorigins.win/raw?url=https://unsplash.com/nautocomplete/" +
        typedText
    )
    .then((response) => {
      // console.log(response.data.autocomplete);
      return response.data.autocomplete;
      // setFetchedSuggestions();
    })
    .catch((error) => {
      console.log(error);
    });

  // return fetchedSuggestions;
};

export default useFetchSuggestions;
