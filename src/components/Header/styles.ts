import styled from 'styled-components';

export const Container = styled.div`
  background: #4211d0;
  padding: 30px 30px 150px;

  header {
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;

    > img {
      margin-right: 80px;
    }

    nav {
      flex: 1;

      a {
        color: #fff;
        text-decoration: none;

        &:hover {
          opacity: 0.6;
        }

        &.active {
          padding-bottom: 8px;
          border-bottom: 2px solid #ff872c;
          font-weight: bold;
        }
      }

      a + a {
        margin-left: 24px;
      }
    }
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    strong {
      font-weight: 700;
    }

    span,
    strong {
      color: #f4ede8;
    }
  }
`;
