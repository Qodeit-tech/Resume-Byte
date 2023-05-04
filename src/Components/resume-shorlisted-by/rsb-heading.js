import BlueDash from "../blue-dash";
import Heading from "../heading";

const RSBHeading = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center ">
      {/* <Heading
        text={"RESUME SHORTLISTED BY"}
        shadowText="before:content-['Resume_Shortlisted']"
        // shadowText="Process"
        size=" before:text-5xl lg:before:text-8xl"
        margin="m-16"
        classname="lg:before:whitespace-nowrap"
      /> */}
      <p className="text-2xl lg:text-5xl font-semibold mt-5 mb-5">
        Our Resume's shortlisted by these companies
      </p>
      <BlueDash marginY="my-5  mb-16" />
    </div>
  );
};

export default RSBHeading;
