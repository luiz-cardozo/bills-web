import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 10px;
  border: 1px solid #3f3d56;
  padding: 16px;
  width: 100%;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }

  input {
    flex: 1;
    border: 0;
  }

  svg {
    margin-right: 16px;
  }
`;
