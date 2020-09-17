import React from 'react';
import styled from 'styled-components';
import { MenuList } from '../../data/Data';
import { MenuItem, MenuGrid, MenuLabel } from './MenuGrid';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 5rem 5rem;
`;

export function Menu() {
  return (
    <MenuStyled>
      <MenuGrid>
        {MenuList.map((menu) => (
          <MenuItem img={menu.img}>
            <MenuLabel>{menu.title}</MenuLabel>
          </MenuItem>
        ))}
      </MenuGrid>
    </MenuStyled>
  );
}
