// Imports for project
import React from "react"
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom'

//Component imports
import Landing from './components/Landing.js'

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
      <Landing/>
    );
  }
}
export default App