import React, { useState} from "react";
import type { HeadFC } from "gatsby"
import { Router } from "@reach/router";
import PrivateRoute from "../../components/PrivateRoute";

import AppIndexPage from "../../components/app_pages/home";
import AppInfoPage from "../../components/app_pages/info";
import AppProfilePage from "../../components/app_pages/profile";
import AppMenuPage from "../../components/app_pages/meny";
import AppAboutPage from "../../components/app_pages/om";
import AppGalleryPage from "../../components/app_pages/gallery";
import AppReportBugPage from "../../components/app_pages/report_bug";
import AppBackHomePage from "../../components/app_pages/report_bug/back_home";
import Layout from "../../components/layout";
import Popup from "../../components/popup_window";
import Complete from "../../components/Complete";
import MetaTags from "../../components/MetaTags";
import AppAdminPage from "../../components/app_pages/admin";

const App = () => {
  const [bookingSuccess, setBookingSuccess] = useState({
    status: false,
    message: "",
  });

  const [popupForm, setPopupForm] = useState({
    isOpen: false,
    isUpdatingBooking: false,
    bookingKey: "",
  });

  const handleCompleteBooking = (data: any) => {
    setBookingSuccess({
      status: data.status,
      message: data.message,
    });
  };

  const openPopup = () => {
    setPopupForm({
      isOpen: true,
      isUpdatingBooking: false,
      bookingKey: "",
    });

    document.body.style.overflow = "hidden";
  };

  const closePopup = () => {
    setPopupForm({
      isOpen: false,
      isUpdatingBooking: false,
      bookingKey: "",
    });

    document.body.style.overflow = "";
  };

  const editBooking = (key: string) => {
    setPopupForm({
      isOpen: true,
      isUpdatingBooking: true,
      bookingKey: key,
    });

    document.body.style.overflow = "hidden";
  };

  return (
    <>
      <Layout openPopup={openPopup}>
        <Router>
          <PrivateRoute
            path="/app/hem"
            component={AppIndexPage}
            openPopup={openPopup}
            isUpdatingBooking={editBooking}
          />
          <PrivateRoute path="/app/info" component={AppInfoPage} />
          <PrivateRoute path="/app/profil" component={AppProfilePage} isUpdatingBooking={editBooking} />
          <PrivateRoute path="/app/meny" component={AppMenuPage} />
          <PrivateRoute path="/app/om" component={AppAboutPage} />
          <PrivateRoute path="/app/galleri" component={AppGalleryPage} />
          <PrivateRoute path="/app/rapportera-problem" component={AppReportBugPage} />
          <PrivateRoute path="/app/tack" component={AppBackHomePage} />
          <PrivateRoute path="/app/admin" component={AppAdminPage} />
        </Router>
      </Layout>
      <Popup
        popupForm={popupForm}
        closePopup={closePopup}
        onBookingComplete={handleCompleteBooking}
      />
      {bookingSuccess.status ? (<Complete message={bookingSuccess.message} />) : null}
      <form name="reportBugs" netlify-honeypot="bot-field" data-netlify="true" hidden>
      <input type="text" name="formName" />
      <input type="radio" name="formCategory" />
      <input type="radio" name="formCategory" />
      <input type="text" name="formSubject" />
      <textarea name="formMessage"></textarea>
      </form>
    </>
  );
};

export default App;

export const Head: HeadFC = () => {
  return (
    <>
      <title>Stenbrottsvägen | Bokning & information</title>
      <MetaTags />
    </>
  );
};