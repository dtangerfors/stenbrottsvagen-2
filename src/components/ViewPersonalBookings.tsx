import React, { useState, useEffect, useContext } from "react";
import { onValue } from "firebase/database";
import bookingDB from "../firebase/bookingDb";
import Card from "./BookingCard";

import { BookingData } from "./booking_form/type";

function ViewPersonalBookings(props: any) {
  const [bookings, setBookings] = useState<any>([]);

  const onDataChange = (data: Object) => {
    const items = data;
    let bookingsArr = [];

    for (const bookingItem in items) {
        const bookingData: Object = items[bookingItem as keyof typeof items];
        bookingsArr.push({
          key: bookingItem,
          ...bookingData
        })
      }

    setBookings(bookingsArr);
  };

  useEffect(() => {
    onValue(bookingDB.getUserBookings(props.userID), (snapshot) => {
      const data = snapshot.val();
      onDataChange(data);
    });

    return () => {
      onValue(bookingDB.getUserBookings(props.userID), (snapshot) => {
        const data = snapshot.val();
        onDataChange(data);
      });
    };
  }, [props.userID]);

  function checkDate(booking: BookingData) {
    const bookingDeparture = new Date(booking.bookingDeparture);
    const currentDate = new Date;

    if (props.isCurrentBookings) {
      return bookingDeparture > currentDate
    } else {
      return bookingDeparture < currentDate
    }
  }

  return bookings
  .filter(checkDate)
  .map((booking: any, index: number) => (<Card userIsLoggedIn={true} key={index} booking={booking} isUpdatingBooking={props.isUpdatingBooking} />));
}

export default ViewPersonalBookings;
