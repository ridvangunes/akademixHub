"use client";

import { motion } from "motion/react";

const page = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div>page</div>
    </motion.div>
  );
};

export default page;
