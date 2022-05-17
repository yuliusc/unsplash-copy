import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  max-width: 90vw;
  height: auto;
  z-index: 2;
  padding: 10px 20px;
  box-sizing: border-box;
  border-radius: 5px;
  font-size: clamp(0.7rem, 2vw, 1rem);
  max-height: 90vh;
`;

const ContainerTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ContainerBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ContainerImg = styled.div`
  display: flex;
  margin: auto;
  position: relative;
`;

const Image = styled.img`
  max-width: 80%;
  max-height: 90vh;
  height: auto;
  margin: auto;
  overflow: auto;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Time = styled.div`
  display: flex;
  align-items: center;
  padding-right: 0.5rem;
`;

const Place = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem;
`;

const Icon = styled.img`
  ${(props) => {
    if (props.user) {
      return `
      height: 30px;
      margin-right: 10px;
    `;
    } else if (props.close) {
      return `
      height: 20px;
      cursor: pointer;
    `;
    } else {
      return `
      height: 20px;
      margin-right: 10px;
    `;
    }
  }}
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(107, 107, 107, 0.7);
  z-index: 1;
  left: 0;
  top: 0;
`;

export {
  Container,
  ContainerTop,
  ContainerBottom,
  ContainerImg,
  Author,
  Time,
  Place,
  Icon,
  Image,
  Overlay,
};
