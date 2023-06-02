import BlueDash from "../blue-dash";
import Heading from "../heading";

const ContactUsHeading = () => {
  return (
    <div>
      <div className="flex flex-col items-center gap-2 py-5 lg:items-start lg:pr-44">
        {/* <Heading
          text={"CONTACT US"}
          shadowText="before:content-['Contact_Us']"
          // shadowText="Process"
          size="before:text-6xl lg:before:text-8xl"
          margin="m-0"
          classname="before:whitespace-nowrap whitespace-nowrap lg:before:left-48"
        /> */}
        <h1 className="head5">Contact Us</h1>
        <BlueDash marginY="my-2" />
        <p className="whitespace-nowrap">
          <span className="font-medium">Email:</span> xyz@gmail.com
        </p>
      </div>
      <p className="mt-7 ">
        Having trouble? Find the answer to your query here. Don't hasitate to
        contact us!
      </p>
    </div>
  );
};

export default ContactUsHeading;
