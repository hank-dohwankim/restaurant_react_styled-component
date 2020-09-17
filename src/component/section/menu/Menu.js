import React from 'react';
import styled from 'styled-components';
import { menus } from '../../data/Data';
import { MenuItem, MenuGrid, MenuLabel } from './MenuGrid';

const MenuStyled = styled.div`
  height: 1000px;
  margin: 5rem 4rem;
`;

export function Menu() {
  return (
    <MenuStyled>
      {Object.entries(menus).map(([sectionName, menus]) => (
        <>
          <h1>{sectionName}</h1>
          <MenuGrid>
            {menus.map((menu) => (
              <MenuItem img={menu.img}>
                <MenuLabel>{menu.title}</MenuLabel>
              </MenuItem>
            ))}
          </MenuGrid>
        </>
      ))}
    </MenuStyled>
  );
}
