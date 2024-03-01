import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import '../styling/Landing.css'

class Navigation extends Component {
    constructor(props){
        super(props)
        //initialize state to keep track of whether the navigation bar is open or closed
        this.state = {
            navBarOpen: false
        };
        // Bind the onSetNavBarOpen method to this instance
        this.onSetNavBarOpen = this.onSetNavBarOpen.bind(this);
    }

    //Method to set the naveBar open state
    onSetNavBarOpen(open) {
        this.setState({navBarOpen: open});
    }
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