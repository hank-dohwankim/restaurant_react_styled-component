import styled from 'styled-components';

export const MenuGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const MenuItem = styled.div`
  height: 100px;
  /* background: url('img/menu/menu-3.jpg'); */
  background: ${({ img }) => `url(${img}.jpg);`};
`;
