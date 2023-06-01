import React ,{useEffect} from "react";
import "./createcover.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import imge from "../../images/Checklist.png";
function Createcover() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className="">
      <div className="container ">
        <div className="py-5 row">
          <div className="pt-4 col-lg-6 col-md-12 col-sm-12" data-aos='zoom-in-right'>
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
            
            <button className="p-3 text-white bluebg">
            <Link to="/build-resume" className="text-white">    Create Cover Letter</Link>
            </button> 
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

export default Createcover;
