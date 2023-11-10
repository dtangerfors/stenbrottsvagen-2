// gatsby-ssr.js

import React from "react";
import { CookiesProvider } from "react-cookie";

import AuthProvider from "./src/auth/AuthProvider";

export const wrapRootElement = ({ element }) => (
  <CookiesProvider>
    <AuthProvider>{element}</AuthProvider>
  </CookiesProvider>
);

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="clash-grotesk"
      rel="stylesheet"
      href="https://api.fontshare.com/css?f[]=clash-grotesk@300,400,500,600&display=swap"
    />,
  ]);
};
