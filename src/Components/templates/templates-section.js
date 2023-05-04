import BlueDash from "../blue-dash";
import Heading from "../heading";
import TemplateCarousel from "./template-carousel";

const TemplatesSection = () => {
  return (
    <div className="flex pt-14 py-4 gap-16">
      <div className="flex flex-col  lg:items-start mb-16 lg:text-start lg:justify-center ">
        <h1 className="head1">Beautiful ready-to-use resume templates</h1>
        <BlueDash />
        <p>
          Win over employers and recruiters by using one of our 25+ elegant,
          professionally-designed resume templates. Download to word or PDF.
        </p>
        <button className="text-white bluebg p-3">Select Template</button>
      </div>

      <TemplateCarousel />
    </div>
  );
};

export default TemplatesSection;
