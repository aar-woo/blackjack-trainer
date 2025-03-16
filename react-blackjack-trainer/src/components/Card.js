import "./Card.css";
import "./utilities.css";
import { useRef } from "react";
import { easeIn, motion } from "framer-motion";

export default function Card(props) {
  let { value, suit, face, additionalClasses, inProp, playerCardIndex } = props;
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
    },
    secondCardInitial: {
      x: 50,
      y: -440,
    },
    firstCard: {
      x: -10,
      y: 80,
      transition: {
        easeIn,
      },
    },
    secondCard: {
      x: 20,
      y: -110,
      transition: {
        easeIn,
        delay: 0.1,
      },
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
      variants={variants}
      initial={variants[`${cardType}Initial`]}
      animate={variants[cardType]}
    >
      <div ref={nodeRef} className={"card-container " + additionalClasses}>
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
