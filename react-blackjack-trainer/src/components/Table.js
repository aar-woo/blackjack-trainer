import "./Table.css";
import Card from "./Card";
import ReactCurvedText from "react-curved-text";
import Button from "./Button";
import Deck from "./Deck";
import DeckClass from "../lib/deck.mjs";
import { useEffect, useState, useRef } from "react";
import {
  compareHardTotal,
  compareSoftTotal,
  comparePair,
} from "../lib/basicStrategy";
import Modal from "./Modal";
import { motion } from "framer-motion";
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
  const [startDealerAnimation, setStartDealerAnimation] = useState(false);
  const [startSecondPlayerCard, setStartSecondPlayerCard] = useState(false);
  const [shuffleCount, setShuffleCount] = useState(0);

  const getPlayerAction = (event) => {
    const buttonValue = event.target.value;
    setPlayerAction(buttonValue);
  };

  function dealCards() {
    const playerHand = [];
    const dealerHand = [];

    if (deck.cards.length < 52) {
      deckObj.clear();
      deckObj.createShoe();
      deckObj.shuffle();
      updateDeck(deckObj);
    }

    setStartDealerAnimation(false);
    setStartSecondPlayerCard(false);

    if (deck.cards.length < 312) {
      removeCards();
      setTimeout(deal, 100);
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
      setPlayerHasPair(false);
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

  function checkForPair() {
    if (playerHand.length === 0) {
      return;
    }
    const faceCardsNotAce = ["king", "queen", "jack"];
    let firstCardVal = playerHand[0].value;
    let secondCardVal = playerHand[1].value;

    if (faceCardsNotAce.includes(firstCardVal)) firstCardVal = 10;
    if (faceCardsNotAce.includes(secondCardVal)) secondCardVal = 10;

    if (firstCardVal === secondCardVal) {
      setPlayerHasPair(true);
    }
  }

  function getActionResult() {
    if (isMounted.current === false) {
      isMounted.current = true;
      return;
    }
    if (playerHand.length <= 0) return;

    if (!playerAction) return;

    let dealerUpcard = dealerHand[0];
    if (typeof dealerUpcard.value === "string") {
      dealerUpcard = dealerUpcard.value === "ace" ? 11 : 10;
    } else {
      dealerUpcard = dealerUpcard.value;
    }

    let firstCardVal = playerHand[0].value;
    let secondCardVal = playerHand[1].value;

    if (typeof firstCardVal === "string") {
      firstCardVal = firstCardVal === "ace" ? 11 : 10;
    }
    if (typeof secondCardVal === "string") {
      secondCardVal = secondCardVal === "ace" ? 11 : 10;
    }
    const playerTotal = firstCardVal + secondCardVal;

    /**
     * Check if the player's hand is a pair and call comparePair function and compare result with user action
     * If the comparePair result is to not split, then we need to check if the player selected the correct action according to compareHardTotal
     **/
    if (firstCardVal === secondCardVal) {
      const splitResult = comparePair(dealerUpcard, firstCardVal);
      if (splitResult) {
        playerAction === "split"
          ? setResult("correct")
          : setResult("incorrect");
      } else if (splitResult == false && playerAction === "split") {
        setResult("incorrect");
      } else {
        const hardTotalResult = compareHardTotal(dealerUpcard, playerTotal);
        playerAction[0] === hardTotalResult
          ? setResult("correct")
          : setResult("incorrect");
      }
    } else if (firstCardVal === 11 || secondCardVal === 11) {
      /**
       * Check if the player's hand is a soft total (has an ace, a card with value of 11)
       **/
      const softTotalResult = compareSoftTotal(dealerUpcard, playerTotal);
      playerAction[0] === softTotalResult
        ? setResult("correct")
        : setResult("incorrect");
    } else {
      const hardTotalResult = compareHardTotal(dealerUpcard, playerTotal);
      playerAction[0] === hardTotalResult
        ? setResult("correct")
        : setResult("incorrect");
    }
  }

  function displayResult() {
    if (!result) return;

    if (result === "correct") {
      return <Modal text="Correct" classNames="modal-green" />;
    } else {
      return <Modal text="Incorrect" classNames="modal-red" />;
    }
  }

  useEffect(checkForPair, [playerHand]);
  useEffect(getActionResult, [playerAction]);

  return (
    <div className="table-container">
      <motion.div className="game-container">
        <h2 className="title">Blackjack Trainer</h2>
        <div className="dealer-cards-zone">
          <div className="dealer-hand">
            {dealerHand.map((card, index) => {
              return (
                <Card
                  value={card.value}
                  suit={card.suit}
                  key={`${card.value}-${card.suit}-${deck.cards.length}`}
                  animate={
                    startDealerAnimation && {
                      x: 0,
                    }
                  }
                  onAnimationComplete={() => {
                    setStartSecondPlayerCard(true);
                  }}
                />
              );
            })}
          </div>
          <motion.div
            key={shuffleCount}
            animate={{
              rotate: [0, -3, 3, -3, 3, -3, 0],
              y: [0, -10, 0],
            }}
            className="deck"
          >
            <Deck deckLength={deck.getCards().length} />
          </motion.div>
        </div>
        <div className="table-info">
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
            textPathProps={{ fill: "#a3a3a3" }}
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
            textPathProps={{ fill: "#ffffff" }}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
          />
        </div>
        <div className="player-cards-zone">
          {playerHand.map((card, index) => {
            return (
              <Card
                key={index}
                value={card.value}
                suit={card.suit}
                playerCardIndex={index}
                animate={
                  index === 1
                    ? startSecondPlayerCard && { x: 20, y: -110, rotate: 360 }
                    : undefined
                }
                onAnimationComplete={(latest) => {
                  if (index === 0) {
                    setStartDealerAnimation(true);
                  }
                }}
              />
            );
          })}
          {displayResult()}
        </div>
      </motion.div>
      <div className="actions-container">
        <div className="deal-btn-container">
          <Button text="Deal Cards" onClick={dealCards} />
        </div>
        <div className="game-actions">
          <Button
            text="Hit"
            classNames="action-btn bg-green"
            onClick={getPlayerAction}
            value="hit"
          />
          <Button
            text="Stand"
            classNames="action-btn bg-red"
            onClick={getPlayerAction}
            value="stand"
          />
          <Button
            text="Double"
            classNames="action-btn bg-grey"
            onClick={getPlayerAction}
            value="double"
          />
          {playerHasPair === true && (
            <Button
              text="Split"
              classNames="action-btn bg-grey"
              onClick={getPlayerAction}
              value="split"
            />
          )}
          <Button
            text="Shuffle"
            onClick={() => setShuffleCount(shuffleCount + 1)}
          />
        </div>
      </div>
    </div>
  );
}
