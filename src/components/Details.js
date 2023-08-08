import React from 'react';
import { styled } from 'styled-components';

const CardStyle = styled.div`
  border: 1px solid #000;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin:  10px auto;
  max-width: calc(500px - 20px);
  min-height: 300px;
`;
const CardTitleStyle = styled.h2`
  font-size:20px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const CardImgStyle = styled.img`
  padding: 10px;
  width: 200px;
  height: 200px;
  object-fit: contain;
`;
const CardPriceStyle = styled.span`
    font-size: 15px;
`;
const Details = ({product}) => {
    return (
      <li>
        <CardStyle href= {'product/' + product.id} key={product.id}>
          <CardTitleStyle tytle={product.title}>{product.title}</CardTitleStyle>
          <CardImgStyle src={product.image} alt={product.title} />
          <p>{product.description}</p>
          <CardPriceStyle>{product.price}$</CardPriceStyle>
        </CardStyle>
      </li>
    );
  };
  
  export default Details;