const ProcessBox = ({ icon, title, info, link, anchor, zigzag, step }) => {
  return (
    <div
      className={` flex flex-col gap-4 text-center items-center ${zigzag ? "xl:mb-[150px]" : "justify-center "
        } grayscale hover:grayscale-0 transition-all ease-in-out duration-500 mb-4 top-2 `}
    >
      <div
        className={`grid place-items-center w-process h-process rounded-full relative  bg-sky-300 rotate-45`}
      >
        <div className="w-half-process h-process scale-110  absolute bg-blue-400 rounded-r-full right-0 "></div>
        {icon}
      </div>
      <div className="font-semibold text-lg relative">
        {title}
        <div className="grid place-items-center absolute -left-10 top-0 w-7 h-7 rounded-full bg-green-400 text-white z-50 text-s">
          {step}
        </div>
      </div>
      <p>{info}</p>
      <a href={link} target="_blank" rel="noreferrer" className="text-blue-800 opacity-80">
        {`${anchor}`}
      </a>
    </div>
  );
};

export default ProcessBox;
