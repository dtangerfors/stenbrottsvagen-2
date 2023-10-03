import React, { useContext, useState } from "react";
import type { PageProps } from "gatsby";
import FixedHeader from "../../FixedHeader";
import { AuthContext } from "../../../auth/AuthProvider";
import ViewPersonalBookings from "../../ViewPersonalBookings";

import bgImage from "../../../images/cover-bungenas.webp";
import Accordion from "../../Accordion";

const AppProfilePage: React.FC<PageProps> = ({ isUpdatingBooking }: any) => {
  const [currentBooking, setCurrentBooking] = useState(null);
  const user = useContext(AuthContext).currentUser;

  const refreshList = () => {
    setCurrentBooking(null);
  };

  const setActiveBooking = (key: string) => {
    setCurrentBooking({
      key: key,
    });

    console.log(`Current bookingKey is: ${key}`);
  };

  const lastSignInTime = new Date(user.metadata.lastSignInTime).toLocaleString(
    "sv-SE",
    {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (
    <>
      <FixedHeader invisibleFromStart>
        <h1 className="mx-auto text-base text-white">{user.displayName}</h1>
      </FixedHeader>
      <div className="h-[32rem]">
        <img src={bgImage} className="w-full h-full object-cover" />
      </div>
      <header className="flex flex-wrap justify-center">
        <div className="flex flex-col items-center">
          <div className="relative w-40 h-40 -mt-20 mb-4 rounded-full bg-white border-4 border-gray-50 overflow-hidden flex-shrink-0 dark:border-black-900">
            <img
              src={user.photoURL}
              alt={user.displayName}
              className="w-full h-full object-cover relative"
            />
          </div>
          <div className="flex-auto truncate text-center">
            <h1 className="font-title font-semibold text-heading text-black truncate dark:text-white">
              {user.displayName}
            </h1>
            <p className="whitespace-normal text-sm text-gray-700 uppercase tracking-wider font-medium mb-8 dark:text-gray-300">
              Inloggad sedan {lastSignInTime}
            </p>
          </div>
        </div>
      </header>
      <main className="py-20 px-8 lg:px-20 flex-1">
        <section className="w-full max-w-screen-xl mx-auto mb-12">
          <div className="grid gap-8 lg:grid-cols-3">
            <ViewPersonalBookings
              userID={user.uid}
              // bookings={props.user.bookings}
              setActiveBooking={setActiveBooking}
              isUpdatingBooking={isUpdatingBooking}
              isCurrentBookings={true}
            />
          </div>
        </section>
        <section className="w-full max-w-screen-xl mx-auto">
          <Accordion title="Passerade bokningar">
            <div className="grid gap-8 lg:grid-cols-3">
              <ViewPersonalBookings
                userID={user.uid}
                // bookings={props.user.bookings}
                setActiveBooking={setActiveBooking}
                isUpdatingBooking={isUpdatingBooking}
                isCurrentBookings={false}
              />
            </div>
          </Accordion>
        </section>
      </main>
    </>
  );
};

export default AppProfilePage;
