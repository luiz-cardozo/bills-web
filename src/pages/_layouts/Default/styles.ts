import styled from 'styled-components';

export const Container = styled.div`
  /* height: 100vh; */
  overflow-y: auto;
  width: 100%;

  > div:first-child {
    position: fixed;
    z-index: 1;
    width: 100%;
    height: 80px;
    background: ${({ theme }) => theme.colors.light.primary};

    @media (min-width: 800px) {
      position: unset;
      height: auto;
    }
  }

  & > div + div {
    margin-top: 80px;

    @media (min-width: 800px) {
      margin-top: 0;
    }
  }
`;
