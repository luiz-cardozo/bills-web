import styled, { css } from 'styled-components';

interface ITransaction {
  type?: string;
}

export const Container = styled.div`
  margin: 0 auto;
  padding: 40px 20px;
  position: relative;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-gap: 32px;
  /* margin: 42px auto 0 auto; */
  max-width: 1120px;

  header + p {
    font-weight: 500;
    font-size: 22px;
    padding-top: 8px;
  }

  @media (min-width: 550px) and (max-width: 900px) {
    div:last-child {
      grid-column: 1 / span 2;
    }
  }

  @media (min-width: 900px) {
    margin: -120px auto 0 auto;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ResumeContainer = styled.section`
  display: grid;
  grid-gap: 32px;
  margin: 32px auto 0 auto;
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

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
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
      color: props.theme.colors.red;
    `};
`;

// ${props =>
//   props.type === 'income' &&
//   css`
//     color: #12a454;
//   `};
