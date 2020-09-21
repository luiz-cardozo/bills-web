import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<IContainerProps>`
  border-radius: 10px;
  border: 1px solid #3f3d56;
  padding: 12px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
      color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      color: #4211d0;
      border-color: #4211d0;
    `}

  ${props =>
    props.isFilled &&
    css`
      border-color: #1ed69e;
      color: #1ed69e;
    `}

  input {
    flex: 1;
    border: 0;
    background: transparent
  }

  svg {
    margin-right: 16px;
  }

  @media (min-width: 800px){
    padding: 16px;
  }
`;

export const Error = styled.span`
  width: 100%;
  display: flex;
  margin: 4px 0;
  color: #c53030;
`;
