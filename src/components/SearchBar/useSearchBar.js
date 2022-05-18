import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import useFetchSuggestions from "../../hooks/useFetchSuggestions";

const useSearchBar = () => {
  const [input, setInput] = useState("");
  const [autocomplete, setAutocomplete] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);
  const fetchedSuggestions = useFetchSuggestions(input);

  const navigate = useNavigate();

  const inputChanged = (e) => {
    setInput(e.target.value);
  };

  const fetchPhotosHandlerSugg = (e) => {
    navigate(`/photos/${e.target.textContent.replaceAll(" ", "_")}`);
    setInput("");
  };

  const fetchPhotosHandler = (e) => {
    e.preventDefault();
    if (input.trim(" ").length > 0) {
      navigate(`/photos/${input.replaceAll(" ", "_")}`);
      setInput("");
    }
  };

  const clearHandler = (e) => {
    e.preventDefault();
    setInput("");
  };

  useEffect(() => {
    if (input.trim(" ").length > 2) {
      setAutocomplete(fetchedSuggestions);
      setDisplayResults(true);
    } else {
      setDisplayResults(false);
    }
  }, [input, fetchedSuggestions]);

  const hideSuggestions = (e) => {
    setDisplayResults(false);
  };

  return {
    hideSuggestions,
    fetchPhotosHandler,
    inputChanged,
    displayResults,
    clearHandler,
    autocomplete,
    input,
    fetchPhotosHandlerSugg,
  };
};

export default useSearchBar;
