import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: var(--header);
  padding: 11px 16px;
`;

export const GithubLogo = styled(FaGithub)`
  fill: var(--logo);
  height: 32px;
  width: 32px;
  flex-shrink: 0;
`;

export const SearchForm = styled.form`
  display: flex;

  > input {
    display: flex;
    outline: 0;
    align-items: center;
    height: 30px;
    width: 300px;
    background: var(--black);
    padding-left: 12px;
    margin: 0 10px;
    border: 1px solid none;
    border-radius: 6px;
    font-weight: 400;
    transition: width .2s ease-out, color .2s ease-out;

    &:focus {
      width: 400px;
    }

    &::placeholder {
      color: var(--search-placeholder);
      font-family: Arial !important;
    }
  }
  > img {
    display: flex;
    align-items: center;
    margin-left: -40px;
    height: 30px;
  }
`;

export const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 5px;
  margin-left: 10px;

  > ul {
    display: flex;

    > li {
      flex-direction: row;
      padding: 5px;
      cursor: pointer;
      font-weight: 500;
      color: var(--primary)
    }
    > li + li {
      margin-left: 10px;
    }
  }
`;