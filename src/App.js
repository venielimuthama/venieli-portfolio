import React, { useState, useEffect  } from "react";
import Talk from "./components/Talk";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Work from "./components/Work";
import Footer from "./components/Footer";
import Info from "./components/Info";
import Para from "./components/Para";
import Privacy from "./components/Privacy";
// import Resume from "./components/Resume";
import {
  // BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
  useLocation,
} from "react-router-dom";
import "./my.scss";
import "./mobile.scss";
import "./tablet.scss";
import { FaBars } from "react-icons/fa";
import { AnimatePresence  } from "framer-motion";
import CookieConsent from "react-cookie-consent";
import LazyLoad from "react-lazyload";

function App() {
  //  navbar js code
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [logoShown, setLogoShown] = useState(true);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  const togglemyLogo = () => {
    setLogoShown(!logoShown);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  //scroll code
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("mynavbar").style.top = "0";
    } else {
      document.getElementById("mynavbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };
  //transition
  const location = useLocation();

  //scrolltotop

  // activating navcolor
  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  //cache data
  // Function to add our give data into cache
  const addDataIntoCache = (cacheName, url, response) => {
    // Converting our response into Actual Response form
    const data = new Response(JSON.stringify(response));

    if ("caches" in window) {
      // Opening given cache and putting our data into it
      caches.open(cacheName).then((cache) => {
        cache.put(url, data);
        console.log(data);
      });
    }
  };

  addDataIntoCache("MyCache", "https://localhost:300", "SampleData");
  // end cache data
  // https://developer.chrome.com/docs/devtools/storage/cache/
  // jsx
  return (
    <div className="myapp">
      {/* <Cursor /> */}
      <Para />

      <div className="mynavbar" id="mynavbar">
        {(logoShown || screenWidth > 700) && (
          <h4 className="mynavbar-logo">venieli</h4>
        )}

        {(toggleMenu || screenWidth > 700) && (
          <nav className="mynav-ul" id="mynav-ulID">
            <NavLink
              to="/"
              className={`mynav-li   mynav-lihome
              ${splitLocation[1] === "" ? "active" : ""}`}
              onClick={() => {
                toggleNav();
                togglemyLogo();
              }}
            >
              Home
            </NavLink>
            <NavLink
              to="Info"
              className={`mynav-li   mynav-liinfo
              ${splitLocation[1] === "Info" ? "active" : ""}`}
              onClick={() => {
                toggleNav();
                togglemyLogo();
              }}
            >
              Info
            </NavLink>

            <NavLink
              to="Work"
              className={`mynav-li mynav-liwork
              ${splitLocation[1] === "Work" ? "active" : ""}`}
              onClick={() => {
                toggleNav();
                togglemyLogo();
              }}
            >
              Work
            </NavLink>
            <NavLink
              to="Contact"
              className={`mynav-li mynav-licontact
              ${splitLocation[1] === "Contact" ? "active" : ""}`}
              onClick={() => {
                toggleNav();
                togglemyLogo();
              }}
            >
              Contact
            </NavLink>
            {/* <NavLink
              to="Resume"
              className={`mynav-li mynav-liresume
              ${splitLocation[1] === "Resume" ? "active" : ""}`}
              onClick={() => {
                toggleNav();
                togglemyLogo();
              }}
            >
              Resume
            </NavLink> */}
          </nav>
        )}
        <button
          onClick={() => {
            toggleNav();
            togglemyLogo();
          }}
          className="mynavbtn"
        >
          <FaBars className="myFaBars" />
        </button>
      </div>

      <AnimatePresence exitBeforeEnter>
        {/* <Router> */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home Talk={Talk} Contact={Contact} />} />

          <Route
            path="/work"
            element={
              <LazyLoad>
                <Work />
              </LazyLoad>
            }
          />

          <Route
            path="/info"
            element={
              <LazyLoad>
                <Info />
              </LazyLoad>
            }
          />

          {/* <LazyMotion features={domAnimation} > */}
          <Route
            path="/contact"
            element={
              <LazyLoad>
                <Contact />
              </LazyLoad>
            }
          />
          {/* </LazyMotion> */}

          <Route
            path="/privacy"
            element={
              <LazyLoad>
                <Privacy />
              </LazyLoad>
            }
          />

          {/* <Route
            path="/Resume"
            element={
              <LazyLoad>
                <Resume />
              </LazyLoad>
            }
          /> */}

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        {/* </Router> */}
      </AnimatePresence>

      {/* cookie consent */}
      <CookieConsent
        style={{
          background: "black",
          color: "white",
          borderTop: "2px solid yellow",
          zIndex: 10000000000,
          position: "fixed",
          bottom: "0px",
        }}
        location="bottom"
        enableDeclineButton
        declineButtonText="I DECLINE"
        buttonText="I ACCEPT"
        cookieName="myAwesomeCookieName2"
        buttonStyle={{
          color: "black",
          fontSize: "13px",
          fontWeight: "bold",
          background: "white",
        }}
        expires={365}
        overlayClasses={true}
        flipButtons
        Cookies="Cookies"
        // acceptOnScroll={true}
        // acceptOnScrollPercentage={50}
      >
        This website uses cookies to enhance the user experience. Please read
        our{" "}
        <a href="/privacy" style={{ color: "yellow" }}>
          privacy policy
        </a>{" "}
        for more info. By clicking accept, you consent to the use of cookies.
      </CookieConsent>

      {/* cookie consent */}

      <Footer />

      {/* </Cursor> */}
    </div>
  );
}

export default App;
