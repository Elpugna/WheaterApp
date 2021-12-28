import React from 'react';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {UilCloudQuestion , UilTemperatureHalf,UilTemperatureEmpty,UilTemperature,UilX } from '@iconscout/react-unicons';


export default function Card ({Wdesc,Wstatus,Wimg, Tactual,Tmin, Tmax, name,   onClose, id}) {
  const navigate = useNavigate();
  // let timeZone= zone/3600; 
  // if(timeZone>0){
  //   timeZone = "+"+String(timeZone);
  // }
  // let actualTime = new Date((time)*1000).toTimeString([], {hour: '2-digit', minute:'2-digit'});
  let actTemp = (Tactual-273.15).toFixed(2);
  let minTemp = (Tmin-273.15).toFixed(2);
  let maxTemp = (Tmax-273.15).toFixed(2);
  return (
    <CardContainer >
      <Header>
        <div onClick={()=>navigate(`/city/${id}`)}>
            <h5 >{name}</h5>
        </div> 
        <Close onClick={onClose}/>
      </Header>
      <Body onClick={()=>navigate(`/city/${id}`)}>
        <BodyInfo >
          <div>
            <div >
              <Temp/>
              <Info>
                <p>{actTemp}°</p>
              </Info>
            </div>
            <div>
                <TempMin/>
                <p>{minTemp}</p>
                <TempMax/>
                <p>{maxTemp}</p>
            </div>
          </div>
          <div>
            <div >
              <Cloud/>
              <Info>
                <p>{Wstatus}</p>
                <p>{Wdesc}</p>
              </Info>
            </div>
          </div>
        </BodyInfo>
        <div >
          <img  src={"http://openweathermap.org/img/wn/"+Wimg+"@2x.png"} width="80" height="80" alt={`${Wstatus}`}/>
        </div>
      </Body>
    </CardContainer>
  );
};


const CardContainer = styled.div`
  display:flex;
  flex-direction: column;
  width: 17rem;
  height: 14rem;
  padding: 0.5rem;
  margin: 0.5rem;
  border: 1px
  solid black;
  cursor:pointer;

  font-size:${({theme})=> theme.fonts.small};
  //background: ${({theme})=>theme.colors.nav.background};
  background: ${({theme})=> (`linear-gradient(to bottom, ${theme.colors.nav.top}, ${theme.colors.nav.bottom})`)};
  color: ${({theme})=>theme.colors.text};

  transition: all 0.3s ease-in, background 0.7s ease-in-out;

  @media screen and (min-width:${({theme})=>theme.mobile}){
    font-size:${({theme})=> theme.fonts.medium};
    width: 60%;
    height: 12rem;
    padding: 1rem;
    margin:0;
    margin-top:1rem;

  }
`;

const Header = styled.div`
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  font-size: ${({theme})=>theme.fonts.title};
  background-color: transparent;

  div{
    width:100%;
    justify-self:center;
  }
  @media screen and (min-width:${({theme})=>theme.mobile}){
    font-size:${({theme})=> theme.fonts.xtitle};
  }
  @media screen and (min-width:${({theme})=>theme.tablet}){
    font-size: 3rem;
  }
`;



const Body = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height:100%;
  width:100%;
  padding: 0 1rem;
  margin: 0 1rem;
  
  @media screen and (min-width:${({theme})=>theme.tablet}){
    margin: 0 0.5rem;
  }
`;

const BodyInfo = styled.div`
  height: 100%;
  width:100%;
  display: flex;
  flex-direction: column;
  justify-content:space-around;
  align-items:center;
  background-color: transparent;

  &> div > div{
    width:100%;
    margin:0 0.5rem;
    display: flex;
    justify-content:center;
    align-items:center;
  }

  @media screen and (min-width:${({theme})=>theme.tablet}){
    flex-direction:row;
  }
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;

  p:first-child{
    white-space: nowrap;
    font-size:${({theme})=> theme.fonts.medium};


  }

  @media screen and (min-width:${({theme})=>theme.mobile}){
    p:first-child{
      font-size:${({theme})=> theme.fonts.title};
    }
  }
  @media screen and (min-width:${({theme})=>theme.tablet}){
    p:first-child{
      font-size: 4rem;
    }
  }
`;

//[Icons
const Close = styled(UilX)`
  fill:${({theme})=>theme.colors.text};
  padding: 0;
  margin: 0;
  width: 3rem;
  height: 2rem;
  transition: fill 0.3s ease-in;
  &:hover{
    fill:#bd0b37;
    transition:none;
  }
`;
const Cloud = styled(UilCloudQuestion )`
  fill:${({theme})=>theme.colors.text};
  padding: 0;
  margin: 0 0.5rem;
  transition: fill 0.3s ease-in;
`;

const Temp = styled(UilTemperatureHalf)`
  fill:${({theme})=>theme.colors.text};
  padding: 0;
  margin: 0 0.5rem;
  transition: fill 0.3s ease-in;
`;
const TempMin = styled(UilTemperatureEmpty)`
width:fit-content;
fill:${({theme})=>theme.colors.text};
padding: 0;
margin: 0;
transition: fill 0.3s ease-in;


`;
const TempMax = styled(UilTemperature)`
width:fit-content;
fill:${({theme})=>theme.colors.text};
padding: 0;
margin: 0;
transition: fill 0.3s ease-in;
`;
