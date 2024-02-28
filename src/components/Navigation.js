import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styling/Landing.css'

class Navigation extends Component {
    render (){
        return(
            <>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/flashcards">FlashCards</Link></li>
                        <li><Link to="/videos">Videos</Link></li>
                        <li><Link to="/practice">Practice</Link></li>
                    </ul>
                </nav>
            </>
        );
    }
}
export default Navigation;