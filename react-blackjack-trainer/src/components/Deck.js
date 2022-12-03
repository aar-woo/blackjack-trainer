import Card from "./Card";

export default function Deck(props) {
    // create a deck of cards that are objects with values
    // have state that tracks the top card of deck
    // function that will deal the top card and update state
    // pass values of top card to a Card component and return this 
    const { deckLength } = props;
    
    return (
        <Card face='back' />
    )


   
}