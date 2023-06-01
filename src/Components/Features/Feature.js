import React ,{useEffect} from "react";
import "./Feature.css";

import builder from "../../images/features/bulder.jpeg";
import cover from "../../images/features/cover.png";
import datasave from "../../images/features/datasave.jpg";
import interview from "../../images/features/interview.png";
import job from "../../images/features/job.png";
import resume from "../../images/features/resume.png";
import spell from "../../images/features/spell.png";
import summary from "../../images/features/sumary.png";
import template from "../../images/features/template.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Feature() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="feature" id='features'> 
      <div className="container">
        <div className="py-5 row">
          <h3 className="py-5 txt">
            Features designed to help you win your dream job
          </h3>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12 "data-aos="zoom-in-down">
              <img src={builder} alt="f1" className="center vert-move" />
              <h5>Easy online resume builder</h5>
              <p>
                Create an awesome resume in minutes, without leaving your web
                browser.
                </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in-down">
              <img src={spell} alt="f1" className="center vert-move" />
              <h5>Automatic spell-checker</h5>
              <p>
                Our built-in spell-checker takes care of the grammar for you.
                Create a resume with zero typos or errors.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in-down">
              <img src={datasave} alt="f1" className="center vert-move" />
              <h5>Your data is safe</h5>
              <p>
                Your data is kept private and protected by strong 256-bit
                encryption.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in-down">
              <img src={summary} alt="f1" className="center vert-move" />
              <h5>Automatic summary generator</h5>
              <p>
                Create a powerful resume profile or cover letter in one click.
                Writer’s block is no longer an obstacle. Try for free!
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in-down">
              <img src={template} alt="f1" className="center vert-move" />
              <h5>Approved templates</h5>
              <p>
                Professionally-designed resume templates and examples (+guides).
                Just edit and download in 5 minutes.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in-down">
              <img src={job} alt="f1" className="center vert-move" />
              <h5>Job tracking</h5>
              <p>
                We’ll keep you ahead of the competition by tracking the
                employers and jobs you apply to.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in-down">
              <img src={interview} alt="f1" className="center vert-move" />
              <h5>Interview school</h5>
              <p>
                Our unique digital tool will help you win jobs! Receive
                feedback, tips and improve your interview skills.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in-down">
              <img src={resume} alt="f1" className="center vert-move" />
              <h5>Multi-format resume options</h5>
              <p>
                Save your perfect resume in any common format, including
                Microsoft Word and PDF in a single click.
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12" data-aos="zoom-in-down">
              <img src={cover} alt="f1" className="center vert-move" />
              <h5>Cover letters</h5>
              <p>
                Our cover letter builder works with the same ease and use of
                elegant templates as the resume creator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Feature;
