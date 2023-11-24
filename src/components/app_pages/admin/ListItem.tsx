import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { thisYear, previousYear } from "./help_functions";
import UserBookingsTable from "./UserBookingsTable";

const ListItem = ({ bookings }: { bookings: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((isOpen) => !isOpen);
  }

  const userBookings = Object.values(bookings[1]);
  const totalBookings = userBookings.length;
  const bookingsThisYear = userBookings.filter(thisYear);
  const bookingsPreviousYear = userBookings.filter(previousYear);

  return (
    <AnimatePresence initial={false}>
      <div className="w-full h-14 flex items-center bg-primaryLight text-right rounded-xl mb-2 overflow-hidden text-secondary dark:bg-secondary dark:text-white">
        <span className="w-1/3 text-left px-4">
          {userBookings[0].bookingName}
        </span>
        <span className="flex-1 px-4">{bookingsThisYear.length}</span>
        <span className="flex-1 px-4">{bookingsPreviousYear.length}</span>
        <span className="flex-1 px-4">{totalBookings}</span>
        <motion.button
          initial={false}
          type="button"
          className="w-14 h-14 hover:bg-secondary/20 dark:hover:bg-white/20"
          onClick={handleClick}
        >
          <motion.i
            className="ri-arrow-down-s-line text-base inline-block relative"
            key="chevron"
            initial="collapsed"
            animate={{ rotate: isOpen ? "180deg" : "0deg" }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          ></motion.i>
        </motion.button>
      </div>
      {isOpen && (
        <motion.div
          key="accordion-panel"
          initial="collapsed"
          animate="open"
          exit="collapsed"
          variants={{
            open: { opacity: 1, height: "auto" },
            collapsed: { opacity: 0, height: 0 },
          }}
          className="w-full"
          transition={{
            duration: 0.5,
            ease: [0.04, 0.62, 0.23, 0.98]
          }}
        >
          <div>
            {!(bookingsThisYear.length === 0) && (
              <UserBookingsTable bookings={bookingsThisYear} />
            )}
            {!(bookingsPreviousYear.length === 0) && (
              <UserBookingsTable bookings={bookingsPreviousYear} />
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ListItem;
