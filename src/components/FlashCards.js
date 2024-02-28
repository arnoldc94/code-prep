import React, { useState, useEffect } from 'react';
import '../styling/FlashCards.css';

//Define flashcard component
const FlashCards = () => {
    // use the useState hook to create a state variable and a function to update it
    const [cards, setCards] = useState([]);

    //use useEffect hook to to fetch the data when the component is first rendered
    useEffect(() => {
        //Fetch the data from the server
        fetch('http://localhost:3001/cards')
            .then(res => res.json())//parse the response as JSON
            .then(data => setCards(data)); //update the 'cards' state variable with the fetched data
    }, []);//The empty array ensures this effect runs once when the component mounts, and not on subsequent re-renders

    //render the component
    return(
        <div className='flash-card-container'>
            {/* Map over the 'cards' array and render each card */}
            {cards.map((card, index) => (
                <div key={index}>
                    <h2>{card.title}</h2>{/* Render the cards title */}
                    <p>{card.description}</p>{/* Render the cards description */}
                </div>
            ))};
        </div>
    );
};
export default FlashCards;