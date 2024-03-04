import React from 'react'
import { Link, router } from 'react-router-dom';
import '../styling/Navigation.css'

function Navigation() {
    return(
        <nav>
            <ul className='nav-container'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/flashcards">FlashCards</Link></li>
                <li><Link to="/videos">Videos</Link></li>
                <li><Link to="/practice">Practice</Link></li>
            </ul>
        </nav>
    );
}
export default Navigation;