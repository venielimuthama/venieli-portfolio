import React from 'react'

function FAQ() {
  return (
    <div className="myFaq">
      <div className="myfaq-acc-flex">
        {/* left */}
        <div className="myfaqhead">
          <h2 className="myfaqhead-quiz">Frequently Asked Questions (FAQs)</h2>{" "}
          <br />
          <h3>Got some few more questions? Please feel free to hit me up.</h3>
        </div>

        {/* right */}
        <div
          class="accordion accordion-flush faq-acc"
          id="accordionFlushExample"
        >
          <div class="myfaq-title">FAQS</div>
          {/* 1 */}
          <div class="accordion-item faq-acc-item">
            <h2 class="accordion-header faq-acc-header" id="flush-headingOne">
              <button
                class="faq-acc-btn accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                How much do you charge and what services do you offer?
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body faq-acc-body">
                I design, develop, update and manage web applications and
                websites.I also partner with various web hosting companies to
                host wesites. <br/>
                The cost of my affordable services, varies depending on the project's requirements like the number of pages and the level of functionality.
              </div>
            </div>
          </div>
          {/* 2 */}
          <div class="accordion-item faq-acc-item">
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed faq-acc-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                What steps do you follow when providing services?
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body faq-acc-body">
                1.<span className="mysec-faq">Brainstorm</span>: Discuss with the client about
                the project requirements and understand each other better.<br/>
                2.<span className="mysec-faq">Wireframes & Mockups</span>: Design various mockups and see which one
                pleases the client.<br />
                3.<span className="mysec-faq">Development</span>: Develop the client's approved
                mockup design.<br />
                4.<span className="mysec-faq">Testing</span>: Test the site to ensure that it is
                working as expected.<br/> 
                5.<span className="mysec-faq">Deployment</span>: Deploy the site to the
                client's hosting account.<br/> 
                6.<span className="mysec-faq">Satisfaction</span>: Ensure that the client
                is satisfied with the site.<br/> 
                7.<span className="mysec-faq">Management</span>: Manage the site and
                keep it up to date.<br/>
                8.<span className="mysec-faq">Support</span>: Provide support to the client if
                needed.
              </div>
            </div>
          </div>
          {/* 3 */}
          <div class="accordion-item faq-acc-item">
            <h2 class="accordion-header faq-acc-head" id="flush-headingThree">
              <button
                class="accordion-button collapsed faq-acc-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                Will you maintain and host my site for me?
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body faq-acc-body">
                Regular maintenance is essential for a site to stabilize its
                flexibility and reliability. Ofcourse I will help you out with
                proper and professional website maintenance in addition to
                development as it keeps your business inclined. I also help you
                with hosting and domain registration which costs less than 25
                USD for a whole year.
              </div>
            </div>
          </div>
          {/* 4 */}
          <div class="accordion-item faq-acc-item">
            <h2 class="accordion-header faq-acc-head" id="flush-headingFour">
              <button
                class="accordion-button collapsed faq-acc-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
              >
                How long does it take to build a website?
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body faq-acc-body">
                Depending on the complexity and functionality of the project,the
                time frame varies from a few days to a few weeks. Brainstorming
                about it's requirements helps me give you a more accurate
                estimate.
              </div>
            </div>
          </div>
          {/* 5 */}
          <div class="accordion-item faq-acc-item">
            <h2 class="accordion-header faq-acc-head" id="flush-headingFive">
              <button
                class="accordion-button collapsed faq-acc-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
              >
                Can you design my logo and write my site's content?
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body faq-acc-body">
                Depending on your Website's needs, I can design your logo, write
                your content or partner with my team of other professional logo
                designers and copywriters from around the world, to give you your
                desired results.
              </div>
            </div>
          </div>
          {/* 6 */}
          <div class="accordion-item faq-acc-item">
            <h2 class="accordion-header faq-acc-head" id="flush-headingSix">
              <button
                class="accordion-button collapsed faq-acc-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSix"
                aria-expanded="false"
                aria-controls="flush-collapseSix"
              >
                How do I know the building stages or progress my website is in?
              </button>
            </h2>
            <div
              id="flush-collapseSix"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSix"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body faq-acc-body">
                All my communication channels provided on this website are
                always open and available, always feel free to hit me up. I also
                provide constant updates on the progress of your project
                frequently and continue to work as per your suggestions.
              </div>
            </div>
          </div>
          {/* 7 */}
          <div class="accordion-item faq-acc-item">
            <h2 class="accordion-header faq-acc-head" id="flush-headingSeven">
              <button
                class="accordion-button collapsed faq-acc-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseSeven"
                aria-expanded="false"
                aria-controls="flush-collapseSeven"
              >
                I don't know what my requirements are. Can you help me?
              </button>
            </h2>
            <div
              id="flush-collapseSeven"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingSeven"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body faq-acc-body">
                Yes, I can have an in-detailed discussion with you as you answer
                and ask questions leading to a better understanding of what your
                requirements should be.
              </div>
            </div>
          </div>
          {/* 8 */}
          <div class="accordion-item faq-acc-item">
            <h2 class="accordion-header faq-acc-head" id="flush-headingEight">
              <button
                class="accordion-button collapsed faq-acc-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseEight"
                aria-expanded="false"
                aria-controls="flush-collapseEight"
              >
                Do you also provide services for clients abroad?
              </button>
            </h2>
            <div
              id="flush-collapseEight"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingEight"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body faq-acc-body">
                Yes, I often offer my services abroad and sometimes partner with
                a trusted team of experienced developers from all around the world depending on the requirements and time-frame of my client's project.
              </div>
            </div>
          </div>

          {/* </div> */}
          {/* <div className="myfaq-acc-flex2"> */}
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}

export default FAQ