import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  margin-top: 16px;
  background: #4211d0;
  border: 0;
  padding: 0 16px;
  color: #fff;
  font-weight: bold;
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 16px;
  right: 16px;
  border-radius: 50%;
  box-shadow: 2px 2px 3px ${({ theme }) => theme.colors.gray.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background 0.2s;

  &:hover {
    background: ${shade(0.05, '#4211d0')};
  }
`;
