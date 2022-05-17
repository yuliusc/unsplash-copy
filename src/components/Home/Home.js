import SearchBar from "../SearchBar/SearchBar";

import { Container, Content, Title, Description } from "./Home.styles";

const Home = () => {
  return (
    <Container>
      <Content>
        <Title>Unsplash</Title>
        <Description>
          The internet's source of freely-usable images.
          <br />
          Powered by creators everywhere.
        </Description>
        <SearchBar></SearchBar>
      </Content>
    </Container>
  );
};

export default Home;
