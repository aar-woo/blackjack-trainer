import './Table.css';
import Card from './Card';
import ReactCurvedText from "react-curved-text";
import Button from './Button';
import Deck from './Deck';
import DeckClass from "../lib/deck.mjs";
import { useEffect, useState, useRef } from 'react';
import { compareHardTotal, compareSoftTotal, comparePair } from '../lib/basicStrategy';
import { split } from 'lodash';


export default function Table() {
    const deckObj = new DeckClass();
    deckObj.createShoe();
    deckObj.shuffle();
    const [deck, updateDeck] = useState(deckObj);
    const [playerHand, setPlayerHand] = useState([]);
    const [dealerHand, setDealerHand] = useState([]);
    const [inProp, setInProp] = useState(false);
    const [playerHasPair, setPlayerHasPair] = useState(false);
    const [playerAction, setPlayerAction] = useState("");
    const [result, setResult] = useState("");
    const isMounted = useRef(false);

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
            setPlayerHasPair(false)
            setPlayerAction("");
            setResult("");
        }

        function removeCards() {
            if (inProp) {
                setInProp(false);
                setPlayerHand([]);
            }
        }
    }

    useEffect(() => {
        if (playerHand.length === 0) {
            return;
        }
        const faceCardsNotAce = ['king', 'queen', 'jack']
        let firstCardVal = playerHand[0].value;
        let secondCardVal = playerHand[1].value;
        
        if (faceCardsNotAce.includes(firstCardVal)) firstCardVal = 10;
        if (faceCardsNotAce.includes(secondCardVal)) secondCardVal = 10;

        if (firstCardVal === secondCardVal) {
            setPlayerHasPair(true);
        }

    }, [playerHand])

    const getPlayerAction = event => {
        const buttonValue = event.target.value;
        setPlayerAction(buttonValue);
    }

    useEffect(() => {
        if (isMounted.current === false) {
            isMounted.current = true;
            return;
        }
        if (playerHand.length <= 0) return;

        let dealerUpcard = dealerHand[0];
        if (typeof dealerUpcard.value === 'string') {
            dealerUpcard = dealerUpcard.value === 'ace' ? 11 : 10
        } else {
            dealerUpcard = dealerUpcard.value
        }

        let playerFirstCardValue = playerHand[0].value;
        let playerSecondCardValue = playerHand[1].value;

        if (typeof playerFirstCardValue === 'string') {
            playerFirstCardValue = playerFirstCardValue === 'ace' ? 11 : 10;
        }
        if (typeof playerSecondCardValue === 'string') {
            playerSecondCardValue = playerSecondCardValue === 'ace' ? 11 : 10;
        }
        const playerTotal = playerFirstCardValue + playerSecondCardValue;
        
        /** 
         * Check if the player's hand is a pair and call comparePair function and compare result with user action
         * If the comparePair result is to not split, then we need to check if the player selected the correct action according to compareHardTotal 
         **/
        if (playerFirstCardValue === playerSecondCardValue) {
            const splitResult = comparePair(dealerUpcard, playerFirstCardValue);
            if (splitResult) {
                playerAction === 'split' ? setResult('correct') : setResult('incorrect');
            } else if (splitResult == false && playerAction === 'split') {
                setResult('incorrect')
            } else {
                const hardTotalResult = compareHardTotal(dealerUpcard, playerTotal);
                playerAction[0] === hardTotalResult ? setResult('correct') : setResult('incorrect');
            }
        }

        /**
         * Check if the player's hand is a soft total (has an ace, a card with value of 11)
         **/
        if (playerFirstCardValue === 11 || playerSecondCardValue === 11) {
            const softTotalResult = compareSoftTotal(dealerUpcard, playerTotal);
            playerAction[0] === softTotalResult ? setResult('correct') : setResult('incorrect');
        }
    }, [playerAction])

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
            <div className='actions-container'>
                <div className='deal-btn-container'>
                    <Button text='Deal Cards' onClick={dealCards} />
                </div>
                <div className='game-actions'>
                    <Button text='Hit' classNames='action-btn bg-green' onClick={getPlayerAction} value='hit' />
                    <Button text='Stand' classNames='action-btn bg-red' onClick={getPlayerAction} value='stand' />
                    <Button text='Double' classNames='action-btn bg-grey' onClick={getPlayerAction} value='double' />
                    {playerHasPair === true && <Button text='Split' classNames='action-btn bg-grey' onClick={getPlayerAction} value='split' />}
                </div>
            </div>
        </div>
    )
}