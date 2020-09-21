import styled, { css } from 'styled-components';

interface ITransactionForm {
  open: boolean;
}

export const Container = styled.main<ITransactionForm>`
  width: 100%;
  flex: 1;
  margin: 0 auto;
  padding: 16px;
  position: relative;
  height: 100%;

  overflow-x: hidden;

  hr {
    margin: 40px 0;
  }

  ${props =>
    props.open &&
    css`
      overflow-y: hidden;
      position: fixed;
      z-index: 2;
    `}

  @media (min-width: 800px) {
    padding: 20px;
    hr {
      display: none;
    }
  }

  @media (min-width: 900px) {
    margin-top: -180px;
  }
`;

export const CardContainer = styled.section`
  display: grid;
  grid-gap: 16px;
  margin: 0 auto;
  max-width: 1120px;
  margin-top: 80px;

  header + p {
    font-weight: 500;
    font-size: 22px;
    padding-top: 8px;
  }

  @media (min-width: 550px) and (max-width: 800px) {
    grid-gap: 32px;
    margin-top: 100px;

    div:last-child {
      grid-column: 1 / span 2;
    }
  }

  @media (min-width: 801px) and (max-width: 899px) {
    margin-top: 0;
  }

  @media (min-width: 900px) {
    grid-gap: 32px;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 16px;
  border-radius: 5px;
  color: #363f5f;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 800px) {
    padding: 40px 32px;
  }
`;

export const TransactionsContainer = styled.section`
  display: flex;
  max-width: 1220px;
  width: 100%;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 900px) {
    margin: 0 auto;
  }
`;

export const TransactionsBoard = styled.div`
  width: 100%;
`;

export const TransactionList = styled.ul`
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;

  li {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1120px;
    padding: 20px;
    flex-flow: wrap;
    flex-direction: column;
    background: #fff;
    border-radius: 8px;

    &:not(:first-child) {
      margin-top: 8px;
    }

    & > span {
      flex: 1;
      padding: 4px 0;
    }

    @media (min-width: 900px) {
      max-height: 388px;
      align-items: center;
      flex-direction: row;
      margin-top: 4px;
    }
  }

  @media (min-width: 800px) {
    max-height: 312px;
  }
`;

export const TransactionListHeader = styled.ul`
  li {
    display: none;

    & > span {
      flex: 1;
      padding: 4px 0;
    }

    @media (min-width: 900px) {
      margin: 0 auto;
      font-weight: 700;
      max-width: 1120px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-direction: row;
      flex-flow: wrap;
      margin-top: 4px;
    }
  }
`;

export const TransactionForm = styled.div<ITransactionForm>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: ${({ theme }) => theme.colors.light.secondary};
  height: 100vh;
  width: 100%;
  text-align: left;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
  transform: translateX(200%);
  transform: ${({ open }) => (open ? 'translateX(0%)' : 'translateX(200%)')};
  z-index: 1;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.purple.primary};
    margin-bottom: 16px;

    h2 {
      margin: 0;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 32px;
  }
`;
