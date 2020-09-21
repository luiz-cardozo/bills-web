import styled from 'styled-components';

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  padding: 16px 16px;
  border-radius: 5px;
  color: ${({ theme }) => theme.colors.gray.secondary};
  box-shadow: 0px 2px 1px -1px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 1px 3px 0px rgba(0, 0, 0, 0.12);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-weight: 700;
      font-size: 16px;
    }
  }

  @media (min-width: 800px) {
    padding: 40px 32px;
  }
`;
