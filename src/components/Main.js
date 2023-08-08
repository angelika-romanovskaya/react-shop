import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { ContainerStyle } from '../App';
import Card from './Card';

const MainStyle = styled.main`
  flex: 1;
`;
const MainRowStyle = styled.div`
  padding: 50px 0;
`;
const CardsStyle = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap:15px;
`;

const Main = (props) => {
  const [products, setProducts] = useState([]);
  console.log(products);

  function getProducts(){
    if(props?.category){
      setProducts(props.allProducts.filter((item)=> item.category === props.category))
    } else setProducts(props.allProducts)
  }

  useEffect(() => {
    getProducts();
  },[props]);

  return (
    <MainStyle>
      <ContainerStyle>
        <MainRowStyle>
          <CardsStyle>
            {products.map((product, i) => <Card key={i} product = {product}/>)}
          </CardsStyle>
        </MainRowStyle>
      </ContainerStyle>
    </MainStyle>
  );
};

export default Main;
