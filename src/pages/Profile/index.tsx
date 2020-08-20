import React from 'react';
import { Container, Main, LeftSide, RightSide } from './styles';

import ProfileData from '../../components/ProfileData';

const Profile: React.FC = () => {
  return(
      <Container>
        <Main>
          <LeftSide>
            <ProfileData
              username={'wcfx'}
              name={'Wagner Barboza'}
              avatarUrl={'https://avatars0.githubusercontent.com/u/66399640?v=4'}
              followers={12.690}
              following={887}
              company={'Apple'}
              location={'Rio Grande do Sul, Brazil'}
              email={'wcfx.dev@gmail.com'}
              blog={'https://www.linkedin.com/in/wagner-barboza-65031b118/'}
            />
            {/* <img src="https://avatars2.githubusercontent.com/u/66399640?s=400&u=4a8870a51985dcca1e9cc5584e1edabc6fbb9800&v=4" alt="Foto-Perfil"/> */}

          </LeftSide>

          <RightSide>

          </RightSide>
        </Main>
      </Container>
  )
};


export default Profile
