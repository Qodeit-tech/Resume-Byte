import BlueDash from "../blue-dash";
import Heading from "../heading";
import {Link} from "react-router-dom";
// import TemplateCarousel from "./template-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import template1 from "./../../images/template1.jpg";
import template2 from "./../../images/template2.jpg";
import template3 from "./../../images/template3.jpg";
const TemplatesSection = () => {
  return (
    <div className="">
    <div className="container">
    <div className="py-5 row ">
      <div className="pt-4 col-lg-6 col-md-12 col-sm-12">
        <h1 className="head1">Beautiful ready-to-use resume templates</h1>
        <BlueDash />
        <p>
          Win over employers and recruiters by using one of our 25+ elegant,
          professionally-designed resume templates. Download to word or PDF.
        </p>
        <button className="p-3 text-white bluebg"><Link to="/build-resume" className="text-white">Select Template</Link></button>
      </div>
      <div className="pt-3 col-lg-6 col-md-12 col-sm-12 d-flex justify-content-center" >
     
<Carousel infiniteloop >
                <div>
                    <img src={template1} alt=""/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={template2} alt=""/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={template3} alt="" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>

      {/* <TemplateCarousel /> */}
      </div>
    </div>
    </div>
    </div>
  );
};

export default TemplatesSection;
