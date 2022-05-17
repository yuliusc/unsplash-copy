import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useFetchSuggestions from "../../hooks/useFetchSuggestions";

import {
  Form,
  FormSearch,
  Button,
  Img,
  Input,
  SearchResults,
  SearchResult,
  SearchError,
} from "./SearchBar.styles";

import serachsvg from "../../assets/icons/search.svg";
import closesvg from "../../assets/icons/close.svg";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [autocomplete, setAutocomplete] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);
  const fetchedSuggestions = useFetchSuggestions(input);

  const location = useLocation();
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

  return (
    <Form onBlur={hideSuggestions}>
      <FormSearch path={location.pathname}>
        <Button onClick={fetchPhotosHandler}>
          <Img src={serachsvg} alt="Search icon" />
        </Button>

        <Input
          type="search"
          className="input"
          placeholder="Search free high-resolution photos"
          onChange={inputChanged}
          value={input}
          path={location.pathname}
        />
        <Button onClick={clearHandler}>
          <Img src={closesvg} alt="Close icon" />
        </Button>
      </FormSearch>
      {displayResults ? (
        <SearchResults className="searchResults">
          {autocomplete ? (
            autocomplete.map((a) => {
              return (
                <SearchResult
                  key={a.query}
                  className="result"
                  onMouseDown={fetchPhotosHandlerSugg}
                >
                  {a.query}
                </SearchResult>
              );
            })
          ) : (
            <SearchError className="result error">
              No suggestion found
            </SearchError>
          )}
        </SearchResults>
      ) : null}
    </Form>
  );
};

export default SearchBar;
