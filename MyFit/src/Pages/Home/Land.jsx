import React from "react";
import { motion } from "framer-motion";
import "../../CSS/HomeCSS/land.scss";

export default function Land() {
  return (
    <div className="main-container">
      <div className="text-container">
        <h3>Il software per eccellenza per gestire la tua palestra</h3>

        <motion.div
          className="land-btn"
          onClick={() => null}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 1.0 }}
        >
          Prova MYFIT gratuitamente
        </motion.div>
      </div>

      <div className="empty" />
    </div>
  );
}
