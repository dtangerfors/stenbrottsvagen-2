import * as React from "react"
import type { PageProps } from "gatsby"
import "remixicon/fonts/remixicon.css";
import Hero from "./Hero";
import FixedHeader from "../../FixedHeader";
import ViewAllBookings from "../../ViewAllBookings"
import BookingCalendar from "../../booking_calendar";

import logo from "../../../images/logo.svg"
import bgImage from "../../../images/cover-garden.webp";

const AppIndexPage: React.FC<PageProps> = ({ openPopup, isUpdatingBooking }: any) => {
  return (
   <>
      <FixedHeader invisibleFromStart>
      <h1 className="mx-auto">
         <span className="sr-only">Stenbrottsvägen 3</span>
         <img src={logo} width={34} />
        </h1>
      </FixedHeader>
      <Hero />
      <div className="relative z-[2] px-8 bg-gray-50 dark:bg-black-900">
         <button onClick={openPopup} className="h-28 w-full max-w-screen-sm grid place-items-center mx-auto bg-white rounded-sm shadow-xl shadow-black-900/5 text-base font-medium text-primary -translate-y-1/2 dark:bg-black-700">
            Lägg in bokning
         </button>
      </div>
      <main className="relative z-[2]">
         <section className="px-8 py-20 bg-gray-50 dark:bg-black-900">
         <div className="w-full max-w-screen-xl mx-auto">
               <header>
                  <h2 className="text-black-900 dark:text-white text-title1 pb-4">
                  Inlagda bokningar
               </h2>
               </header>
               <div>
                  <BookingCalendar />
               </div>
            </div>
         </section>
         <section className="px-8 py-20 bg-black-900/40">
            <div className="grid gap-8 lg:grid-cols-3 w-full max-w-screen-xl mx-auto">
               <ViewAllBookings isUpdatingBooking={isUpdatingBooking}/>
            </div>
         </section>
      </main>
      <div className="h-screen w-screen fixed inset-0 z-[1]">
         <img src={bgImage} className="w-full h-full object-cover" />
      </div>
   </>
  )
}

export default AppIndexPage