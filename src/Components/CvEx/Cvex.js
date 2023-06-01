import React from "react";
import "./Cvex.css";
import { Link } from "react-router-dom";
function Cvex() {
  return (
    <div className="backfooter">
      <div className="container ">
        <div className="py-5 row txt d-flex justify-content-center">
          <div className="pt-4 col-lg-8 col-md-12 col-sm-12">
            <h1>
              User-friendly. Professional. Effective. Try our cover letter
              builder today!
            </h1>
            <p>
              How long does it take to write a cover letter? Hours? Days? With
              our cover letter maker you can be done in minutes. Create a
              convincing and effective application letter in several clicks. Use
              our pre-generated phrases, choose a design, fill in your details
              and ideas. Fast and simple.
            </p>
            <button className="p-3 text-white bluebg"><Link to="/build-resume" className="text-white">Try It Now</Link></button>
            &nbsp; &nbsp; &nbsp;
            <button className="p-3 text-white bluebg">
            <Link to="/build-resume" className="text-white"> Cover Letter Examples</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cvex;
