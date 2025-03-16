import "./Card.css";
import "./utilities.css";
import { useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { motion } from "framer-motion";

export default function Card(props) {
  let { value, suit, face, additionalClasses, inProp, playerCardIndex } = props;
  const nodeRef = useRef(null);

  value = typeof value === "string" ? value[0].toUpperCase() : value;

  const variants = {
    0: {
      x: 50,
      y: -280,
    },
    1: {
      x: 50,
      y: -440,
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
      initial={variants[playerCardIndex]}
      animate={{}}
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
