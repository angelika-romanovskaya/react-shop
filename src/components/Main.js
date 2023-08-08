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

const Main = (props) => {
  return (
    <MainStyle>
      <ContainerStyle>
        <MainRowStyle>
          <CardsStyle>
            {props.products.map((product, i) => <Card key={i} product = {product}/>)}
          </CardsStyle>
        </MainRowStyle>
      </ContainerStyle>
    </MainStyle>
  );
};

export default Main;
