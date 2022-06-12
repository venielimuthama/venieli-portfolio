import React from "react";
import Privacy from './Privacy'
// import "./Popup.scss";
// Basic
// import CookieConsent from "react-cookie-consent";

// Option
import CookieConsent, { Cookies } from "react-cookie-consent";

const Popup = () => {
  return (
    <div className="popup">
      {/* Basic */}
      {/* <CookieConsent>
        This website uses cookies to enhance the user experience.
      </CookieConsent> */}

      {/* option */}
      <CookieConsent
        disableStyles
        location="none"
        buttonText="I ACCEPT"
        enableDeclineButton
        declineButtonText="DECLINE"
        cookieName="myAwesomeCookieName2"
        overlay
        overlayClasses="overlayclass"
        expires={365}
        // style={{ background: "#2B373B" }}
        // buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        // expires={150}
        declineButtonStyle={{
          color: "red",
          fontSize: "1.2em",
          fontWeight: "bold",
          border: "1px solid red",
          background: "black",
        }}
        buttonStyle={{
          color: "yellow",
          border: "1px solid yellow",
          fontSize: "1.2em",
          fontWeight: "bold",
          background: "black",
            margin: "1em ",
              }}
              
      >
        <h3 className="h1-cookies">THIS WEBSITE USES COOKIES</h3>
        We use cookies to personalise content and enhance the user experience.
        Please read our{" "}
        <a href="./#/Privacy" style={{ color: "yellow" }}>
          privacy policy
        </a>{" "}
        for more info. By clicking accept, you consent to the use of cookies.{" "}
        <br />
      </CookieConsent>
    </div>
  );
};

export default Popup;
