import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import useFetchSuggestions from "../hooks/useFetchSuggestions";

import "../assets/css/searchBar.css";

import serachsvg from "../assets/icons/search.svg";
import closesvg from "../assets/icons/close.svg";

const SearchBar = () => {
  const [input, setInput] = useState("");
  const [autocomplete, setAutocomplete] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);
  const fetchedSuggestions = useFetchSuggestions(input);
  console.log(fetchedSuggestions);
  const location = useLocation();
  const navigate = useNavigate();

  const inputChanged = (e) => {
    setInput(e.target.value);
  };

  const fetchPhotosHandlerSugg = (e) => {
    navigate(`/photos/${e.target.textContent.replace(" ", "_")}`);
    setInput("");
  };

  const fetchPhotosHandler = (e) => {
    if (input.trim(" ").length > 0) {
      navigate(`/photos/${input.replace(" ", "_")}`);
      setInput("");
    }
  };

  const clearHandler = (e) => {
    e.preventDefault();
    setInput("");
  };

  useEffect(() => {
    console.log(fetchedSuggestions);
    if (input.trim(" ").length > 2) {
      setAutocomplete(fetchedSuggestions);
      setDisplayResults(true);
    } else {
      setDisplayResults(false);
    }
  }, [input, fetchedSuggestions, autocomplete]);

  const hideSuggestions = (e) => {
    setDisplayResults(false);
  };

  return (
    <form
      className="search"
      onSubmit={fetchPhotosHandler}
      onBlur={hideSuggestions}
    >
      <div
        className={
          location.pathname === "/" ? "searchBar" : "searchBar searchBarGray"
        }
      >
        <button onClick={fetchPhotosHandler}>
          <img src={serachsvg} alt="Search icon" />
        </button>
        <input
          type="search"
          className="input"
          placeholder="Search free high-resolution photos"
          onChange={inputChanged}
          value={input}
        />
        <button onClick={clearHandler}>
          <img src={closesvg} alt="Close icon" />
        </button>
      </div>

      {displayResults ? (
        <div className="searchResults">
          {autocomplete ? (
            autocomplete.map((a) => {
              return (
                <p
                  key={a.query}
                  className="result"
                  onMouseDown={fetchPhotosHandlerSugg}
                >
                  {a.query}
                </p>
              );
            })
          ) : (
            <p className="result error">No suggestion found</p>
          )}
        </div>
      ) : null}
    </form>
  );
};

export default SearchBar;
