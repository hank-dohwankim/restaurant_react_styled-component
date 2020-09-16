import React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Open Sans', sans-serif;
}

h1,h2,h3 {
  font-family: 'Righteous', cursive;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <h1>Title</h1>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
        deleniti.
      </h3>
    </>
  );
}

export default App;
