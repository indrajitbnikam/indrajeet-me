import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  height: 80px;
  background-color: #f1f1f185;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const TitleContainer = styled(Link)`
  display: grid;
  place-items: center;
  color: black;
  text-decoration: none;
  height: 100%;
  margin: 15px;
`;

export const Title = styled.p`
  color: #444;
  font-family: 'Pacifico', cursive;
  font-size: 26px;
`;

export const LogoImg = styled.img`
  height: 60px;
  width: 60px;
`;

export const LinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const HeaderLink = styled(Link)`
  display: grid;
  place-items: center;
  height: 100%;
  text-decoration: none;
  color: black;
  padding: 10px 15px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all .3s;

  :hover {
    padding-bottom: 15px;
    border-bottom: 2px solid gray;
  }
`;