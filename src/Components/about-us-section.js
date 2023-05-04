import { TypeAnimation } from "react-type-animation";

import finance from "./../images/finance.png";
import ser from "./../images/image-removebg-preview (1).png";
import BlueDash from "./blue-dash";

const AboutUsSection = () => {
  return (
    <div id="about">
      <div className="flex pt-16 lg:pt-44 pb-10 gap-16 items-center">
        <div className="flex flex-col">
          <p className="text-sm lg:text-2xl  font-semibold mb-2 text-blue-600">
            ABOUT US
          </p>
          <p className=" text-2xl lg:text-4xl font-medium ">
            At ResumeByte, we are passionate about
            <br />{" "}
            <TypeAnimation
              sequence={["Helping", 1000, "Career", 2000]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className={
                "italic text-2xl lg:text-4xl text-blue-500 font-serif font-bold"
              }
            />
          </p>
          <BlueDash />
          <p>
            Our cutting-edge technology optimizes your resume for ATS, our
            experienced writers know what employers want, and our personalized
            service tailors our offerings to your career goals for increased
            success.
          </p>
        </div>
        <img
          src={ser}
          alt="finance"
          className=" serpic bounce absolute right-0 opacity-25  w-1/2 sm:w-64 lg:opacity-100 lg:w-72 lg:relative xl:w-1/3"
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
