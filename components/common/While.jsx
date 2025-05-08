"use client";

import { motion } from "motion/react";

const While = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default While;
