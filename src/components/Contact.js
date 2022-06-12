import React from 'react';
import arrowA from '../image/arrowb.png'
import Typical from "react-typical";
import Transitions from "./Transitions";


export default function Contact() {
    // email
    const Mailto = ({ email, subject = '', body = '', children }) => {
  let params = subject || body ? '?' : '';
  if (subject) params += `subject=${encodeURIComponent(subject)}`;
  if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

  return <a href={`mailto:${email}${params}`}>{children}</a>;
    };

    // callto
    const Callto = ({ phone, children }) => {
  return <a href={`tel:${phone}`}>{children}</a>;
};
    
    // jsx
  return (
      
    <Transitions>
      <div className="mycont-div">
        <div className="mycont">
         
          <Typical
            steps={[" ", 0, "Let's talk.", 1500]}
            loop={Infinity}
            wrapper="h1"
            className="myh1-cont"
          />

          <div className="mycont-bottom">
            <div className="myemail-div">
              
              <h1 className="myemail">Email</h1>

              <Mailto
                email="shadrackmuthama19@gmail.com"
                subject="Hello & Welcome"
                body="Let's talk"
              >
                <img src={arrowA} alt="" className="myarrowA" />
              </Mailto>
            </div>
            <div className="mycall-div">
              <h1 className="mycall">Phone</h1>
              <Callto phone="+254707199368">
                <img src={arrowA} alt="" className="myarrowB" />
              </Callto>
            </div>
          </div>
        </div>
      </div>
      </Transitions>
    );
}
  