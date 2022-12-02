import DeckClass from "../lib/deck.mjs";
import { useState } from "react";
import Card from "./Card";

export default function Deck() {
    // create a deck of cards that are objects with values
    // have state that tracks the top card of deck
    // function that will deal the top card and update state
    // pass values of top card to a Card component and return this 
    const deckObj = new DeckClass();
    const [deck, updateDeck] = useState(deckObj);

    return (
        <Card face='back' />
    )
   
}