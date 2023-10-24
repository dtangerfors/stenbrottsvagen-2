import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useAuthValue } from "../auth/AuthProvider";

import type { HeadFC, PageProps } from "gatsby";
import { navigate } from "gatsby";
import "remixicon/fonts/remixicon.css";

import { PrimaryButton } from "../components/buttons";
import bgImage from "../images/cover-flowers-desktop.webp";
import logo from "../images/logo.svg"
import MetaTags from "../components/MetaTags";

const IndexPage: React.FC<PageProps> = () => {
  const handleLogin = async (e: any) => {
    e.preventDefault();
    try {
      await signInWithPopup(auth, provider);
      navigate(`/app/hem`);
    } catch (err) {
      console.log(err.message);
    }
  };

  const { currentUser } = useAuthValue();
  if (currentUser) {
    navigate("/app/hem");
    return null;
  }

  return (
    <div className="w-full h-screen grid grid-rows-5">
      <div className="relative row-span-3 grid place-items-center">
        <figure className="relative z-10">
          <img src={logo} className="w-40" />
        </figure>
        <div className="absolute inset-0 w-full h-full">
          <img src={bgImage} className="w-full h-full object-cover" />
          <div className="absolute inset-0 w-full h-full bg-secondary/90"></div>
        </div>
      </div>
      <div className="row-span-2 flex">
        <div className="relative w-full -mt-6 mx-auto rounded-t-xl p-12 text-center bg-white dark:bg-black-800">
          <header className="mb-10">
            <h1 className="font-title font-semibold text-title1 text-black-900 dark:text-white">
              Stenbrottsvägen 3
            </h1>
            <p className="text-base text-gray-700 dark:text-gray-300">
              Logga in för att boka och se information
            </p>
          </header>

          <PrimaryButton
            onClick={handleLogin}
            text={"Logga in med Google"}
            actionText={"Klicka här för att logga in till portalen"}
          />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Stenbrottsvägen | Logga in</title>
      <MetaTags />
    </>
  );
};
