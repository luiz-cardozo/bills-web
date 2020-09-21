import styled from 'styled-components';

interface IMenuProps {
  open: boolean;
}

export const Container = styled.header<IMenuProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.purple.primary};
  height: 100vh;
  width: 80vw;
  text-align: left;
  padding: 100px 16px 16px 16px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.2s ease-in-out;
  transform: translateX(-100%);
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  justify-content: space-between;
  z-index: 1;

  nav {
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-top: 32px;
  }

  a {
    padding: 16px 0;

    color: ${({ theme }) => theme.colors.white};
    text-decoration: none;
    transition: color 0.3s linear;

    &.active {
      &:before {
        content: '';
        position: absolute;
        left: 8px;
        width: 2px;
        height: 24px;
        background: ${props => props.theme.colors.orange};
      }
    }

    &:hover {
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  @media (min-width: 900px) {
    transform: translateX(0%);
    width: 100%;
    padding: 30px 30px 120px;
    flex-direction: row;
    height: auto;
    position: relative;
    z-index: 0;
    height: 220px;

    header {
      padding: 0;
    }

    nav {
      margin-top: 0;
      margin-left: 32px;
      flex-direction: row;
      align-items: center;

      a + a {
        margin-left: 32px;
      }

      a {
        color: ${props => props.theme.colors.white};
        text-decoration: none;
        position: relative;
        overflow: hidden;
        font-size: 16px;
        padding: 8px;

        &:before {
          content: '';
          position: absolute;
          transition: transform 0.2s ease;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: ${props => props.theme.colors.orange};
          transform: translateX(-100%);
        }

        &:hover:before {
          transform: translateX(0);
        }

        &.active:before {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 2px;
          background: ${props => props.theme.colors.orange};
          transform: translateX(0);
        }
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-bottom: 16px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    margin-bottom: 16px;
    line-height: 24px;
    text-align: center;

    strong {
      font-weight: 700;
    }

    span,
    strong {
      color: ${props => props.theme.colors.light.secondary};
    }
  }

  @media (min-width: 900px) {
    margin-left: 80px;
    margin-bottom: 0;
    flex-direction: row;

    div {
      text-align: left;
    }
  }
`;
