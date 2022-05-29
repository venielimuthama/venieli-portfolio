import React from "react"; 
import Transitions from "./Transitions";
import colorado from "../image/colorado.png";
import jint from "../image/jint.png";
import bluepost from "../image/bluepost.png";
import tala from "../image/tala.png";
 
export default function Catalog({Contact}) {

  


// jsx
return (
  <Transitions>
    <div className="mycatalog-div">
      <div className="mycatalog-bg-div">
        <div className="mycatalog-bg-div-1">
          <h1 className="mycat-bg-div-1-h1">
            Over the years, I have had the opportunity to work on various
            projects. Below are some of the projects that I have brought to life{" "}
            <span className="mycat-span">alone</span> and also while working{" "}
            <span className="mycat-span">remotely </span>with a
            <span className="mycat-span"> team</span> of other{" "}
            <span className="mycat-span">experienced</span> front-end and
            back-end developers across the
            <span className="mycat-span"> globe</span>.
          </h1>
        </div>

        <div className="mycatalog-sm-div">
          <div className="mycat-sm-div-1">
            <div className="mycat-sm-div-1a">
              <a
                href="https://coloradomarketandbakery.com"
                className="mycat-href-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={colorado} alt="" className="mycat-img-1a mycat-img" />
                <div className="mycat-link-1 mycat-link">VISITE</div>{" "}
                <div className="mycat-mobile-link">
                  <h2 className="mycat-mobile-h1">VIEW SITE</h2>
                </div>
              </a>
            </div>

            <div className="mycat-sm-div-1b">
              <a
                href="https://jacobsinteriors.com"
                className="mycat-href-1b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={jint} alt="" className="mycat-img-1b mycat-img" />
                <div className="mycat-link-1b mycat-link">VIEW SITE</div>{" "}
                <div className="mycat-mobile-link">
                  <h2 className="mycat-mobile-h1">VISITE</h2>
                </div>
              </a>
            </div>
          </div>

          <div className="mycat-sm-div-2">
            <div className="mycat-sm-div-2a">
              <a
                href="https://www.gettala.com"
                className="mycat-href-2a"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={tala} alt="" className="mycat-img-2a mycat-img" />
                <div className="mycat-link-2a mycat-link">VISITE</div>
                <div className="mycat-mobile-link">
                  <h2 className="mycat-mobile-h1">VIEW SITE</h2>
                </div>
              </a>
            </div>

            <div className="mycat-sm-div-2b">
              <a
                href="https://www.theblueposts.co.uk/"
                className="mycat-href-2b"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={bluepost} alt="" className="mycat-img-2b mycat-img" />
                <div className="mycat-link-2b mycat-link">VIEW SITE</div>
                <div className="mycat-mobile-link">
                  <h2 className="mycat-mobile-h1">VISITE</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  </Transitions>
);
}
 