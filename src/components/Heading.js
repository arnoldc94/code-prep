// Heading.js
import React from 'react';
import '../styling/Heading.css';
import Navigation from './Navigation.js';

function Heading() {

  // Apply the background image to the heading
  return (
    <div className='heading'>
        <h1>Blue Ridge Programming</h1>
        <Navigation />            
    </div>
  )
}

export default Heading;