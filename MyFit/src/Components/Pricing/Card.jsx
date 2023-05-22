import React from "react";
import { motion } from "framer-motion";
import "../../CSS/HomeCSS/pricing.scss";

export default function Card({ title, type, price, benefit, color }) {
  const itemsList = benefit.map((items) => (
    <li key={Math.random()}>{items}</li>
  ));

  return (
    <div
      className="card"
      style={{ borderTopColor: color, borderTopWidth: "4px" }}
    >
      <div className="card-title">
        <h1>{title}</h1>
        <h2>{type}</h2>
      </div>
      <div className="card-price">
        <span className="price">€{price}</span>
        <span className="card-type">/mese</span>
      </div>

      <div className="card-features">
        <p>Benefici:</p>

        <ul>{itemsList}</ul>
      </div>

      <div className="card-btn-overlay">
        <motion.div
          className="card-btn"
          onClick={() => null}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0 }}
        >
          Inizia ora!
        </motion.div>
      </div>
    </div>
  );
}
