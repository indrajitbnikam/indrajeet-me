import React from 'react';
import {
  HeaderContainer,
  TitleContainer,
  Title,
  LinksContainer,
  HeaderLink,
  TitleShort
} from './header.styles';

const Header = () => (
  <HeaderContainer>
    <TitleContainer to='/'>
      <Title>Indrajeet Nikam</Title>
      <TitleShort>Indrajeet</TitleShort>
    </TitleContainer>
    <LinksContainer>
      <HeaderLink to='/blogs'>Blogs</HeaderLink>
      <HeaderLink to='/projects'>Projects</HeaderLink>
      <HeaderLink to='/journey'>Journey</HeaderLink>
    </LinksContainer>
  </HeaderContainer>
);

export default Header;