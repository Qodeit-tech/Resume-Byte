import React,{useEffect} from "react";
import "./Guide.css";
import { Link } from "react-router-dom";
import imge from "../../images/guide.png";
import easy from "../../images/guide/easy.png";
import win from "../../images/guide/winner.png";
import tested from "../../images/guide/tested.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Guide() {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

 
  return (
    <div className="backfooter">
      <div className="container ">
        <div className="py-5 row">
          <div className="px-3 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center" data-aos="fade-right">
            <img
              src={imge}
              alt="banner"
              height="50% !important"
              className="imge pt-lg-0 pt-md-5 pt-sm-5"
            />
          </div>
          <div className="pt-4 col-lg-6 col-md-12 col-sm-12" data-aos="fade-left">
            {/* <p>SECURE YOUR DREAM JOB</p> */}
            <h2 className="head1 ">Use the best resume maker as your guide</h2>
            <p>
              Getting that dream job can seem like an impossible task. We’re
              here to change that. Give yourself a real advantage with the best
              online resume maker: created by experts, improved by data, trusted
              by millions of professionals.
            </p>
            <button className="p-3 text-white bluebg">
            <Link to="/build-resume" className="text-white">     Create Cover Letter</Link>
            </button>
            &nbsp; &nbsp;
            <button className="p-3 text-white bluebg">Watch Video</button>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-4 col-sm-12 " data-aos="flip-up">
            <img src={win} alt="f1" className="center1 vert-move" width="20%" />
            <h5 className="pdes">Make a resume that wins interviews</h5>
            <p>
              Use our resume maker with its advanced creation tools to tell a
              professional story that engages recruiters, hiring managers and
              even CEOs.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12" data-aos="flip-up">
            <img src={easy} alt="f1" className="center1 vert-move" width="20%" />
            <h5 className="pdes">Resume writing made easy</h5>
            <p>
              Resume writing has never been this effortless. Pre-generated text,
              visual designs and more - all already integrated into the resume
              maker. Just fill in your details.
            </p>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-12" data-aos="flip-up">
            <img src={tested} alt="f1" className="center1 vert-move" width="20%" />
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
