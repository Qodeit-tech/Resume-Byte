import React from "react";
import "./ResumeEx.css";
import imge from "../../images/template4.png";
function ResumeEx() {
  return (
    <div className="backfooter">
      <div className="container ">
        <div className="row py-5">
          <div className="col-lg-6 col-md-12 col-sm-12 pt-4">
            <p>START BUILDING YOUR CAREER</p>
            <h2>Professional resumes for effective job interviews</h2>
            <p>
              A great job application leads to a good interview. An amazing
              resume is what makes it all possible. Start off strong with the
              hiring manager by creating a positive professional image. A job
              interview can be much easier if they have a favorable view of your
              CV and cover letter.
            </p>
            <button className="text-white bluebg p-3">Get Started Now</button>
            &nbsp; &nbsp; &nbsp;
            <button className="text-white bluebg p-3">Resume Examples</button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
            <img
              src={imge}
              alt="banner"
              height="50% !important"
              className="imge pt-lg-0 pt-md-5 pt-sm-5"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
export default ResumeEx;
