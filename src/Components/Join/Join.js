import BlueDash from "../blue-dash";
import Heading from "../heading";
import "./Join.css";
const Join = () => {
  return (
    <div className={"bg-blue-50"}>
      <div className="flex flex-col items-center  text-center  py-5 ">
        <p className="edit">Join over 25,328,000 users worldwide</p>
        <p>Start for free — try our resume builder now</p>
        <button className="text-white bluebg p-4">Create My Resume</button>
        {/* <BlueDash marginY="my-5  mb-16" /> */}
      </div>
    </div>
  );
};

export default Join;
