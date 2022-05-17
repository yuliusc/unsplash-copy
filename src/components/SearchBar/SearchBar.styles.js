import styled from "styled-components";

const Form = styled.form`
  min-width: 250px;
  max-width: 700px;
  margin: auto;
  outline: none;
  position: relative;
  margin-bottom: 2rem;
  width: 100%;
`;

const FormSearch = styled.div`
  height: 50px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  padding: 0 10px;
  background-color: white;
  border-radius: 3px;
  margin-top: 1rem;

  ${(props) =>
    props.path !== "/" &&
    `
      border-radius: 2rem;
      background-color: #e9e9e9;
      height: 40px;
      `};
`;

const Button = styled.button`
  height: 20px;
  border: none;
  background-color: inherit;
  cursor: pointer;
`;

const Img = styled.img`
  height: 100%;
`;

const Input = styled.input`
  height: 100%;
  border: none;
  width: -webkit-fill-available;
  padding: 0 10px;
  outline: none;
  background-color: ${(props) => {
    return props.path === "/" ? "white" : "#e9e9e9";
  }};

  ::placeholder,
  ::-webkit-input-placeholder {
    font-weight: 600;
    color: #8f8f8f;
  }
  :-ms-input-placeholder {
    font-weight: 600;
    color: #8f8f8f;
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &::-ms-clear,
  &::-ms-reveal {
    display: none;
    width: 0;
    height: 0;
  }
`;

const SearchResults = styled.div`
  height: auto;
  position: absolute;
  width: 100%;
  background-color: white;
  margin-top: 5px;
  border-radius: 3px;
  margin-top: 5px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  text-align: left;
  padding: 10px 0px;
`;

const SearchResult = styled.p`
  padding: 7px 15px;
  cursor: pointer;
  margin: 0;

  &:hover {
    background-color: #f3f3f3;
  }
`;

const SearchError = styled.p`
  cursor: default;

  &:hover {
    background-color: inherit;
  }
`;

export {
  Form,
  FormSearch,
  Button,
  Img,
  Input,
  SearchResults,
  SearchResult,
  SearchError,
};
