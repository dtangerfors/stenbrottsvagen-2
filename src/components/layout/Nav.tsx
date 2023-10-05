import React from "react";
import { Link } from "gatsby";

function NavPill(props: any) {
  return (
    <Link
      to={props.to}
      className="flex-1 h-[4.5rem] flex flex-col justify-center text-sm leading-8 text-gray-400 text-center bg-gray-50 hover:bg-gray-100 transition-all ease-in-out duration-200 dark:bg-black-700 dark:hover:bg-black-600 first:rounded-l-3xl last:rounded-r-3xl"
      activeClassName="text-primary"
    >
      {props.children}
    </Link>
  );
}

function Nav({openPopup}: any) {
  return (
    <nav className="fixed z-20 bottom-0 left-0 w-full pt-6 px-8 pb-safeBottom bg-white border-gray-100 border-t dark:bg-black-800 dark:border-black-600">
      <div className="flex justify-center w-full">
        <NavPill to="/app/hem">
          <i className="ri-home-line text-base"></i><span className="sr-only">Hem</span>
        </NavPill>
        <NavPill to="/app/info">
          <i className="ri-information-line text-base"></i><span className="sr-only">Info</span>
        </NavPill>
        <div
          className="h-[4.5rem] flex-1 flex justify-center relative bg-gray-50 dark:bg-black-700"
        >
          <button
            onClick={openPopup}
            className="flex justify-center items-center -mt-4 bg-primary w-[64px] h-[64px] rounded-full text-base text-white transition-all hover:bg-secondary border-4 border-white dark:border-black-800"
          >
            <i className="ri-add-line text-title1 leading-none"></i>
          </button>
        </div>
        <NavPill to="/app/profil">
          <i className="ri-user-line text-base"></i><span className="sr-only">Profil</span>
        </NavPill>
        <NavPill to="/app/meny">
          <i className="ri-menu-line text-base"></i><span className="sr-only">Meny</span>
        </NavPill>
      </div>
    </nav>
  );
}

export default Nav;
