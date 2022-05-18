import { useLocation } from "react-router-dom";

import useSearchBar from "./useSearchBar";

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
  const location = useLocation();

  const {
    hideSuggestions,
    fetchPhotosHandler,
    inputChanged,
    displayResults,
    clearHandler,
    autocomplete,
    input,
    fetchPhotosHandlerSugg,
  } = useSearchBar();

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
