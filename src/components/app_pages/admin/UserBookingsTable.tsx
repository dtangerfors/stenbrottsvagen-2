import React from "react";

function totalDays(arrival: string, departure: string) {
  const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
  const firstDate = new Date(arrival);
  const secondDate = new Date(departure);

  return Math.round(Math.abs((firstDate - secondDate) / oneDay));
}

const UserBookingsTable = ({bookings}: {bookings: any}) => {
  
  return (
    <div className="w-full col-span-full text-s mb-8 last:mb-12 first:mt-4">
      <div className="flex text-right font-bold px-4 dark:text-white">
          <span className="w-1/3 text-left">{new Date(bookings[0].bookingArrival).getFullYear()}</span>
          <span className="flex-1">Antal dagar</span>
          <span className="flex-1">Antal gäster</span>
        </div>
      {bookings.map((booking: any, i: number) => (
        <div key={`booking-${booking.bookingUserID}-${i}`} className="w-full flex bg-gray-50 p-4 text-right rounded-xl mb-1 text-secondary dark:bg-black-700 dark:text-white/70">
          <span className="flex-1 text-left">{booking.bookingArrival} &ndash; {booking.bookingDeparture}</span>
          <span className="flex-1">{totalDays(booking.bookingArrival, booking.bookingDeparture)}</span>
          <span className="flex-1">{booking.bookingGuests}</span>
      </div>
      ))}
    </div>
  )
}

export default UserBookingsTable