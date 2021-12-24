import React from 'react';
import styled from 'styled-components';

import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
  return (
    <CardsContainer >
      {cities.map(c => <Card
          key={c.id}
          name={c.name}
          Tactual={c.temp.actual}
          Tmax={c.temp.max}
          Tmin={c.temp.min}
          Wimg={c.weather.img}
          Wstatus={c.weather.status}
          Wdesc={c.weather.description}
          onClose={() => onClose(c.id)}
          id={c.id}
        /> )}
    </CardsContainer>
  );
}

const CardsContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: transparent;
  align-items:center;
  padding: 0;
  padding-bottom: 3rem;
  margin:1rem 0;
  margin-top:3.5rem;
`;