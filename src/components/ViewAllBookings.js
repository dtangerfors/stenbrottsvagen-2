import React, { useState, useEffect, useContext } from "react";
import { onValue } from "firebase/database";
import bookingDB from "../firebase/bookingDb";
import Card from "./booking_card";
import { onDataChange } from "../firebase/index";
import { AuthContext } from "../auth/AuthProvider";

function checkTravelYear(booking) {
  const bookingDepartureYear = new Date(booking.bookingDeparture).getFullYear();
  const thisYear = new Date().getFullYear();

  return bookingDepartureYear >= thisYear
}

function ViewAllBookings(props) {
  const [bookings, setBookings] = useState([]);
  const loggedInUser = useContext(AuthContext).currentUser;
  useEffect(() => {
    onValue(bookingDB.getAllBookings(), (snapshot) => {
      const data = snapshot.val();
      onDataChange(data, setBookings);
    });

    return () => {
      onValue(bookingDB.getAllBookings(), (snapshot) => {
        const data = snapshot.val();
        onDataChange(data, setBookings);
      });
    };
  }, []);

  const sortedBookings = bookings.sort(function (a, b) {
    var dateA = new Date(a.bookingArrival),
      dateB = new Date(b.bookingArrival);
    return dateA - dateB;
  });

  const noFutureBookings = (booking) => Date.parse(booking.bookingDeparture) <= Date.now();

  if (!bookings || bookings.every(noFutureBookings)) {
    return (
      <div className="col-span-full">
        <div className="max-w-screen-sm p-6 mx-auto bg-white rounded-sm shadow-xl text-center">
          <p className="text-base text-gray-700">Just nu finns inga bokningar inlagda</p>
        </div>
      </div>
    );
  } else {
    return sortedBookings
      .filter(checkTravelYear)
      .reverse()
      .map((booking, index) => {
        let isLoggedIn =
          loggedInUser.uid === booking.bookingUserID ? true : false;
        return (
          <Card
            userIsLoggedIn={isLoggedIn}
            key={index}
            booking={booking}
            isUpdatingBooking={props.isUpdatingBooking}
          />
        );
      });
  }
}

export default ViewAllBookings;
