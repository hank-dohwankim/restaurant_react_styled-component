import styled from 'styled-components';

export const MenuGrid = styled.div`
  padding: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
`;

export const MenuLabel = styled.div`
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  padding: 5px;
  margin: 0.5rem;
  color: #000;
`;

export const MenuItem = styled.div`
  height: 33vh;
  width: 100%;
  /* background: url('img/menu/menu-3.jpg'); */
  background: ${({ img }) => `url(${img}.jpg) center, center/cover;`};
  background-repeat: no-repeat;
  color: #fff;
  border-radius: 3px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
