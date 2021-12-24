import React from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import Dark from '../../Assets/img/night.png';
import Light from '../../Assets/img/cloudy.png';

const Menu = ({open, setOpen, theme, setTheme}) => {
  const navigate = useNavigate();

  return (
    <StyledMenu darkTheme={theme} open={open}>
      <span onClick={()=>{
        navigate('/');
        setOpen(false);
      }}>
        Home
      </span >
      <span  onClick={()=>{
        navigate('/about');
        setOpen(false);
      }}>
        About
      </span>
      <div onClick={()=>{
          setTheme(!theme);
          setOpen(true);
          }}>
        <div>
          <img  id="logoApp" src={Dark} alt="logo" />
        </div>
        <div >
          <img  id="logoApp" src={Light} alt="logo" />
        </div>
      </div>
    </StyledMenu>
  )
}

export default Menu;



const StyledMenu = styled.nav`
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-101%)'};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background: ${({ theme }) => theme.colors.background.medium};
  height: 100%;
  text-align: left;
  padding: 4rem 2rem 2rem 1rem;
  position: absolute;
  top: 3.5rem;
  left: 0;
  
  overflow:hidden;
  z-index: 2;
  width:60%;
  transition: background 0.7s ease-out, transform 0.3s ease-in-out;
  position:fixed;
  top:0;
  rigth:0;

  span {
    font-size: ${({theme})=>theme.fonts.medium};
    padding: 1rem 0 0.2rem 0;
    margin:0 0 0.8rem 0.2rem;
    width: min-content;
    font-weight: bold;
    letter-spacing: 0.2rem;
    color: ${({ theme }) => theme.colors.text};
    z-index:2;

    transition: color 0.3s ease-in;
    border-bottom:2px solid ${({theme})=>theme.colors.text};
    cursor:pointer;
  }

  div{
    display:flex;
    flex-direction:row;
    margin: 0;
    cursor:pointer;
    transition: transform 0.5s ease-in-out 0.2s;
    transform-origin:1px;
    z-index:2;
    > div > img{
      //transform: ${({ darkTheme }) => darkTheme ? 'translate(0px, 0px )' : 'translate(0px)'};
      height: auto;
      width: 4rem;
      margin: 5px;
      //transform-origin: 1px;
      //transition: all 0.3s linear;
      position: relative;
      z-index:2;
    }

    :first-child {
      transform: ${({ darkTheme }) => darkTheme ? 'translateX(0%)' : 'translateX(-250%)'};
      //transform: ${({ darkTheme }) => darkTheme ? 'rotate(-360deg)' : 'rotate(+360deg)'};
      z-index:2;
    }
    :nth-child(2) {
      transform: ${({ darkTheme }) => darkTheme ? 'translateX(-250%)' : 'translateX(-100%)'};
      //transform: ${({ darkTheme }) => darkTheme ? 'rotate(-360deg)' : 'rotate(+360deg)'};
      z-index:2;
    }
  } 
 
  @media (min-width: ${({ theme }) => theme.mobile}) {
    width:40%;

    span{
      font-size: ${({theme})=>theme.fonts.large};
      padding: 1rem 0.5rem 0.2rem 0.5rem;
      margin: 0 0 0.8rem 1rem;
      width:min-content;
    }
  }
  
`;