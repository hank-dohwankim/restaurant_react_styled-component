import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Navbar } from './component/layout/Navbar';
import { Banner } from './component/layout/Banner';

const GlobalStyle = createGlobalStyle`
body {
  font-family: Arial, Helvetica, sans-serif
}

h1,h2,h3 {
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Banner />
      <h1>Title</h1>
      <h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate,
        deleniti.
      </h3>
    </>
  );
}

export default App;
