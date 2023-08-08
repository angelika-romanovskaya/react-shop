import './App.css';
import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { createGlobalStyle, styled } from 'styled-components';
import Main from './components/Main';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  #root {
    height: 100%;
  }
  html, body {
    height: 100%;
  }
  html {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  ul {
    list-style: none;
  }
  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
`;
export const ContainerStyle = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
const WrapStyle = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;
const App = () => {
  const [allProducts, setAllProducts] = useState([]);
  console.log(allProducts);
  const getAllProducts = async () => {
    try {
      const res = await fetch('https://fakestoreapi.com/products');
      const data = await res.json();

      setAllProducts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <WrapStyle>
      <GlobalStyle />
      <Header />
      <Main allProducts={allProducts} />
      <Footer />
    </WrapStyle>
  );
};

export default App;