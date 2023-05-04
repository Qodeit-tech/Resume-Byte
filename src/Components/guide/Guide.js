import React from "react";
import "./Guide.css";

import imge from "../../images/guide.png";
import easy from "../../images/guide/easy.png";
import win from "../../images/guide/winner.png";
import tested from "../../images/guide/tested.png";

function Guide() {
  return (
    <div className="backfooter">
      <div className="container ">
        <div className="row py-5">
          <div className="col-lg-6 col-md-12 col-sm-12 d-flex px-3 justify-content-center">
            <img
              src={imge}
              alt="banner"
              height="50% !important"
              className="imge pt-lg-0 pt-md-5 pt-sm-5"
            />
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 pt-4">
            {/* <p>SECURE YOUR DREAM JOB</p> */}
            <h2 className="head1 ">Use the best resume maker as your guide</h2>
            <p>
              Getting that dream job can seem like an impossible task. We’re
              here to change that. Give yourself a real advantage with the best
              online resume maker: created by experts, improved by data, trusted
              by millions of professionals.
            </p>
            <button className="text-white bluebg p-3">
              Create Cover Letter
            </button>
            &nbsp; &nbsp;
            <button className="text-white bluebg p-3">Watch Video</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 ">
            <img src={win} alt="f1" className="center1" width="20%" />
            <h5 className="pdes">Make a resume that wins interviews</h5>
            <p>
              Use our resume maker with its advanced creation tools to tell a
              professional story that engages recruiters, hiring managers and
              even CEOs.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={easy} alt="f1" className="center1" width="20%" />
            <h5 className="pdes">Resume writing made easy</h5>
            <p>
              Resume writing has never been this effortless. Pre-generated text,
              visual designs and more - all already integrated into the resume
              maker. Just fill in your details.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12">
            <img src={tested} alt="f1" className="center1" width="20%" />
            <h5 className="pdes">A recruiter-tested CV maker tool</h5>
            <p>
              Our resume builder and its pre-generated content are tested by
              recruiters and IT experts. We help your CV become truly
              competitive in the hiring process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Guide;
