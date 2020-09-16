import React from 'react';
import styled from 'styled-components';
import { primaryColor } from '../styles/Colors';
import { font } from '../styles/Font';

const NavbarStyled = styled.nav`
  background-color: ${primaryColor};
  padding: 10px;
  position: fixed;
  width: 100%;
  z-index: 999;
`;

const Logo = styled(font)`
  font-size: 1rem;
  color: #fff;
  text-shadow: 1px 1px 4px #380502;
`;

export function Navbar() {
  return (
    <NavbarStyled>
      <Logo>🥂 Hank's Bistro</Logo>
    </NavbarStyled>
  );
}
