import React from "react";
import "./createcover.css";
import imge from "../../images/Checklist.png";
function Createcover() {
  return (
    <div className="">
      <div className="container ">
        <div className="row py-5">
          <div className="col-lg-6 col-md-12 col-sm-12 pt-4">
            <p>SECURE YOUR DREAM JOB</p>
            <h2>
              Create a professional story in minutes. Use our cover letter
              maker.
            </h2>
            <p>
              Our cover letter maker allows you to write amazing professional
              pitches in minutes rather than hours. No more writer’s block, no
              more searching for the convincing phrases or agonizing over
              formatting. Be persuasive without effort!
            </p>
            <button className="text-white bluebg p-3">
              Create Cover Letter
            </button>
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

export default Createcover;
