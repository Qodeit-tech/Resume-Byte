import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import "./ResumeEx.css";
import imge from "../../images/template4.png";
import AOS from "aos";
import "aos/dist/aos.css";
function ResumeEx() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="backfooter">
      <div className="container ">
        <div className="py-5 row">
          <div className="pt-4 col-lg-6 col-md-12 col-sm-12" data-aos='zoom-in-right'>
            <p>START BUILDING YOUR CAREER</p>
            <h2>Professional resumes for effective job interviews</h2>
            <p>
              A great job application leads to a good interview. An amazing
              resume is what makes it all possible. Start off strong with the
              hiring manager by creating a positive professional image. A job
              interview can be much easier if they have a favorable view of your
              CV and cover letter.
            </p>
            <button className="p-3 text-white bluebg"><Link to="/build-resume" className="text-white">Get Started Now</Link></button>
            &nbsp; &nbsp; &nbsp;
            <button className="p-3 text-white bluebg"><Link to="/build-resume" className="text-white">Resume Examples</Link></button>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center" data-aos='zoom-in-left'>
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
