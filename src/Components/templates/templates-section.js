import BlueDash from "../blue-dash";
import Heading from "../heading";
import {Link} from "react-router-dom";
import TemplateCarousel from "./template-carousel";

const TemplatesSection = () => {
  return (
    <div className="flex gap-16 py-4 pt-14">
      <div className="flex flex-col mb-16 lg:items-start lg:text-start lg:justify-center ">
        <h1 className="head1">Beautiful ready-to-use resume templates</h1>
        <BlueDash />
        <p>
          Win over employers and recruiters by using one of our 25+ elegant,
          professionally-designed resume templates. Download to word or PDF.
        </p>
        <button className="p-3 text-white bluebg"><Link to="/build-resume" className="text-white">Select Template</Link></button>
      </div>

      <TemplateCarousel />
    </div>
  );
};

export default TemplatesSection;
