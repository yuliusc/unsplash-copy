import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

import "../css/searchBar.css";

import serachsvg from "../assets/icons/search.svg";
import closesvg from "../assets/icons/close.svg";

const SearchBar = (props) => {
  const [input, setInput] = useState("");
  const [autocomplete, setAutocomplete] = useState([]);
  const [displayResults, setDisplayResults] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const inputChanged = (e) => {
    setInput(e.target.value);
  };

  const fetchPhotosHandlerSugg = (e) => {
    // fetchPhotos(e.target.textContent);
    navigate(`/photos/${e.target.textContent.replace(" ", "_")}`);
    setInput("");
  };

  const fetchPhotosHandler = (e) => {
    if (input.trim(" ").length > 0) {
      // fetchPhotos(input);
      navigate(`/photos/${input.replace(" ", "_")}`);
      setInput("");
    }
  };

  const clearHandler = (e) => {
    e.preventDefault();
    setInput("");
  };

  const fetchSuggestions = (typedText) => {
    axios
      .get(
        "https://thingproxy.freeboard.io/fetch/https://unsplash.com/nautocomplete/" +
          typedText
      )
      .then((response) => {
        setAutocomplete(response.data.autocomplete);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    if (input.trim(" ").length > 2) {
      fetchSuggestions(input);
      setDisplayResults(true);
    } else {
      setDisplayResults(false);
    }
  }, [input]);

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
          location.pathname == "/" ? "searchBar" : "searchBar searchBarGray"
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
          {autocomplete.length > 0 ? (
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
