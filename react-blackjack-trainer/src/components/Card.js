import "./Card.css";
import "./utilities.css";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Card(props) {
  let { value, suit, face, playerCardIndex, onAnimationComplete, animate } =
    props;
  const nodeRef = useRef(null);

  value = typeof value === "string" ? value[0].toUpperCase() : value;
  const cardType =
    playerCardIndex === 0
      ? "firstCard"
      : playerCardIndex === 1
      ? "secondCard"
      : "dealerCard";

  const variants = {
    firstCardInitial: {
      x: 50,
      y: -280,
      rotate: 180,
    },
    secondCardInitial: {
      x: 50,
      y: -440,
      rotate: 180,
    },
    firstCard: {
      x: -10,
      y: 80,
      rotate: 360,
    },
    dealerCardInitial: {
      x: 100,
    },
    cardTransition: {
      type: "spring",
      stiffness: 200,
      mass: 0.15,
      damping: 8,
    },
    cardHover: {
      scale: 1.3,
      zIndex: 100,
    },
  };

  if (face === "back") {
    return (
      <div className="card-container card-back">
        <img src="images/card-back.png"></img>
      </div>
    );
  }

  return (
    <motion.div
      onAnimationComplete={onAnimationComplete}
      variants={variants}
      initial={variants[`${cardType}Initial`]}
      animate={
        animate || {
          ...variants[cardType],
        }
      }
      transition={variants.cardTransition}
      whileHover={variants.cardHover}
    >
      <div ref={nodeRef} className="card-container">
        <div className="row">
          <div className="card-value flex-column">
            <p>{value}</p>
            <h3 className={`${suit}-icon`}></h3>
          </div>
        </div>
        <div className="row justify-center">
          <h1 className={`${suit}-icon`}></h1>
        </div>
        <div className="row justify-end">
          <div className="card-value flex-column">
            <p>{value}</p>
            <h3 className={`${suit}-icon`}></h3>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
