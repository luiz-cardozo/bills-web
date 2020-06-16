import styled, { css } from 'styled-components';

interface ITransaction {
  type?: string;
}

export const Container = styled.div`
  width: 100%;
  flex: 1;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin: -100px auto;
  max-width: 1120px;
`;

export const ResumeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;
  margin: 180px auto 0 auto;
  max-width: 1120px;

  header {
    p {
      font-weight: 700;
    }
  }

  p,
  li {
    margin: 8px 0;
    font-size: 16px;
  }

  li {
    display: flex;
    justify-content: space-between;
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 40px 32px;
  border-radius: 5px;
  color: #363f5f;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Transaction = styled.li<ITransaction>`
  font-size: 16px;
  margin: 8px 0;
  display: flex;
  justify-content: space-between;


    ${props =>
      props.type === 'outcome' &&
      css`
        color: #e83f5b;
      `};
  }

    ${props =>
      props.type === 'income' &&
      css`
        color: #12a454;
      `};
  }
`;
