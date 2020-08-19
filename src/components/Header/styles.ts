import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 50px;
  width: 100%;
  background: var(--primary);

  > form {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 10px;

    > input {
      display: flex;
      align-items: center;
      background: var(--search);
      padding: 6px 12px;
      margin-left: 10px;
      border: 1px solid var(--border);
      width: 250px;
      border-radius: 10px;
      letter-spacing: 0.025rem;
      font-weight: 400;

      &::placeholder {
        color: var(--gray-light);
      }
    }
  }
  > nav {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
    > ul {
      display: flex;

      > li {
        flex-direction: row;
        padding: 5px;
        cursor: pointer;
        font-weight: 500;
      }
      > li + li {
        margin-left: 10px;
      }
    }
  }

`;
