import { BiCalendarAlt } from "react-icons/bi";
import { FaUserAlt } from "react-icons/fa";

import BlueDash from "../blue-dash";

const BlogBox = ({ heading, subHeading, image, link }) => {
  return (
    <a
      href="https://google.com"
      target={"_blank"}
      rel="noreferrer"
      className="w-[20rem] flex-shrink-0 overflow-hidden rounded-lg border-1 shadow-lg"
    >
      {image}
      <div className="p-8 flex flex-col gap-4">
        <div className="flex gap-5">
          <div className="flex gap-2 items-center">
            <BiCalendarAlt className="text-sm text-blue-600 w-4 h-4" />
            <p>01/2023</p>
          </div>
          <div className="flex gap-2 items-center">
            <FaUserAlt className="text-sm text-blue-600" />
            <p>By Admin</p>
          </div>
        </div>
        <div className="relative w-full h-[1px] border-solid  bg-slate-400">
          <BlueDash classname="absolute bottom-0 !my-0" />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg font-semibold">
            {heading}
          </p>
          {subHeading && <p className="text-sm">{subHeading}</p>}
        </div>
      </div>
    </a>
  );
};

export default BlogBox;
