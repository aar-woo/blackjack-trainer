import './Table.css';
import Card from './Card';
import ReactCurvedText from "react-curved-text";
import Button from './Button';
import Game from '../lib/game.mjs';
import Deck from './Deck';
import DeckClass from "../lib/deck.mjs";
import { useState } from 'react';


export default function Table() {
    const deckObj = new DeckClass();
    deckObj.createCards();
    deckObj.shuffle();
    const [deck, updateDeck] = useState(deckObj);

    const [playerHand, setPlayerHand] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);

    function dealCards() {
        const playerHand = [];
        const dealerHand = [];
        playerHand.push(deck.deal());
        dealerHand.push(deck.deal());
        playerHand.push(deck.deal());
        setPlayerHand(playerHand);
        setDealerHand(dealerHand);
    }

    return (
        <div className='table-container'>
            <div className='dealer-side'>
                <h2 className='title'>
                    Blackjack Trainer
                </h2>
                <div className='dealer-cards-zone'>
                    <div className='dealer-hand'>
                    </div>
                    <div className='deck'>
                        <Deck deckLength={deck.getCards().length}/>
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
            </div>
            <div className='player-cards-zone' >
            </div>
            <Button text='Deal Cards' onClick={dealCards} />
        </div>
    )
}