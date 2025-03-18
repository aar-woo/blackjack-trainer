import Card from "./Card";
import "./Deck.css";
import "./Card.css";
import { motion } from "framer-motion";

export default function Deck(props) {
  const deckCards = Array.from({ length: 10 }, (_, i) => i);

  return (
    <motion.div>
      {deckCards.map((index) => {
        return (
          <motion.div
            key={index}
            className="stacked-card"
            initial={{
              x: 0,
              y: index * -2,
            }}
            animate={{
              x: [0, index % 2 === 0 ? 80 : -80, 0],
            }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Card face="back" />
          </motion.div>
        );
      })}
      <Card face="back" />
    </motion.div>
  );
}
