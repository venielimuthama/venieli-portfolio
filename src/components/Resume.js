import React from "react";
import pdf from "../image/pdf.png";
import png from "../image/png.png";
import resumepng from "../image/Shadrack-Venieli-Resume.png";
import resumepdf from "../image/Shadrack-Venieli-Resume.pdf";
import Transitions from "./Transitions";



function Resume() {
  return (
    <Transitions>
    <div className="myResume">
      <div className="myResume-div">
        <div className="myResume-div-1">
          <div className="mycv-link-div">
            <img
              src={resumepng}
              alt="resume"
              className="mycv-link lazy"
            />
          </div>
        </div>

        <div className="mycv-dwnld">
          <a href={resumepdf} download className="mycv-pdf">
            <img src={pdf} alt="up" className="mypdficon mycvicon" />
          </a>
          <h1 className="myh1-cv">Download</h1>
          <a href={resumepng} download className="mycv-png">
            {" "}
            <img src={png} alt="up" className="mypngicon mycvicon" />
          </a>
        </div>
      </div>
      </div>
      </Transitions>
  );
}

export default Resume;

