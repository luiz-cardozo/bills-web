import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`;

export const Lock = styled.div`
  width: 60px;
  height: 60px;
  display: flex;
  overflow: hidden;
  position: relative;
  font-size: 1.25rem;
  align-items: center;
  flex-shrink: 0;
  line-height: 1;
  user-select: none;
  border-radius: 50%;
  justify-content: center;
  background-color: #4211d0;

  svg {
    color: #ebe7f8;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 720px;

  @media (max-width: 800px) {
    max-width: 100%;
  }

  h1 {
    margin-bottom: 24px;
    color: #4211d0;
  }

  form {
    margin: 8px 0;
    width: 340px;
    text-align: center;

    a {
      color: #3f3d56;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${lighten(0.2, '#3f3d56')};
      }
    }
  }

  > a {
    color: #4211d0;
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${lighten(0.1, '#4211d0')};
    }

    svg {
      margin-right: 16px;
    }
  }
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #4211d0;
  flex: 1;

  svg {
    width: 400px;
  }

  @media (max-width: 800px) {
    display: none;
  }
`;
