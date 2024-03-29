import React from 'react'
import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components';

const NavStyle = styled.ul`
  display: flex;
  gap:30px;
`;


const LinksStyle = styled(NavLink)`
    text-transform: uppercase;
    text-decoration: none;
`;

export default function Nav({allCategories, filtrProducts}) {
  return (
    <NavStyle>
        {allCategories.map((link, i)=> <li key = {i}><LinksStyle onClick={() => filtrProducts(link)} exact = "true" to = {link}>{link}</LinksStyle></li>)}
    </NavStyle>
  )
}
