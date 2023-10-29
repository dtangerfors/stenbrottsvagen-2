import React from "react";
import type { PageProps } from "gatsby";
import {Link} from "gatsby"
import FixedHeader from "../../FixedHeader";

const AppBackHomePage: React.FC<PageProps> = ({}) => {
  
  return (
    <>
      <FixedHeader>
        <h1 className="mx-auto text-base text-white">Rapportera problem</h1>
      </FixedHeader>
      <main className="mt-20 pt-safe-top">
        <div className="max-w-screen-sm p-8 mx-auto text-center bg-white dark:bg-black-900">
          <p className="text-base text-gray-700 dark:text-white">Tack för din feedback!</p>
          <div className="mt-8">
            <Link to="/app/hem" className=" bg-primary text-white text-headline uppercase tracking-widest py-6 px-16 leading-none rounded-full font-medium hover:bg-secondary transition-all ease-in-out duration-200">Tillbaka hem</Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default AppBackHomePage;
