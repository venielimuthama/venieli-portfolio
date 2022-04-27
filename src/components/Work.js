import React from "react";
import Transitions from "./Transitions";

//desktop imgs
import homemenu     from "../image/homemenu.png";
import homemenu2 from "../image/homemenu2.png";
import menulaptop from "../image/menulaptop.png";
import reservation from "../image/reservation.png";
import contact from "../image/contactlaptop.png";

//background-desktop imgs
import homemenuCmp     from "../image/homemenuCmp.png";
import homemenu2Cmp    from "../image/homemenu2Cmp.png";
import menulaptopCmp   from "../image/menulaptopCmp.jpg";
import reservationCmp  from "../image/reservationCmp.jpg";
import contactCmp      from "../image/contactlaptopCmp.jpg";

  
//mobile imgs
import contactmobile  from "../image/contactmobile.png";
import homemobile1    from "../image/homemobile1.png";
import homemobile2   from "../image/homemobile2.png";
import reservmobile  from "../image/reservmobile.png";
import menumobile2  from "../image/menumobile2.png";

//background-mobile imgs
import contactmobileCmp  from "../image/contactmobileCmp.png";
import homemobile1Cmp    from "../image/homemobile1Cmp.png";
import homemobile2Cmp   from "../image/homemobile2Cmp.png";
import reservmobileCmp  from "../image/reservmobileCmp.jpg";
import menumobile2Cmp  from "../image/menumobile2Cmp.jpg";

import $ from "jquery";

export default function Work() {

  // mylaazyload
  $(document).ready(function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = $(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = $(window).scrollTop();
          lazyloadImages.each(function() {
              var el = $(this);
              if(el.offset().top - scrollTop < window.innerHeight) {
                var url = el.attr("data-src");
                el.attr("src", url);
                el.removeClass("lazy");
                lazyloadImages = $(".lazy");
              }
          });
          if(lazyloadImages.length === 0) { 
            $(document).off("scroll");
            $(window).off("resize");
          }
      }, 80);
    }

    $(document).on("scroll", lazyload);
    $(window).on("resize", lazyload);
  }
})
  // mylaazyload

     

return (
  <Transitions>
    <div className="mywork">
      <div className="mydiv-work">
        {/* intro */}
        <div className="myintro-work">
          <div className="myintrodiv-work">
            <div className="myintroflex-work">
              <div className="myintro-h1div-work">
                <h1 className="myintro-h1-work">
                  Running a business can never be a task of no sweat! As the
                  world evolves around the digital world, it's crucial to insure
                  a strong online visibility for your brand. Beginning with
                  having a website which establishes your business with a
                  professional approach over the internet.
                </h1>
              </div>

              <div className="myintro-h2div-work">
                <div className="">
                  <h1 className="mytamambo-h1">Tamambo Restaurant</h1>
                  <h1 className="myintro-h2-work">
                    I developed a responsive website for Tamambo Restaurant
                    which has made them reach potential customers with ease and
                    helped visitors to understand their business and services
                    properly. With a better SEO, simple design an enhanced user
                    experience the site has managed attract to attract new
                    customers and earn the trust of their visitors.
                  </h1>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* 1 */}
        <div
          className="myfirst-work">
          <div className="myfirstdiv-work">
            <h1 className="myfirsth1-work">HOME PAGE</h1>
          </div>

          <div className="myfirst-imgwork">

            <div className="myhomemenu">
              <img
                src={homemenuCmp}
                alt="HOME PAGE"
                data-src={homemenu}
                className="homemenu-img  lazy"/>
            </div>

            <div className="myhomemobile1">
              <img
                src={homemobile1Cmp}
                data-src={homemobile1}
                alt="HOME PAGE"
                className="homemobile1   lazy"
              />
            </div>

          </div>
        </div>
 
        {/* 3 */}
        <div
          className="mythird-fade">
          </div>
        <div className="mythird-work">
          <div className="mythirdflex-work">
            <div className="mythird-imgwork">
              <div className="myhomemenu2">
                <img
                  src={homemenu2Cmp}
                   data-src={homemenu2}
                  alt="home"
                  className="homemenu2  lazy"
                />
              </div>

              <div className="myhomemobile2">
                <img
                  src={homemobile2Cmp}
                  data-src={ homemobile2}
                  alt="home"
                  className="homemobile2  lazy"
                />
              </div>
            </div>

            <div className="mythirddiv-work">
              <div className="mythirddivflex-work">
                <h1 className="mythirdh1-work">
                  Lots of confusion about the restaurant's business hours and
                  days
                </h1>
                <h1 className="mythirdh2-work">
                  Decided to create a section clearly displaying the opening and
                  closing hours
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* 4 */}
        <div
          className="myfourth-fade">
          <div className="myfourth-work">
            <div className="myfourthdiv-work">
              <div className="myfourthh1-div-worK">
                <h1 className="myfourthh1-work">E-menu</h1>
              </div>
              <div
                className="myfourthh4-flex"
               
              >
                <h1 className="myfourthh2-work">
                  Conflict kept arising between waiters and customers at the
                  premises due to changes in the menus which they were not aware
                  of.
                </h1>
                <div className="myfourthh4-work"></div>

                <h1 className="myfourthh3-work">
                  Developed an attractive menu display providing an outstanding
                  experience to customers while also easing the process of
                  quickly informing people about new and special dishes and
                  offers.
                </h1>
              </div>
            </div>

            <div className="myfourth-imgwork">
              <div className="mymenulaptop">
                <img src={menulaptopCmp}
                   data-src={menulaptop}
                  alt="menu"
                  className="menulaptop lazy"
                />
              </div>

             

              <div className="mymenumobile2">
                <img
                  src={menumobile2Cmp}
                   data-src={menumobile2}
                  alt="menu"
                  className="menumobile2 lazy"
                />
              </div>
            </div>
          </div>
        </div>

        {/* 5 */}
        <div className="myfifth-work">
          <div className="myfifthh1-div-work">
            <h1 className="myfifthh1-work">Reservation</h1>
          </div>

          <div className="myfifth-imgwork">
            <div className="myreservation-img">
              <img
                src={reservationCmp}
                 data-src={reservation}
                alt="reservation"
                className="reservation-img lazy"
              />
            </div>

            <div className="myreservmobile">
              <img
                src={reservmobileCmp}
                 data-src={reservmobile}
                alt="reservation"
                 className="reservmobile lazy" 
                // classNamimg lazy
              />
            </div>
          </div>

          <div className="myfifthdiv-work">
            {/* prob */}
            <h1 className="myfifthh2-work">
              Lack of an online booking system made customers irritated with the
              long lines at the door making them give up on dining there. Large
              parties couldn't reserve any space, this made the restaurant miss
              a chance at increasing their profits with a very higher margin.
            </h1>
            {/* soln */}
            <h1 className="myfifthh3-work">
              Added online reservation feature to properly manage seats and
              spaces for walk-in customers and also accomodate those who've
              booked online.
            </h1>
          </div>
        </div>

        {/* 6 */}
        <div className="mysixth-work">
          <div className="mysixthh1div-work">
            <div className="mysixthh2div-work">
              <h1 className="mysixthh1-work">Contact Form</h1>
              <h1 className="mysixthh2-work">
                Customers had a hard time communicating with the restaurant's
                management team. <br /> <br /> Displaying email address openly
                in social media pages led to the account being filled up with
                spamms.
              </h1>
            </div>
          </div>

          <div className="mysixth-imgwork">
            <div className="mycontactimg-work">
              <img src={contactCmp} alt="contact"
                data-src={contact}
                  className="contactimg-work lazy" />
            </div>

            <div className="mycontactmobile">
              <img
                src={contactmobileCmp}
                  data-src={contactmobile}
                alt="contact" 
                className="contactmobile lazy"
              />
            </div>
          </div>

          <div className="mysixthh3div-work">
            <h1 className="mysixthh3-work">
              Built a contact form that reduces spam emails from bots and keeps
              track of Inquiries while offering quality support to customers.
            </h1>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  </Transitions>
);
}

 




















































