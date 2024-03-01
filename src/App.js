// Imports for project
import React, { useState } from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

//Component imports
import Landing from './components/Landing.js'
import FlashCards from './components/FlashCards.js'
import BackgroundContext from "./components/BackgroundContext.js";
import Heading from "./components/Heading.js";

//CSS pages imports
import './App.css';

function App() {
  // state to store the current background
  const [backgroundImage, setBackgroundImage] = useState('');

    return(
      // Provide the background and setBackground function to all child components
      <BackgroundContext.Provider value={{ backgroundImage, setBackgroundImage}}>
        <div style={{ backgroundImage, backgroundSize: 'cover', height: '100vh' }}>
          {/* Routes and components */}
          <Heading />
          <Router>
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route path="/flashcards" element={<FlashCards />} />
            </Routes>
          </Router>
        </div>
      </BackgroundContext.Provider>
    );
}
export default App