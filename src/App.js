// Imports for project
import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

//Component imports
import Landing from './components/Landing.js'
import FlashCards from './components/FlashCards.js'

//CSS pages imports
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <Router>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/flashcards" element={<FlashCards />} />
        </Routes>
      </Router>
    );
  }
}
export default App