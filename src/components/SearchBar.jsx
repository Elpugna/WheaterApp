import { useRef, useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

import { UilSearch as SearchIcon, UilTimesCircle as CloseIcon } from '@iconscout/react-unicons';
import {useOnClickOutside} from '../Hooks';
import {useNavigate} from 'react-router-dom';

export default function SearchBar({setIsFocused, isHovered ,setIsHovered, showSearchInput, onSearch }) {
  const [city, setCity] = useState('')
  const targetRef = useRef('');
  const navigate = useNavigate();
  useOnClickOutside(targetRef, () =>{
    setIsHovered(false)
  });

  useEffect(()=>{
    targetRef.current.focus();
  }, [isHovered])


  const handleKeyDown = (e)=>{
    //! console.log(e.keyCode); //38 up, 40 down, 13 return 
    if(e.keyCode === 38 || e.keyCode === 40){

    }else if (e.keyCode === 13){
      onSearch(city);
      setCity("");
      navigate("/");
    }
  }
  return (
    <Container
      onClick={()=>{
        setIsHovered(!isHovered);
      }}
      hover={showSearchInput}
    >
      <SearchInput 
        placeholder="Search..."
        ref={targetRef}
        value={city}  
        onFocus={() =>setIsFocused(true)}  
        onBlur={() => {
          setIsFocused(false);
          setCity('');
        }}  
        showSearchInput={showSearchInput}
        onChange={(e)=>setCity(e.target.value)} 
        onKeyDown={(e)=>handleKeyDown(e)}
      />
      {showSearchInput ? <IconClose /> : <IconMagnifyingGlass />}
    </Container>
  );
}



export const Container = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border-radius: 50px;
  // border: 3px solid ${({theme})=>theme.colors.text};
  padding: 5px;
  // background: ${({theme})=> theme.colors.searchIcon.background};
  transition: all 0.5s linear;
  cursor:pointer;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${({ hover }) =>
    hover &&
    css`
      width: 80%;
      border:none;
      background: transparent;

      @media (min-width: 480px) {
        width: 50%;
      }

      @media (min-width: 768px) {
        width: 30%;
      }
    `}

    @media screen and (min-width:1024px){
      width:20%;
    }


`;

export const SearchInput = styled.input`
  position: absolute;
  top: 5px;
  left: 0;
  width: 100%;
  height: 42px;
  line-height: 30px;
  outline: 0;
  border: 0;
  font-size:${({theme})=>theme.fonts.medium};
  border-radius: 20px;
  padding: 0 20px;
  margin: 0;
  appearance: none;
  box-shadow: 5px 5px 15px 2px rgba(0, 0, 0, 0.74);
  border: 2px solid ${({theme})=>theme.colors.text};
  display: ${(props) => (props.showSearchInput ? "block" : "none")};
  background-color: ${({theme})=> theme.colors.background.light};
  color:${({theme})=>theme.colors.text};

  &::placeholder{
    color:${({theme})=>theme.colors.text};
  }

  @media screen and (min-width:1024px){
    display:block;
    width:100%;
    box-shadow: none;
}
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const IconCommonCss = css`
  height: 1.25rem;
  width: 1.25rem;
  fill: ${({theme})=>theme.colors.text};
  transition:all 0.7s ease-in-out;
  z-index: 10;
  animation: ${fadeIn} 1s linear;

  @media screen and (min-width:1024px){
    align-self: flex-end;
  }
  
`;

export const IconMagnifyingGlass = styled(SearchIcon)`
  ${IconCommonCss}
  height:2rem;
  width:2rem;
`;

export const IconClose = styled(CloseIcon)`
  ${IconCommonCss}
  align-self: flex-end;
  cursor: pointer;
  z-index:14;
  fill:${({theme})=>theme.colors.background.dark};
  transition:none;

  &:hover{
    fill:${({theme})=>theme.colors.text};
    transition:all 0.7s ease-in-out;
  }
`;
