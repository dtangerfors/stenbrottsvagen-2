import React from "react";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import Nav from "./Nav";
import DesktopHeader from "./DesktopHeader";

const Layout = ({children, openPopup}) => {
   return (
      <>
      <BrowserView className="sticky z-10 top-0">
         <DesktopHeader openPopup={openPopup} />
      </BrowserView>
      <div className="flex flex-col relative min-h-screen bg-gray-50 dark:bg-black-900"
      style={{ paddingBottom: isMobile ? 100 : 0 }}>
         {children}
      </div>
      <MobileView>
         <Nav openPopup={openPopup} />
      </MobileView>
      </>
   )
}

export default Layout