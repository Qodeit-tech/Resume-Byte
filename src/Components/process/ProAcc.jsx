import React ,{useEffect} from "react";
import "./ProAcc.css";
import BlueDash from "../blue-dash";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";
import signup from "../../images/form/signup.png";
import create from "../../images/form/create.png";
import download from "../../images/form/download.png";
import AOS from "aos";
import "aos/dist/aos.css";
function ProAcc() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="backfooter process">
      <div className="container ">
        <div className="py-5 row txt d-flex justify-content-center">
          <div className="pt-4 col-lg-8 col-md-12 col-sm-12">
            <h1>Create perfect resumes for the modern job market</h1>
            <p>
              Creating a resume has never been this easy! In three simple steps,
              create the perfect document to impress hiring managers and
              employers. Minimum time, maximum professional quality.
            </p>
            <button className="p-3 text-white bluebg"><Link to="/build-resume" className="text-white">Create My Resume</Link></button>
          </div>
        </div>
        <div className="row whitebg ">
          <div className="row">
            <ul
              className="overflow-hidden nav nav-tabs w-75 "
              id="myTab"
              role="tablist"
            >
              <li
                className="nav-item col-lg-4 col-md-4 col-sm-4 "
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
              <div className="py-5 row">
                <div className="py-5 col-lg-6 col-md-12 col-sm-12" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                  <h4 className="py-2 ">Your First Step</h4>
                  <p className="fs">
                    Lorem Duis aute irure dolor reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur malesuada
                    Aliquam luctus, nibh eleifend lacinia gravida Lorem ipsum
                    dolor sit amet,Lorem ipsum dolor sit amet, consectetur
                    lacinia consectetur lacinia
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                  <img className="img vert-move" alt=" " src={signup} data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"/>
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
              <div className="py-5 row">
                <div className="py-5 col-lg-6 col-md-12 col-sm-12" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                  <h4 className="py-2 ">Your second Step</h4>
                  <p className="fs">
                    Lorem Duis aute irure dolor reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur malesuada
                    Aliquam luctus, nibh eleifend lacinia gravida Lorem ipsum
                    dolor sit amet,Lorem ipsum dolor sit amet, consectetur
                    lacinia consectetur lacinia
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center">
                  <img className="img vert-move" src={create} alt=" " data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"/>
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
              <div className="py-5 row">
                <div className="py-5 col-lg-6 col-md-12 col-sm-12" data-aos="fade-right"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
                  <h4 className="py-2 ">Your third Step</h4>
                  <p className="fs">
                    Lorem Duis aute irure dolor reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur malesuada
                    Aliquam luctus, nibh eleifend lacinia gravida Lorem ipsum
                    dolor sit amet,Lorem ipsum dolor sit amet, consectetur
                    lacinia consectetur lacinia
                  </p>
                </div>
                <div className="col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center " >
                  <img className="img vert-move" src={download}  alt=" " data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500"/>
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
