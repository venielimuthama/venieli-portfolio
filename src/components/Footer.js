import React from "react";
import { Link } from "react-router-dom";



export default function Footer() {
  // email
  const Mailto = ({ email, subject = "", body = "", children }) => {
    let params = subject || body ? "?" : "";
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? "&" : ""}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}` } className="myfootermail">{children}</a>;
  };

  // callto
  const Callto = ({ phone, children }) => {
    return (
      <a href={`tel:${phone}`} className="myfootercall">
        {children}
      </a>
    );
  };

    // jsx
  return (
    <div className="myfooter">
      <div className="myfooter-div">
        <div
       
        >
          <hr className="myfoot-hr" />
          <div className="myfooter-center">
            <div className="myfooter-center-div-1">
              {/* folllow */}
              <div
                className="myfollow"
                
              >
                <h1 className="myh2-follow foot-h1s">Follow</h1>

                {/* upwork */}
                <div className="my-upwork-div">
                  <a href="https://www.upwork.com/freelancers/~01c027f0806334de54" className="myafooter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Upwork
                  </a>{" "}
                </div>

                {/* linkedin */}
                <div className="my-linkedin-div">
                   
                  <a href="https://linkedin.com/in/shadrack-venieli/"
                    className="myafooter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                  </a>
                </div>

                {/* whaatsapp */}
                <div className="my-wapp-div">
                  
                  <a href="https://twitter.com/Shadrack_V2/"
                    className="myafooter"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Twitter
                  </a>
                </div>
              </div>

              {/* legal */}
              <div
                className="my-legal"
             
              >
                <h1 className="myh2-legal foot-h1s">Legal</h1>

                {/* privacy policy */}
                <div className="my-priv-div">
                  <Link to="Privacy" className="my-privacy">
                    Privacy Policy
                  </Link>
                </div>
                {/* </h5> */}

                <li className="myfooter-logo">venieli</li>
              </div>
            </div>

            <div className="myfooter-center-div-2">
              {/* explore */}
              <div
                className="myexplore"
                
              >
                <h1 className="myh2-explore foot-h1s">Explore</h1>
                <nav className="mynav-footer">

                  <Link to="/" className="myfooter-link">
                    Home
                  </Link>
                  <Link to="Info" className="myfooter-link">
                    Info
                  </Link>
                  <Link to="Work" className="myfooter-link">
                    Work
                  </Link>
                  <Link to="Contact" className="myfooter-link">
                    Contact
                  </Link>
                </nav>
              </div>

              {/* engage */}
              <div
                className="my-engage"
              >
                <h1 className="myh2-engage foot-h1s">Engage </h1>
                {/* mymail */}
                <div className="my-mail-div">
                  <Mailto
                    email="shadrackmuthama19@gmail.com"
                    subject="Hello & Welcome"
                    body="Let's talk"
                    className="mymail-footer"
                  >
                    Click to mail
                  </Mailto>
                </div>

                {/* my-phone */}
                <div className="my-phone-div">
                  <Callto phone="+254707199368" className="mycall-footer">
                    Click to call
                  </Callto>
                </div>
              </div>
            </div>
          </div>

          <h1 className="mycopy-footer">
            <span className="my-copy">&copy;</span>
            2022 Venieli. All Rights Reserved.
          </h1>
        </div>
      </div>
    </div>
  );
}
