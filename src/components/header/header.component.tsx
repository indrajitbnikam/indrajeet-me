import React from 'react';
import {
  HeaderContainer,
  TitleContainer,
  Title,
  LinksContainer,
  HeaderLink,
  LogoImg
} from './header.styles';
import logoImage from '../../assets/Indrajeet-min.png';

const Header = () => (
  <HeaderContainer>
    <TitleContainer to='/'>
      <Title>Indrajeet Nikam</Title>
    </TitleContainer>
    <LinksContainer>
      <HeaderLink to='/blogs'>Blogs</HeaderLink>
      <HeaderLink to='/projects'>Projects</HeaderLink>
      <HeaderLink to='/journey'>Journey</HeaderLink>
    </LinksContainer>
  </HeaderContainer>
);

export default Header;