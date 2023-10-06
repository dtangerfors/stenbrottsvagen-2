import React from "react";
import { BookingData } from "../booking_form/type";
import { Label, Title } from "./card_element";
import { TaskButton } from "../buttons";
import { showDate, showGuests, bookedDates, getRoomName } from "./display_functions";
import bookingDb from "../../firebase/bookingDb";
import bgDot from "../../images/dot.svg";

const Card = ({booking, userIsLoggedIn, isUpdatingBooking}: {booking: BookingData, userIsLoggedIn: boolean, isUpdatingBooking: any}) => {

  return (
    <div className="flex flex-col flex-30">
      <div className="flex flex-col flex-1 gap-8 rounded-t-sm p-8 md:p-10 bg-white dark:bg-black-800">
        <div className="w-full">
          <p className="text-black-900 text-base font-medium leading-snug dark:text-white">
            <Label>Bokning inlagd av</Label>
            <span className="truncate">{booking.bookingName}</span>
          </p>
        </div>
        
        <div className="w-full grid place-items-center bg-primaryLight/50 text-title2 font-medium capitalize p-6 rounded-xl text-secondary dark:bg-secondary/70 dark:text-primaryLight">
          <span className="whitespace-nowrap">
            {bookedDates(booking.bookingArrival, booking.bookingDeparture)}
          </span>
        </div>

        <div className="flex gap-4">
          <div className="w-1/3">
            <Label>Antal gäster</Label>
            <Title>{showGuests(booking.bookingGuests)}</Title>
          </div>
          <div className="w-2/3">
            <Label>Bokade rum</Label>
            <Title>{getRoomName(booking.rooms)}</Title>
          </div>
        </div>

        {booking.bookingMessage && (
          <div className="w-full">
            <Label>Meddelande</Label>
            <Title>{booking.bookingMessage}</Title>
          </div>
        )}
      </div>

      <div
        className="relative h-6 mx-6 bg-white dark:bg-black-800 bg-repeat-x bg-xs bg-center"
        style={{ backgroundImage: `url(${bgDot})` }}
      >
        <div className="absolute w-14 h-14 top-1/2 -left-6 transform -translate-y-1/2 -translate-x-1/2 rotate-45 border-transparent border-[10px] border-t-white border-r-white rounded-full dark:border-t-black-800 dark:border-r-black-800"></div>
        <div className="absolute w-14 h-14 top-1/2 -right-20 transform -translate-y-1/2 -translate-x-1/2 -rotate-45 border-transparent border-[10px] border-t-white border-l-white rounded-full dark:border-t-black-800 dark:border-l-black-800"></div>
      </div>

      <div className="flex items-center h-20 rounded-b-sm px-8 md:px-10 bg-white dark:bg-black-800">
        <div className="flex justify-between items-center w-full">
          <Label>
            <i className="ri-history-line align-text-top"></i>{" "}
            {showDate(booking.createdAt)}
          </Label>
          {userIsLoggedIn && (
            <div className="flex">
              <TaskButton
                onClick={() => isUpdatingBooking(booking.key)}
                actionText={"Redigera"}
                icon={"pencil"}
              />
              <TaskButton
                onClick={() =>
                  bookingDb.removeBooking(booking.key, booking.bookingUserID)
                }
                actionText={"Radera"}
                icon={"delete-bin-6"}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;