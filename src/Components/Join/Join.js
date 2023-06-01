import BlueDash from "../blue-dash";
import Heading from "../heading";
import {Link} from "react-router-dom";
import "./Join.css";
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react';
const Join = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div className={"bg-blue-50"}>
      <div className="flex flex-col items-center py-5 text-center ">
        <p className="edit" data-aos="zoom-in-up">Join over 25,328,000 users worldwide</p>
        <p>Start for free — try our resume builder now</p>
          <button className="p-4 text-white bluebg"> <Link to="/build-resume" className="text-white"> Create My Resume</Link></button>
        {/* <BlueDash marginY="my-5  mb-16" /> */}
      </div>
    </div>
  );
};

export default Join;
