import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  height: 56px;
  margin-top: 16px;
  background: #4211d0;
  border-radius: 10px;
  border: 0;
  width: 100%;
  padding: 0 16px;
  color: #fff;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.05, '#4211d0')};
  }
`;
