import React, { useState, useEffect } from "react";
import nairobi from "../image/nairobicity.jpg";
import AOS from 'aos';
import Transitions from "./Transitions";
import venieliImg from "../image/venieliBio.png";


export default function Home({ Talk, Contact }) {

  const [isShown, setIsShown] = useState(false);
  const [isBg, setIsBg] = useState(false);

  
   useEffect(() => {
     AOS.init();
     AOS.refresh();
   }, []);
   
    
return (
  <Transitions>
    <div>
      <div className="myhome">
        {/* home */}

        <div className="mydiv-home-before">
          <div className="myhome-leftA"></div>

          <div className="mydiv-home">
            <h1 className="myh1-home">
              <div>
                <h1
                  className="mya-name"
                  onMouseEnter={() => setIsShown(true)}
                  onMouseLeave={() => setIsShown(false)}
                >
                  Shadrack Venieli
                </h1>
                {isShown && (
                  <div className="glitch-divA">
                    <img
                      data-aos="fade-right"
                      data-aos-duration="500"
                      className="glitch-ina"
                      src={venieliImg}
                      alt="nairobi"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>

              <h1 className="my-award">
                is an award-winning{" "}
                <span className="my-award-front">Front-End </span> Developer
                from
              </h1>

              <div className="my-nrb-div">
                <h1
                  className="my-nrb"
                  onMouseEnter={() => setIsBg(true)}
                  onMouseLeave={() => setIsBg(false)}
                >
                  Nairobi
                  <span className="myke"> (</span>
                  KE
                  <span className="myke">)</span>
                </h1>{" "}
                {isBg && (
                  <div className="glitch-divB">
                    <img
                      data-aos="fade-left"
                      data-aos-duration="500"
                      className="glitch-inb"
                      src={nairobi}
                      alt="nairobi"
                      loading="lazy"
                    />{" "}
                  </div>
                )}
              </div>
            </h1>

            <br />
          </div>

          <div className="myhome-left"></div>
        </div>
      </div>



      <Talk Contact={Contact} />
    </div>
  </Transitions>
);
}
