import React from "react";
import icon from "../images/apple-touch-icon.png"

const MetaTags = () => (
   <>
      <meta name="viewport" content="initial-scale=1, viewport-fit=cover, user-scalable=no" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <link rel="apple-touch-icon" sizes="180x180" href={icon} />
   </>
)

export default MetaTags