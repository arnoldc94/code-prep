import React, { Component } from 'react'
import '../styling/Landing.css'
import Navigation from './Navigation.js'

class Landing extends Component {
    render(){
        return (
            <div className="landing-container background-image">
                <div className='landing-heading'>
                    <h1>Blue Ridge Programming</h1>
                    <Navigation></Navigation>
                </div>
                <div className='landing-body-container'>
                    <div className="landing-body smoke-animation">
                        <p>Code Prep is designed to give new developers the tools to study the fundamentals of web development through flashcards, videos and coding challenges.</p>
                        <h3>Reach Your Highest Programming Potential</h3>
                    </div>
                </div>
            </div>
        );
    }
}
export default Landing