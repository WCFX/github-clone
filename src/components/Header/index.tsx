 import React from 'react';

 import { Container, GithubLogo, SearchForm, Navbar } from './styles';
 import SearchKeySlash from '../../assets/search-key-slash.svg';

 const Header: React.FC = () => (
   <>
    <Container>
      <SearchForm>
        <GithubLogo/>
        <input type="text" placeholder="Search or Jump to..." />
        <img src={SearchKeySlash} alt="logo-github"/>
      </SearchForm>
       <Navbar>
        <ul>
          <li>Pulls</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <li>Explore</li>
        </ul>
      </Navbar>
    </Container>
   </>
 )

 export default Header;
