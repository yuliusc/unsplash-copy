import SearchBar from "../components/SearchBar";

import "../assets/css/Home.css";

const Home = () => {
  return (
    <div className="homePage">
      <div className="container">
        <h1 className="title">Unsplash</h1>
        <p className="description">
          The internet's source of freely-usable images.
          <br />
          Powered by creators everywhere.
        </p>
        <SearchBar></SearchBar>
      </div>
    </div>
  );
};

export default Home;
