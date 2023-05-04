import React from "react";
import "./ProAcc.css";
import BlueDash from "../blue-dash";
import { BiEdit } from "react-icons/bi";

import signup from "../../images/form/signup.jpg";
import create from "../../images/form/create.jpg";
import download from "../../images/form/download.jpg";

function ProAcc() {
  return (
    <div className="backfooter process">
      <div className="container ">
        <div className="row py-5 txt d-flex justify-content-center">
          <div className="col-lg-8 col-md-12 col-sm-12 pt-4">
            <h1>Create perfect resumes for the modern job market</h1>
            <p>
              Creating a resume has never been this easy! In three simple steps,
              create the perfect document to impress hiring managers and
              employers. Minimum time, maximum professional quality.
            </p>
            <button className="text-white bluebg p-3">Create My Resume</button>
          </div>
        </div>
        <div className="row whitebg ">
          <div className="row">
            <ul
              className="nav nav-tabs overflow-hidden w-75 "
              id="myTab"
              role="tablist"
            >
              <li
                className="nav-item col-lg-4 col-md-4 col-sm-4  "
                role="presentation"
              >
                <button
                  className="nav-link active "
                  id="home-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#home-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="home-tab-pane"
                  aria-selected="true"
                >
                  1. Sign Up
                  <BlueDash marginY="my-1 mb-1" />
                </button>
              </li>

              <li
                className="nav-item col-lg-4 col-md-4 col-sm-4 "
                role="presentation"
              >
                <button
                  className="nav-link"
                  id="profile-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#profile-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="profile-tab-pane"
                  aria-selected="false"
                >
                  2. Create
                  <BlueDash marginY="my-1 mb-1" />
                </button>
              </li>

              <li
                className="nav-item col-lg-4 col-md-4 col-sm-4 "
                role="presentation"
              >
                <button
                  className="nav-link"
                  id="contact-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#contact-tab-pane"
                  type="button"
                  role="tab"
                  aria-controls="contact-tab-pane"
                  aria-selected="false"
                >
                  3.Download
                  <BlueDash marginY="my-1 mb-1" />
                </button>
              </li>
            </ul>
          </div>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home-tab-pane"
              role="tabpanel"
              aria-labelledby="home-tab"
              tabindex="0"
            >
              <div className="row py-5">
                <div className="col-lg-6 col-md-12 col-sm-12 py-5">
                  <h4 className=" py-2">Your First Step</h4>
                  <p className="fs">
                    Lorem Duis aute irure dolor reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur malesuada
                    Aliquam luctus, nibh eleifend lacinia gravida Lorem ipsum
                    dolor sit amet,Lorem ipsum dolor sit amet, consectetur
                    lacinia consectetur lacinia
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                  <img className="img" src={signup} />
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile-tab-pane"
              role="tabpanel"
              aria-labelledby="profile-tab"
              tabindex="0"
            >
              <div className="row py-5">
                <div className="col-lg-6  col-md-12 col-sm-12 py-5">
                  <h4 className=" py-2">Your second Step</h4>
                  <p className="fs">
                    Lorem Duis aute irure dolor reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur malesuada
                    Aliquam luctus, nibh eleifend lacinia gravida Lorem ipsum
                    dolor sit amet,Lorem ipsum dolor sit amet, consectetur
                    lacinia consectetur lacinia
                  </p>
                </div>
                <div className="col-lg-6  col-md-12 col-sm-12 d-flex justify-content-center">
                  <img className="img" src={create} />
                  {/* <BiEdit className={iconClasses} />, */}
                </div>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact-tab-pane"
              role="tabpanel"
              aria-labelledby="contact-tab"
              tabindex="0"
            >
              <div className="row py-5">
                <div className="col-lg-6 col-md-12 col-sm-12 py-5">
                  <h4 className=" py-2">Your third Step</h4>
                  <p className="fs">
                    Lorem Duis aute irure dolor reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur malesuada
                    Aliquam luctus, nibh eleifend lacinia gravida Lorem ipsum
                    dolor sit amet,Lorem ipsum dolor sit amet, consectetur
                    lacinia consectetur lacinia
                  </p>
                </div>
                <div className="col-lg-6  col-md-12 col-sm-12 d-flex justify-content-center ">
                  <img className="img" src={download} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProAcc;
