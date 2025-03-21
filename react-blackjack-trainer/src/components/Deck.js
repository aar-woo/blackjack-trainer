import Card from "./Card";
import "./Deck.css";
import "./Card.css";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Deck(props) {
  const deckCards = Array.from({ length: 10 }, (_, i) => i);
  const [shuffleComplete, setShuffleComplete] = useState(false);

  const getInitialY = (index) => {
    const spacingMult = -1.8;
    if (index === 4) {
      return spacingMult * 8;
    }
    if (index < 4) {
      return spacingMult * index;
    } else {
      return spacingMult * (index - 1);
    }
  };

  return (
    <>
      <div>
        {deckCards.map((index) => {
          return (
            <motion.div
              key={index}
              className="stacked-card"
              initial={{
                x: 0,
                y: getInitialY(index),
              }}
              animate={{
                x: [0, index % 2 === 0 ? 80 : -80, 0],
              }}
              transition={{
                delay: index === 4 ? 1 : index * 0.1,
              }}
              onAnimationComplete={() => {
                index === deckCards.length - 4 && setShuffleComplete(true);
              }}
              style={{
                zIndex: shuffleComplete && index === 4 ? 10 : 0,
              }}
            >
              <Card face="back" />
            </motion.div>
          );
        })}
        <Card face="back" />
      </div>
    </>
  );
}
