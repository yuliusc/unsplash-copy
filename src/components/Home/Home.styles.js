import styled from "styled-components";
import background from "../../assets/img/michael-lammli-H37Wx7-ovHQ-unsplash.jpg";

const Container = styled.div`
  background-image: url(${background});
  background-size: cover;
  height: 100vh;
  display: flex;
  padding: 20px;
  box-sizing: border-box; ;
`;

const Content = styled.div`
  text-align: left;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  @media (min-width: 768px) {
    width: 50vw;
  }
  @media (min-width: 1200px) {
    width: 30vw;
  }
`;

const Title = styled.div`
  color: white;
  margin: 0;
  font-size: clamp(1.5rem, 5vw, 2.5rem);
`;

const Description = styled.div`
  font-size: clamp(0.7rem, 2vw, 1rem);
  color: white;
`;

export { Container, Content, Title, Description };
