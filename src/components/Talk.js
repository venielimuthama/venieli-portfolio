import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos' 


export default function Talk() {

   useEffect(() => {
     AOS.init();
     AOS.refresh();
   }, []);


  return (
    <div className="myaostalk">
      <div
      data-aos="slide-up"
      data-aos-duration="500"
      data-aos-anchor-placement="top-center"
      >
        <div className="mytalk-div">
          <div className="mytalk">
            <div
              className="myh1-talkdiv"
              data-aos="slide-up"
              data-aos-duration="900"
              data-aos-anchor-placement="top-center"
            >
              <h1 className="myh1-talk">WANT TO START <br/> A PROJECT <br />?</h1>
            </div>

 
            <div className="mynav-talk">
              
            <Link className="mynav-talk-li" to="Contact">
              <h1 to="Contact" className="mylink-talk">
                LET'S <br/> TALK
              </h1>
              </Link>
              
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}
