function thisYear(booking: any) {
  const bookingCreated = new Date(booking.bookingArrival).getFullYear();
  const thisYear = new Date().getFullYear();
  return bookingCreated == thisYear;
}

function previousYear(booking: any) {
  const bookingCreated = new Date(booking.bookingArrival).getFullYear();
  const previousYear = new Date().getFullYear() - 1;
  return bookingCreated == previousYear;
}

export {thisYear, previousYear} 