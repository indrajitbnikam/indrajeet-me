import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  LinksContainer,
  HeaderLink,
  LogoImg
} from './header.styles';
import logoImage from '../../assets/Indrajeet-min.png';

const Header = () => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <LogoImg src={logoImage}></LogoImg>
    </LogoContainer>
    <LinksContainer>
      <HeaderLink to='/blogs'>Blogs</HeaderLink>
      <HeaderLink to='/projects'>Projects</HeaderLink>
      <HeaderLink to='/about'>About</HeaderLink>
    </LinksContainer>
  </HeaderContainer>
);

export default Header;