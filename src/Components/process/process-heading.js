import Heading from "../heading";

const ProcessHeading = () => {
  return (
    <div className="text-center relative py-24">
      <Heading
        text={"PROCESS"}
        shadowText="before:content-['Process']"
        // shadowText="Process"
        size=" before:text-6xl lg:before:text-8xl"
        margin="mb-[2.7rem]"
      />
      <p className="text-2xl lg:text-4xl font-semibold">
        Craft Your Winning Resume in Just a Few Steps!
      </p>
      <div className="h-1 w-11  my-7 mx-auto  bg-blue-600 "></div>
      <p className="mt-10 text-2xl">
        Our Resume Builder helps you to create a Professional Resume to land
        your dream job
      </p>
    </div>
  );
};

export default ProcessHeading;
