import React from 'react';
import styled from 'styled-components';
import { MenuList } from '../data/Data';
import { MenuItem, MenuGrid } from './ImgGrid';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 0 400px 50px 20px;
`;

export function Menu() {
  return (
    <MenuStyled>
      <MenuGrid>
        {MenuList.map((menu) => (
          <MenuItem img={menu.img}>{menu.img}</MenuItem>
        ))}
      </MenuGrid>
    </MenuStyled>
  );
}
