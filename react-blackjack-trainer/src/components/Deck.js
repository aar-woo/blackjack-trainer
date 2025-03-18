import Card from "./Card";
import "./Deck.css";
import "./Card.css";
import { motion } from "framer-motion";
export default function Deck(props) {
  const { deckLength } = props;

  return (
    <motion.div>
      <Card face="back" />
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, 140, 0] }}
        // transition={{ times: [0, 0.5, 1] }}
        className="stacked-card"
      >
        <Card face="back" />
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: [0, -140, 0] }}
        transition={{ delay: 0.2 }}
        className="stacked-card"
      >
        <Card face="back" />
      </motion.div>
    </motion.div>
  );
}
