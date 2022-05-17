import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;

  @media (min-width: 768px) {
    width: 750px;
    margin: auto;
  }

  @media (min-width: 1400px) {
      width: 1200px;
      margin: auto;

`;

const Gallery = styled.div`
  column-count: 2;
  column-gap: 10px;

  @media (min-width: 768px) {
    column-count: 3;
    column-gap: 15px;
  }

  @media (min-width: 1200px) {
    column-count: 4;
  }
`;

const Img = styled.img`
  width: 100% !important;
  height: auto !important;
  margin-bottom: 5px;
  cursor: pointer;

  @media (min-width: 768px) {
    margin-bottom: 10px;
  }
`;

export { Container, Gallery, Img };
