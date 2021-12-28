import React from "react";
import styled from "styled-components";
import pdf from '../Assets/Tomas_Pugnaloni_Full_Stack_Dev.pdf';
export default function About(){
    return(
      <Div>
        <h4>About the App:</h4>
        <p>I made this app fully responsive. If you navigate with a smartphone you will see the side menu is displayed when clicking the menu button. The search bar expands as well in both smartphones and tablet size devices. </p>
        <p>
          It has some other cool features as the dark theme, that activates depending on your browser's default settings. If you change the mode, it will store that state and your device's browser will "remember" your choice next time you drop by. 
        </p>
        <p>
          It retrieves the information from the <a href="https://openweathermap.org" target="_blank" rel="noreferrer">openweathermap's API</a>. It shares the temperature and weather of a city of your choice. In this proyect I used:
        </p>
        <div>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src="https://cdn.svgporn.com/logos/react.svg" alt="Logo React"/>
          </a>

          <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn.svgporn.com/logos/react-router.svg" alt="Logo react-router"/>
          </a>
          <a href="https://styled-components.com/" target="_blank" rel="noreferrer">
            <img src="https://styled-components.com/logo.png" alt="Logo Styled-Components"/>
          </a>
        </div>
        <h4>About me:</h4>
        <p>
          My name is Tomás Pugnaloni. I'm an Argentinian CS student and I have just finished a Web Development Bootcamp. I'm currently looking for my first IT job. The stack I have learned in the last months and more than 800 hour that took me to finish the bootcamp are: 
        </p>
        <div>
          <a href="https://reactjs.org/" target="_blank" rel="noreferrer">
            <img src="https://cdn.svgporn.com/logos/react.svg" alt="Logo React"/>
          </a>
          <a href="https://redux.js.org/" target="_blank" rel="noreferrer">
            <img src="https://cdn.svgporn.com/logos/redux.svg" alt="Logo Redux"/>
          </a>
          <a href="https://reactrouter.com/" target="_blank" rel="noreferrer">
            <img src="https://cdn.svgporn.com/logos/react-router.svg" alt="Logo react-router"/>
          </a>
          <a href="https://styled-components.com/" target="_blank" rel="noreferrer">
            <img src="https://styled-components.com/logo.png" alt="Logo Styled-Components"/>
          </a>
          <a href="http://www.postgresql.org/" target="_blank" rel="noreferrer">
            <img alt="PostgreSQL" src="https://cdn.svgporn.com/logos/postgresql.svg" />
          </a>
          <a href="http://www.postgresql.org/" target="_blank" rel="noreferrer">
            <img alt="Express" src="https://cdn.svgporn.com/logos/express.svg" />
          </a>
          <a href="https://nodejs.org/" target="_blank" rel="noreferrer">
            <img alt="Node.js" src="https://cdn.svgporn.com/logos/nodejs.svg" />
          </a>
          <a href="http://sequelizejs.com/" target="_blank" rel="noreferrer">
            <img alt="Sequelize" src="https://cdn.svgporn.com/logos/sequelize.svg" />
          </a>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <img alt="Git" src="https://cdn.svgporn.com/logos/git.svg" />
          </a>

        </div>
        <h3>Let's keep in touch:</h3>
        <div>

        <a href="https://github.com/Elpugna" target="_blank" rel="noreferrer">
          <img alt="Github" src="https://cdn.svgporn.com/logos/github-icon.svg" />
        </a>
        <a href="mailto:tomi.pugna@gmail.com" target="_blank" rel="noreferrer">
          <img alt="Google Gmail" src="https://cdn.svgporn.com/logos/google-gmail.svg" />
        </a>
        <a href="https://www.linkedin.com/in/tomas-pugnaloni/" target="_blank" rel="noreferrer">
        <img alt="LinkedIn" src="https://cdn.svgporn.com/logos/linkedin-icon.svg" />
        </a>
        <a href={pdf} target="_blank" rel="noreferrer" >
        <img alt="LinkedIn" src="https://cdn-icons-png.flaticon.com/512/662/662345.png" />
        </a>
        </div>

      </Div>
    )
}

const Div = styled.div`
  position: absolute;
  top:0;
  left:0;
  display:flex;
  flex-flow:column nowrap;
  justify-content:center;
  align-items:baseline;
  background: ${({theme})=>theme.colors.background.light};
  backdrop-filter: blur(6px);
  color:${({theme})=>theme.colors.text};
  transition:all 0.7s ease-in;
  text-align: start;
  margin:0;
  margin-top:3.5rem;

   h4, h3{
     font-size: ${({theme})=>theme.fonts.xtitle};
     margin: 0.2rem 2rem;
     padding: 0.5rem;

   }

   p{
     font-size:${({theme})=>theme.fonts.large};
     padding: 0.5rem 0.5rem;
     margin 0 0.5rem;
     font-weight: 600;
   }
   div{
     width:100%;
     display:flex;
     flex-wrap:wrap;
     justify-content:center;
     align-items:center;
     padding: 0 0 1rem 0;
     margin:0;
    //  display:inline;

   }
   img{
     width:5rem;
     heigth:auto;
     padding: 0.5rem;
     margin:0.5rem;
   }
`;