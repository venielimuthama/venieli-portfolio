import React, { useEffect } from "react";
import AOS from "aos";
import "bootstrap/dist/css/bootstrap.css";
import Transitions from "./Transitions";

export default function Info() {


  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <Transitions>
  <div className="myinfo">
    <div className="myinfo-center">
      {/* top */}

      <div className="mytop-info">
        <div className="mytoptop">
  
          {/* intro */}
          <div className="mydiv-creative">
                
            <div className="myh2div-creative">
              <h1 className="myh2-creative">
                I'm a creative Front-end Developer from Nairobi (Kenya) working
                with brands in helping them build a stable online presence and
                attract potential investors and clients.
              </h1>
            </div>
            <div className="myh3div-creative">
              <h1 className="myh3-creative">
                I determine the structure of web applications, develop features
                that enhance user experiences while striking a balance between
                functional and aesthetic design.
              </h1>
            </div>
          </div>

        </div>
      </div>

      {/* middle */}
      <div className="mymiddle-info">
        <div
          className="mymiddle-div"
          data-aos="slide-up"
          data-aos-anchor-placement="top-center"
          data-aos-duration="800"
        >
          {/* services */}
          <div className="mymiddle-service">
            <div className="mymiddle-flex">
              <div className="mymiddlediv-flex">
                 <div className="myh1-servicediv">
                 <h1 className="myh1-service">SERVICES</h1>
                 </div>
                <h1 className="myh2-service">
                  I develop brilliant solutions that help serious brands achieve
                  goals, market products, increase profits and make their target
                  audience understand who and what they do.
                </h1>
              </div>
            </div>

            <div className="mymiddle-img"></div>
          </div>
        </div>
      </div>

      {/* bottom */}

      <div
        className="mybottom-info"
        data-aos="slide-up"
        data-aos-duration="500"
        data-aos-anchor-placement="top-center"
      >
        {/* accordion */}
        <div className="myacc">
          <div class="accordion accordion-flush" id="accordionFlushExample">
            <div
              class="accordion-item acc-item"
              data-aos="slide-up"
              data-aos-duration="500"
            >
              <h2 class="accordion-header acc-head" id="flush-headingOne">
                <button
                  class="accordion-button collapsed acc-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  <h1 className="myh1-scheme">Scheme</h1>
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingOne"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body acc-body">
                  <h2 class="myh2-scheme">
                    Succesful brands know the importance of{" "}
                    <span className="mycustom">nurturing feelings</span> that
                    make their <br />
                    customers get more out of a{" "}
                    <span className="mycustom">transaction</span> than just a
                    product or service - <br />
                    hence the reason they (customers) stay loyal. A great scheme
                    allows you <br />
                    to initiate and grow a meaningful relationship with your
                    customers. I love to <br />
                    take up this <span className="mychallenge">challenge</span>,
                    analyse it and create a way for your brand to win over{" "}
                    <br />
                    their target audience.
                  </h2>
                </div>
              </div>
            </div>
            <div
              class="accordion-item acc-item"
              data-aos="slide-up"
              data-aos-duration="500"
            >
              <h2 class="accordion-header acc-head" id="flush-headingTwo">
                <button
                  class="accordion-button collapsed acc-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  <h1 className="myh1-brand">Brand Design</h1>
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingTwo"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body acc-body">
                  {" "}
                  <h2 className="myh2-brand">
                    As times change, new products arrive and other businesses
                    emerge, the ability <br />
                    to be quickly <span className="myversati">
                      versatile
                    </span>{" "}
                    as a brand is key to staying relevant to your consumers{" "}
                    <br />
                    and on top of the{" "}
                    <span className="mycompe">competition</span>. As a creative
                    I devise plans and ideas that help <br />
                    brands adjust quickly according to the{" "}
                    <span className="mycompe">
                      current market
                    </span> demands.{" "}
                  </h2>{" "}
                </div>
              </div>
            </div>
            <div
              class="accordion-item acc-item"
              data-aos="slide-up"
              data-aos-duration="500"
            >
              <h2 class="accordion-header acc-head" id="flush-headingThree">
                <button
                  class="accordion-button collapsed acc-btn"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  <h1 className="myh1-ux">UI/UX Design</h1>
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                aria-labelledby="flush-headingThree"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body acc-body">
                  <h2 className="myh2-ux">
                    Of late customers prefer to deal with a company which offers
                    the best intuitive{" "}
                    <span className="mycustom">User Experience</span>. Due to
                    the market being full of websites which look and feel the
                    same, a brand has to be unique and innovative so as to{" "}
                    <span className="mycustom">
                      improve customer acquisition
                    </span>
                    . I offer optimized UI/UX services with the capability of{" "}
                    <span className="mycustom">hooking up</span> customers to
                    your web application or site in less than 5 seconds, turn
                    them to regular visitors and eventually into paying
                    customers.
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>

      </Transitions>
);
}











