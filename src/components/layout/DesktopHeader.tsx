import React from "react";
import { Link } from "gatsby";
import logo from "../../images/logo.svg"

function NavPill(props: any) {
  return (
    <Link
      to={props.to}
      className="flex text-base mr-12 leading-10 py-8 text-gray-400 text-center hover:text-black-900 transition-all ease-in-out duration-200 dark:hover:text-white"
      activeClassName="text-primary"
    >
      {props.children}
    </Link>
  );
}

export default function DesktopHeader({ openPopup }: any) {
  return (
    <div className="bg-white dark:bg-black-800 px-8 lg:px-20 border-b border-gray-50 dark:border-black-600">
      <div className="max-w-screen-xl flex items-center mx-auto">
        <Link
          to="/app/hem"
          className="flex items-center"
        >
         <span className="sr-only">Stenbrottsvägen 3</span>
         <img src={logo} width={34} />
        </Link>

        <nav className="relative ml-8 flex">
          <NavPill to="/app/hem">
            <i className="ri-home-line text-headline mr-2"></i>Hem
          </NavPill>
          <NavPill to="/app/info">
            <i className="ri-information-line text-headline mr-2"></i>Info
          </NavPill>

          <NavPill to="/app/profil">
            <i className="ri-user-line text-headline mr-2"></i>Profil
          </NavPill>
          <NavPill to="/app/meny">
            <i className="ri-menu-line text-headline mr-2"></i>Meny
          </NavPill>
        </nav>
        <div className="relative ml-auto">
          <button
            onClick={openPopup}
            className="flex-1 flex justify-center items-center mx-auto px-4 pl-6 py-2 bg-primary rounded-full text-headline text-white transition-all hover:bg-secondary"
          > Lägg in bokning 
            <i className="ri-add-line text-base leading-none"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
