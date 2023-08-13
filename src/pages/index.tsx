import React from "react"
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useAuthValue } from "../auth/AuthProvider";

import type { HeadFC, PageProps } from "gatsby"
import { navigate } from "gatsby";
import "remixicon/fonts/remixicon.css";

import { PrimaryButton } from "../components/buttons";
import bgImage from "../images/cover-bungenas.webp"

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

  const {currentUser} = useAuthValue()
  if(currentUser){
    navigate("/app/hem")
    return null
  }

  return (
    <div className="w-full h-screen grid grid-rows-3">
      <div className="row-span-2">
        <img src={bgImage} className="w-full h-full object-cover" />
      </div>
      <div className="bg-secondary px-8">
        <div className="relative max-w-screen-sm -mt-20 mx-auto rounded-sm p-12 bg-white text-center">
          <header className="mb-10">
            <h1 className="font-title font-semibold text-title1">
              Stenbrottsvägen 3
            </h1>
            <p className="text-base text-gray-700">
              Logga in för att boka och se information
            </p>
          </header>

          <PrimaryButton
            onClick={handleLogin}
            text={"Logga in med Google"}
            actionText={
              "Klicka här för att logga in till portalen"
            }
          />
        </div>
      </div>
    </div>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Stenbrottsvägen | Logga in</title>
