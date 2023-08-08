import React from 'react';
import { styled } from 'styled-components';
import { NavLink } from 'react-router-dom'
const CardStyle = styled(NavLink)`
  border: 1px solid #000;
  border-radius: 20px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  max-width: calc(245px - 20px);
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
const Card = ({product}) => {
  return (
    <li>
      <CardStyle to= {'/product/' + product.id} key={product.id}>
        <CardTitleStyle tytle={product.title}>{product.title}</CardTitleStyle>
        <CardImgStyle src={product.image} alt={product.title} />
        <CardPriceStyle>{product.price}$</CardPriceStyle>
      </CardStyle>
    </li>
  );
};

export default Card;