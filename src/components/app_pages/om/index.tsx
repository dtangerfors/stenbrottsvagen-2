import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import FixedHeader from "../../FixedHeader";

import reactLogo from "../../../images/react.svg";
import tailwindLogo from "../../../images/tailwindcss.svg";
import firebaseLogo from "../../../images/firebase.svg";
import reactHookFormLogo from "../../../images/react-hook-form.svg";
import ReleaseList from "../../ReleaseList";

const AppAboutPage: React.FC<PageProps> = () => {
   return (
      <>
         <FixedHeader>
            <h1 className="mx-auto text-base text-white">Om</h1>
         </FixedHeader>
         <main className="mt-20 py-20 px-8">
            <section className="max-w-screen-xl mx-auto">
               <div>
                  <ReleaseList />
               </div>
            <div className="mt-20 py-20 border-t border-b border-gray-200 dark:border-gray-500">
              <div className="mb-12">
                <h2 className="text-title1 text-black-900 dark:text-white">
                  Teknikstack
                </h2>
                <p className="text-base text-gray-700 dark:text-gray-300">
                  Applikationen är byggd med följande ramverk:
                </p>
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4">
                <div className="flex-1 flex flex-col items-center p-8 border-r border-b lg:border-b-0 border-gray-200 dark:border-gray-500">
                  <figure className="w-full my-auto max-h-16 max-w-[15rem]"><img src={reactLogo} alt="React" className="w-full h-full object-contain object-center" /></figure>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mt-8">React</p>
                </div>
                <div className="flex-1 flex flex-col items-center p-8 lg:border-r border-b lg:border-b-0 border-gray-200 dark:border-gray-500">
                  <figure className="w-full my-auto max-h-16 max-w-[15rem]"><img src={firebaseLogo} alt="Firebase" className="w-full h-full object-contain object-center" /></figure>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mt-8">Firebase</p>
                </div>
                <div className="flex-1 flex flex-col items-center p-8 border-r border-gray-200 dark:border-gray-500">
                  <figure className="w-full my-auto max-h-16 max-w-[15rem]">
                    <img
                      src={reactHookFormLogo}
                      alt="React Hook Form"
                      className="w-full h-full object-contain object-center"
                    />
                  </figure>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mt-8">React Hook Form</p>
                </div>
                <div className="flex-1 flex flex-col items-center p-8">
                  <figure className="w-full my-auto max-h-16 max-w-[15rem]">
                    <img
                      src={tailwindLogo}
                      alt="Tailwind CSS"
                      className="w-full h-full object-contain object-center"
                    />
                  </figure>
                  <p className="text-gray-400 text-sm font-medium uppercase tracking-widest mt-8">Tailwind CSS</p>
                </div>
              </div>
            </div>
            </section>
         </main>
      </>
   )
}

export default AppAboutPage

export const Head: HeadFC = () => <title>Stenbrottsvägen | Om</title>;