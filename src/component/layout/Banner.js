import React from 'react';
import styled from 'styled-components';

const BannerStyled = styled.div`
  height: 100vh;
  background: url('img/banner.jpg') center center/cover no-repeat;
  filter: contrast(70%);
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    color: #fff;
    font-size: 4rem;
  }

  > button {
    cursor: pointer;
    padding: 1rem 2rem;
    border-radius: 3px;
    outline: none;
    border: none;
    margin: 2rem;

    &:hover {
      filter: contrast(110%);
    }
  }
`;

export function Banner() {
  return (
    <>
      <BannerStyled>
        <h1>Welcome to Hank's Bistro</h1>
        <button>View menu</button>
      </BannerStyled>
    </>
  );
}
