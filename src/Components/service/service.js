import { useState } from "react";

const Service = ({ image, title, info, color }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className={`w-11/11 p-5 sm:h-[3.7rem] sm:hover:h-48 lg:w-[19rem]  lg:p-9 xl:w-[22rem] lg:h-[11rem] lg:hover:h-[25.5rem] ${color} text-black hover:z-10  transition-all overflow-hidden bord justify-content-center`}
    >
      <div className="flex flex-col justify-content-center align-middle gap-2 transition-all ">
        <img
          src={image}
          alt="images"
          width="30%"
          className="txt justify-content-center"
        />
        <p className="font-semibold whitespace-nowrap text-xl txt">{title}</p>
        <p
          className={`text-ellipsis  ${
            hovered ? "line-clamp-none" : "lg:line-clamp-3"
          } transition-all overflow-hidden p-4`}
        >
          {info}
        </p>
      </div>
    </div>
  );
};

export default Service;
