import React, { useEffect, useState } from "react";
import { onValue } from "firebase/database";
import bookingDb from "../../../firebase/bookingDb";
import { onDataChange } from "../../../firebase";
import { thisYear, previousYear } from "./help_functions";

import Tile from "./Tile";
import ListItem from "./ListItem";

const ShowStatistics = () => {
  const [bookings, setBookings] = useState([]);
  const [bookingsByUsers, setBookingsByUser] = useState([]);
  const [year, setYear] = useState({
    current: new Date().getFullYear(),
    previous: new Date().getFullYear() - 1,
  });

  useEffect(() => {
    onValue(bookingDb.getAllBookings(), (snapshot) => {
      const data = snapshot.val();
      setBookingsByUser(data);
      onDataChange(data, setBookings);
    });

    return () => {
      onValue(bookingDb.getAllBookings(), (snapshot) => {
        const data = snapshot.val();
        setBookingsByUser(data);
        onDataChange(data, setBookings);
      });
    };
  }, []);

  return (
    <div className="max-w-screen-sm mx-auto grid grid-cols-3 gap-4 gap-y-8 lg:gap-8 p-8 bg-white lg:rounded-md dark:bg-black-800">
      <Tile number={bookings.length} text={"Bokningar totalt"} />
      <Tile
        number={bookings.filter(thisYear).length}
        text={`Bokningar ${year.current}`}
      />
      <Tile
        number={bookings.filter(previousYear).length}
        text={`Bokningar ${year.previous}`}
      />
      <div className="w-full col-span-full text-sm">
        <div className="flex text-right font-bold px-4 dark:text-white">
          <span className="w-1/3 text-left">Användare</span>
          <span className="flex-1">{year.current}</span>
          <span className="flex-1">{year.previous}</span>
          <span className="flex-1">Totalt antal</span>
          <span className="w-14"></span>
        </div>
        <div className="flex flex-wrap text-secondary">
          {Object.entries(bookingsByUsers).map((bookings, i) => (
            <ListItem key={`listitem-${i}`} bookings={bookings} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowStatistics;
