import React, {useRef, useState} from 'react';
import { Outlet, useNavigate} from 'react-router-dom';
import styled, {keyframes, css}from 'styled-components';

import {Burger, Menu, SearchBar} from './';
import {useOnClickOutside} from '../Hooks/';

import Dark from '../Assets/img/night.png';
import Light from '../Assets/img/cloudy.png';;


function Nav({onSearch, setTheme, theme}) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  //[Handlers burger menu
  const node = useRef(); 
  useOnClickOutside(node, () => setOpen(false));
  //[Handlers MobileSearch
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const showSearchInput = isHovered || isFocused;

  return (
    <>
      <NavWrapper >
        <MobileWrapper >
          <div ref={node}>
              <Burger open={open} setOpen={setOpen}/>
              
          </div>
          <Title show={showSearchInput}>
            <span >
              Weather App
            </span>
          </Title>
            <SearchBar 
              setIsFocused={setIsFocused} 
              isHovered={isHovered} 
              setIsHovered={setIsHovered} 
              showSearchInput={showSearchInput}
              onSearch={onSearch}
            />
        </MobileWrapper>
        <DesktopWrapper>
          <LogoAndTitle  darkTheme={theme}>
            <div onClick={()=>setTheme(!theme)}>
              <img  id="logoApp" src={theme? Dark:Light } alt="logo" />
            </div>
            <div onClick={()=>navigate('/')}>
              <span>
                Weather App
              </span>
            </div>
          </LogoAndTitle>
          <ul>
            <li onClick={()=>navigate('/about')}>
                <span>About</span>
            </li>
          </ul>
          <SearchBar
            setIsFocused={setIsFocused} 
            isHovered={isHovered} 
            setIsHovered={setIsHovered} 
            showSearchInput={showSearchInput}
            onSearch={onSearch}
          />
        </DesktopWrapper>
      </NavWrapper>
      <Menu open={open} setOpen={setOpen} theme={theme} setTheme={setTheme}/>
      <Outlet/>
    </>
  );
};

export default Nav;


const NavWrapper = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 3.5rem;
  background-color: ${({theme})=>theme.colors.nav.background};
  color: ${({theme})=>theme.colors.text};
  position:fixed;
  top:0;
  overflow-x:hidden;
  overflow-y:hidden;
  transition: all 0.7s ease-out;
  z-index:3;
`;

const MobileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width:100%;
  padding: 0 10px;
  cursor:default;
  font-size:1.5rem;
  font-weight:bold;

  @media screen and (min-width:${({theme})=> theme.tablet}){
    display: none;
  }
`;

const DesktopWrapper = styled.div`
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;

  & > ul {
    list-style:none;
    display:flex;
    flex-direction:row;
    align-items:center;
    gap: 1rem;
    padding: 5px;
    font-size: ${({theme})=>theme.fonts.large};

    & > li {
      text-decoration: none;
      cursor:pointer;    
    }
  }

  @media screen and (max-width:${({theme})=> theme.tablet}){
  display:none;
  }
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
    width: 0%;
  }
  to {
    opacity: 1;
    width:100%;
  }
`;

const TitleCss= css`
font-size:${({theme})=>theme.fonts.title};
font-weight: bold;
`
const LogoAndTitle = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
  cursor:pointer;
  ${TitleCss}

  & > div > img {
    transform: ${({ darkTheme }) => darkTheme ? 'rotate(-360deg)' : 'rotate(+360deg)'};
    transition: all 0.5s ease-in-out;
    height: auto;
    width: 3rem;
    margin: 5px;
}
`;


const Title = styled.div`
  ${TitleCss}
  animation: ${fadeIn} 0s ease-in;
  @media screen and (max-width: 480px) {
    display: ${({show})=> show? 'none': "visible"};
    animation: ${fadeIn} 0.7s ease-in;
    overflow:hidden;

    white-space: nowrap;
    font-size:${({theme})=>theme.fonts.large};
  }
`;