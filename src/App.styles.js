import { createGlobalStyle } from "styled-components";

const AppContainer = createGlobalStyle`

body {
  font-family: 'tex', sans-serif;
  margin: 0;
}

#modal,
#overlay {
  position: fixed;
  width: 100vw;
  height: 100vh;
  z-index: -2;
}

#modal {
  display: flex;
  align-items: center;
  justify-content: center;
}
`;

export default AppContainer;
