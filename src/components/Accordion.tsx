import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ title, children }: { title: string; children: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div>
      <AnimatePresence initial={false}>
        <motion.button
          initial={false}
          type="button"
          className="w-full flex justify-between items-center py-4 mb-12 text-title2 text-black dark:text-white border-b"
          onClick={handleClick}
        >
          <p>{title}</p>
          <motion.i
            className="ri-arrow-down-s-line"
            key="chevron"
            initial="collapsed"
            animate={{ rotate: isOpen ? "180deg" : "0deg" }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          ></motion.i>
        </motion.button>

        {isOpen && (
          <motion.div
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
