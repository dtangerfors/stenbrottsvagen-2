import React, {FC} from "react";
import { Link } from "gatsby";

interface Props {
   ButtonData: {
      to: string;
      title: string;
      icon: string;
   }
}

const MenuButtonInternal = (
   { href, title, icon }: { href: string, title?: string, icon: string }
 ) => {
   const iconClassName = `ri-${icon}-fill`;
   return (
   <Link to={href} className="flex h-28 items-center bg-white mb-px px-8 text-base text-gray-400 dark:bg-black-700 dark:text-gray-200">
      <span className="mr-4"><i className={iconClassName}></i></span>
      {title}
      <i className="ri-arrow-right-s-line ml-auto"></i>
   </Link>
)}

const MenuButtonExternal = (
   { href, title, icon }: { href: string, title?: string, icon: string }
 ) => {
   const iconClassName = `ri-${icon}-fill`;
   return (
   <a href={href} target="_blank" rel="noopener noreferrer" className="flex h-28 items-center bg-white mb-px px-8 text-base text-gray-400 dark:bg-black-700 dark:text-gray-200">
      <span className="mr-4"><i className={iconClassName}></i></span>
      {title}
      <i className="ri-arrow-right-s-line ml-auto"></i>
   </a>
)}

export {MenuButtonInternal, MenuButtonExternal}