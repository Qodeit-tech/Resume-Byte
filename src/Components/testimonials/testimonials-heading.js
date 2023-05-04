import BlueDash from "../blue-dash";
import Heading from "../heading";

const TestimonialsHeading = () => {
  return (
    <div className=" flex flex-col items-center gap-2 text-center">
      {/* <Heading
        text={"TESTIMONIALS"}
        shadowText="before:content-['Testmonials']"
        // shadowText="Process"
        size='before:text-5xl lg:before:text-8xl'
        margin="m-16"
        classname=""
      /> */}
      <h1 className="head">
        Reviewed by the community. Trusted by professionals
      </h1>
      {/* <p className="text-2xl lg:text-5xl font-semibold">
        Learn more from our blog
      </p> */}
      <BlueDash marginY="my-5 mb-10" />
    </div>
  );
};

export default TestimonialsHeading;
