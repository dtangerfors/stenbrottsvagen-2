import React from "react";
import "./src/styles/global.css";
import "firebase/auth";
import "firebase/firestore";
import "firebase/functions";
import { CookiesProvider } from "react-cookie";

import AuthProvider from "./src/auth/AuthProvider";

export const wrapRootElement = ({ element }) => (
  <CookiesProvider>
    <AuthProvider>{element}</AuthProvider>
  </CookiesProvider>
);
