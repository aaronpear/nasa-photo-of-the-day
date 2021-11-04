import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { NASA_PIC_BASE_URL, API_KEY } from "./constants/index";
import styled from 'styled-components';

import Header from './components/Header';
import Picoftheday from './components/Picoftheday';
import Pictext from "./components/Pictext";

const StyledPicSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;

  h1 {
    background-color: black;
    border: 2px inset grey;
    color: white;
    height: fit-content;
    margin: 2% 10%;
    padding: 1%;
  }

  a {
    margin-right: 17%;
  }
`

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get(`${NASA_PIC_BASE_URL}?api_key=${API_KEY}`)
      .then(response => {
        setNasaData(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
    <div className="App">
      {/* {<Header title={nasaData.title} />} */}
      <StyledPicSection>
        <h1>NASA's Pic of the Day. WAU!</h1>

        <Picoftheday 
          hdurl={nasaData.hdurl} 
          url={nasaData.url} 
        />
        <Pictext        
          explanation={nasaData.explanation} 
          copyright={nasaData.copyright} 
          date={nasaData.date}
          title={nasaData.title}
        />
        {/* { <a href={nasaData.hdurl} target='_blank' rel='noopener noreferrer'>See it in high resolution here!</a> } */}

      </StyledPicSection>
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
