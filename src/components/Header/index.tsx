 import React from 'react';

 import { Container } from './styles';
 import { FaGithub } from 'react-icons/fa';

 const Header: React.FC = () => (
   <>
    <Container>
      <form>
        <FaGithub
          size={32}
        />
        <input
          type="text"
          placeholder="Search or Jump to..."
        />
      </form>
      <nav>
        <ul>
          <li>Pulls</li>
          <li>Issues</li>
          <li>Marketplace</li>
          <li>Explore</li>
        </ul>
      </nav>
    </Container>
   </>
 )

 export default Header;