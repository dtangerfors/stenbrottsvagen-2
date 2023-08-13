import React from "react";
import { motion } from "framer-motion";

export default function Overlay() {
  return (
    <motion.div
      animate={{
        opacity: 1,
      }}
      transition={{ duration: 0.2 }}
      initial={{
        opacity: 0,
      }}
      exit={{
        opacity: 0,
      }}
      className="fixed z-30 w-full h-full inset-0"
    >
      <div className="w-full h-full bg-black-900/70 filter backdrop-blur-md"></div>
    </motion.div>
  );
}
