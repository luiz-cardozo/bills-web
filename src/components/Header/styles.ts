import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  overflow: hidden;
  background: ${props => props.theme.colors.purple.primary};
  padding: 32px;
  justify-content: space-between;
  nav {
    margin-left: 32px;

    a {
      float: left;
      display: block;
      color: #f2f2f2;
      text-align: center;
      padding: 24px;
      text-decoration: none;
      display: none;
    }

    button {
      display: flex;
    }
  }

  @media screen and (min-width: 800px) {
    position: relative;

    a {
      display: none;
    }

    button {
      float: right;
      display: block;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
`;
