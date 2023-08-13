// gatsby-ssr.js

import React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      key="clash-grotesk"
      rel="stylesheet"
      href="https://api.fontshare.com/css?f[]=clash-grotesk@300,400,500,600&display=swap"
    />
  ]);
};