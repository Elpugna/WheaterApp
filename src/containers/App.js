import React, { useState } from 'react';
import {Nav, Cards, About, City} from '../components';
import { useLocalTheme } from '../Hooks';

//[Importamos Route desde react-router-dom
import axios from 'axios';
import {Routes,Route} from 'react-router-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyles  from '../Assets/global';
import { theme, light, dark } from '../Assets/theme';



const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

function App() {
  const [cities, setCities] = useState([]);
  const [darkTheme, setDarkTheme] = useLocalTheme();


  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  const onSearch= async(ciudad)=> {
    //Llamado a la API del clima
    try {
      let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`);
      if(resp.data.main !== undefined){
        if(cities.find(e=>e.id===resp.data.id)){
          return alert("That city already exists!!")
        }
        const ciudad = {
          temp:{
            min: Math.round(resp.data.main.temp_min),
            max: Math.round(resp.data.main.temp_max),
            actual: resp.data.main.temp,
          },
          weather:{
            img: resp.data.weather[0].icon,
            status: resp.data.weather[0].main,
            description: resp.data.weather[0].description, 
          },
          time:{
            zone:resp.data.timezone,
            actual:resp.data.dt,
            sunset: resp.data.sys.sunrise,
            sunrise: resp.data.sys.sunset
          },
          id: resp.data.id,
          name: resp.data.name,
          wind: resp.data.wind.speed,
          clouds: resp.data.clouds.all,
          latitud: resp.data.coord.lat,
          longitud: resp.data.coord.lon
        };
        setCities(oldCities => [ciudad, ...oldCities]);
      }
    } catch (error) {
      console.log("OnSearch: ", error)
      alert("City not found");
    }

  }
  const onFilter= (ciudadId)=>{
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
    <ThemeProvider theme={darkTheme? {...dark, ...theme} : {...light, ...theme}}>
     <GlobalStyles /> 
      <Routes>
      <Route path='/' element={<Nav  onSearch={onSearch} theme={darkTheme} setTheme={setDarkTheme}/>}> 
        <Route path="/" element={<Cards cities={cities} onClose={onClose}/>} />
        <Route path='about' element={<About/>} />
        <Route path='city/:ciudadId' element={<City city={onFilter}/>} />
      </Route>
      </Routes>

    </ThemeProvider >
  );
}

export default App;

