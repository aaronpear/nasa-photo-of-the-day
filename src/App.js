import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import { NASA_PIC_BASE_URL, API_KEY } from "./constants/index";

import Header from './components/Header';
import Picoftheday from './components/Picoftheday';
import Pictext from "./components/Pictext";

function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
    axios.get(`${NASA_PIC_BASE_URL}?api_key=${API_KEY}`)
      .then(response => {
        console.log(response);
        setNasaData(response.data);
      })
      .catch(error => {
        console.error(error);
      })
  }, [])

  return (
    <div className="App">
      <Header title={nasaData.title} />
      <Picoftheday 
        hdurl={nasaData.hdurl} 
        url={nasaData.url} 
      />
      <Pictext        
        explanation={nasaData.explanation} 
        copyright={nasaData.copyright} 
        date={nasaData.date}
      />
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
    </div>
  );
}

export default App;
