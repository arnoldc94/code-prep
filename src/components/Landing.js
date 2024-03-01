import React, { useContext, useEffect } from 'react'
import BackgroundContext from './BackgroundContext.js';
import mountainView from '../images/man-mountain-view.jpg'
import '../styling/Landing.css'

function Landing() {
    // Get the setBackground function from the context
    const { setBackgroundImage } = useContext(BackgroundContext);

    // When the component is mounted, set the background to the background for this page
    useEffect(() => {
        setBackgroundImage(`url(${mountainView})`);
    }, []);

    return (
        <div className="landing-container background-image" >
            <div className='landing-body-container'>
                <div className="landing-body smoke-animation">
                    <p>Code Prep is designed to give new developers the tools to study the fundamentals of web development through flashcards, videos and coding challenges.</p>
                    <h3>Reach Your Highest Programming Potential</h3>
                </div>
            </div>
        </div>
    );
}
export default Landing