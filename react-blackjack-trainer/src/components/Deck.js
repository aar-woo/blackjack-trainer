import Card from "./Card";

export default function Deck(props) {
    const { deckLength } = props;
    
    return (
        <Card face='back' />
    )
}