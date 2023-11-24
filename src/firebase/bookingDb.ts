import { ref, push, set, update, remove, child, get } from "firebase/database";
import { firebaseDB } from ".";

const getAllBookings = () => {
  return ref(firebaseDB, "/bookings");
};

const getUserBookings = (userID: string) => {
  return ref(firebaseDB, "/bookings/" + userID);
};

const getBooking = (userID: string, key: string) => {
  return ref(firebaseDB, `/bookings/${userID}/${key}`);
};

const createBooking = (data: Object, userID: string) => {
  console.log(data)
  const previousBookingsRef = ref(firebaseDB, '/bookings/' + userID);
  const newBookingsRef = push(previousBookingsRef);
  return set(newBookingsRef, {
      ...data
  });
};

const updateBooking = (key: string, data: Object, userID: string) => {
  const updatedBooking: any = {};
  updatedBooking[`/bookings/${userID}/${key}`] = data;
  return update(ref(firebaseDB), updatedBooking)
};

const removeBooking = (key: string, userID: string) => {
  return remove(ref(firebaseDB, `/bookings/${userID}/${key}`));
};

function getUserRights(userId: string, callback: Function) {

  return get(child(ref(firebaseDB), `/users/${userId}`)).then((snapshot) => {
    if (snapshot.exists()) {
      callback(snapshot.val());
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
}

const bookingDb = {
  getBooking,
  getAllBookings,
  getUserBookings,
  createBooking,
  updateBooking,
  removeBooking
};

export default bookingDb
export {getUserRights}