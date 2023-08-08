import React from 'react';
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

const Main = ({ allProducts }) => {
  return (
    <MainStyle>
      <ContainerStyle>
        <MainRowStyle>
          <CardsStyle>
            {allProducts.map((product) => (
              <Card product = {product}/>
            ))}
          </CardsStyle>
        </MainRowStyle>
      </ContainerStyle>
    </MainStyle>
  );
};

export default Main;
