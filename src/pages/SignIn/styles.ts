import styled from 'styled-components';

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
  background-color: ${props => props.theme.colors.purple.primary};

  svg {
    color: ${props => props.theme.colors.light.primary};
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 800px;
  background: ${props => props.theme.colors.white};

  h1 {
    margin-bottom: 24px;
    color: ${props => props.theme.colors.purple.primary};
  }

  form {
    margin: 8px 0;
    width: 80%;
    max-width: 340px;
    text-align: center;

    a {
      color: ${props => props.theme.colors.gray.primary};
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: ${props => props.theme.colors.gray.secondary};
      }
    }
  }

  > a {
    color: ${props => props.theme.colors.purple.primary};
    display: block;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    display: flex;
    align-items: center;

    &:hover {
      color: ${props => props.theme.colors.purple.secondary};
      font-weight: bold;
    }

    svg {
      margin-right: 16px;
    }
  }

  @media (min-width: 900px) {
    max-width: 50%;
  }
`;

export const Background = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.purple.primary};
  flex: 1;
  display: none;

  svg {
    width: 400px;
  }

  @media (min-width: 900px) {
    display: flex;
  }
`;
