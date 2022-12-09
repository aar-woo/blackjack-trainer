import './Table.css';
import Card from './Card';
import ReactCurvedText from "react-curved-text";
import Button from './Button';
import Deck from './Deck';
import DeckClass from "../lib/deck.mjs";
import { useEffect, useState } from 'react';


export default function Table() {
    const deckObj = new DeckClass();
    deckObj.createShoe();
    deckObj.shuffle();
    const [deck, updateDeck] = useState(deckObj);
    const [playerHand, setPlayerHand] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);
    const [inProp, setInProp] = useState(false);

    function dealCards() {
        const playerHand = [];
        const dealerHand = [];

        if (deck.cards.length < 52) {
            deckObj.clear();
            deckObj.createShoe();
            deckObj.shuffle();
            updateDeck(deckObj)
        } 

        if (deck.cards.length < 312) {
            removeCards();
            setTimeout(deal, 100)
        } else {
            deal();
        }

        function deal() {
            playerHand.push(deck.deal());
            dealerHand.push(deck.deal());
            playerHand.push(deck.deal());
            setPlayerHand(playerHand);
            setDealerHand(dealerHand);
            setInProp(true);
        }

        function removeCards() {
            if (inProp) {
                setInProp(false);
                setPlayerHand([]);
            }
        }
    }

    return (
        <div className='table-container'>
            <div className='game-container'>
                <h2 className='title'>
                    Blackjack Trainer
                </h2>
                <div className='dealer-cards-zone'>
                    <div className='dealer-hand'>
                        {dealerHand.map((card, index) => {
                            return (<Card value={card.value} suit={card.suit} key={index} />)
                        })}
                    </div>
                    <div className='deck'>
                        <Deck deckLength={deck.getCards().length} />
                    </div>
                </div>
                <div className='table-info'>
                    <ReactCurvedText
                        width={380}
                        height={70}
                        cx={185}
                        cy={-30}
                        rx={140}
                        ry={100}
                        startOffset={72}
                        reversed={false}
                        text="BLACK JACK PAYS 3 TO 2"
                        textProps={{ style: { fontSize: 24 } }}
                        textPathProps={{ "fill": "#a3a3a3" }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                    />
                    <ReactCurvedText
                        width={380}
                        height={50}
                        cx={187}
                        cy={-55}
                        rx={140}
                        ry={100}
                        startOffset={90}
                        reversed={false}
                        text="DEALER MUST HIT SOFT 17"
                        textProps={{ style: { fontSize: 18 } }}
                        textPathProps={{ "fill": "#ffffff" }}
                        tspanProps={null}
                        ellipseProps={null}
                        svgProps={null}
                    />
                </div>
                <div className='player-cards-zone'>
                    {playerHand.map((card, index) => {
                        let classes;
                        index === 0 ? classes = 'underlap' : classes = 'overlap';
                        return <Card key={index} value={card.value} suit={card.suit} additionalClasses={classes} inProp={inProp} />
                    })}
                </div>
            </div>
            <Button text='Deal Cards' onClick={dealCards} />
        </div>
    )
}