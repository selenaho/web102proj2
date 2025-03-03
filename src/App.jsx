import { useState } from 'react'
import { flashcards } from './data';
import Card from './components/Card';
import './App.css'

const App = () => {
    const [currentCard, setCurrentCard] = useState(0);
    let flashcard = flashcards[currentCard];

    function handleNextClick() {
        setCurrentCard(Math.floor(Math.random() * flashcards.length));
        flashcard = flashcards[currentCard];
    }

    const cardStyle={backgroundColor: flashcard.color};

    return (
    <>
        <h1>Chapter 15 Spanish Vocab Flash Cards</h1>
        <h3>Vocab dealing with health and fitness</h3>
        <p>{flashcards.length} flashcards</p>
        <Card style = {cardStyle} english = {flashcard.english} spanish = {flashcard.spanish}/>
        <button onClick={handleNextClick}>Next Flashcard</button>
    </>
    )
}

export default App;
