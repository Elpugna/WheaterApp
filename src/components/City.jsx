import React from 'react';
import { useParams } from 'react-router';
import styled from 'styled-components';

export default function City({city}){
  let {ciudadId} = useParams();
  let actualCity = city(ciudadId);
  let actTemp = (actualCity.temp.actual-273.15).toFixed(2);
    return(
      <Div>
        <div>
          <h2>{actualCity.name}</h2>
          <DivInfo>
            <div>Temperature: {actTemp} °C </div>
            <div>Weather: {actualCity.weather.status}</div>
            <div>Wind: {actualCity.wind} km/h</div>
            <div>Cloud Density: {actualCity.clouds}%</div>
            <div>Latitude: {actualCity.latitud}º</div>
            <div>Longitude: {actualCity.longitud}º</div>
          </DivInfo>
        </div>
      </Div>
    )
}

export const Div = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  background: transparent;
  color:${({theme})=>theme.colors.text};
  
  div{
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background: transparent;
    border-radius: 5px;
  }
  
  h2{
    font-size: 3rem;
  }
`;

const DivInfo = styled.div`
  font-size:1.5rem;
  padding:7px 0px;
  font-weight: bold;
    div{
      padding: 5px 0px;
    }
`