import ZigZag from "./../../images/line-process.png";
import ProcessBox from "./process-box";
import { BiEdit } from "react-icons/bi";

const ProcessMain = () => {
  const iconClasses = "h-14 w-14 z-50 -rotate-45 text-sky-50";
  const process = [
    {
      title: "Fill Form",
      anchor: "Fill Form",
      link: "https://google.com",
      info: "Lorem ipsum dolor sit amet, consectetur adipis icing.",
      icon: <BiEdit className={iconClasses} />,
    },
    {
      title: "Choose Template",
      anchor: "Choose Template",
      link: "https://google.com",
      info: "Lorem ipsum dolor sit amet, consectetur adipis icing.",
      icon: <BiEdit className={iconClasses} />,
    },
    {
      title: "Download Resumé",
      anchor: "Download Resumé",
      link: "https://google.com",
      info: "Lorem ipsum dolor sit amet, consectetur adipis icing.",
      icon: <BiEdit className={iconClasses} />,
    },
    {
      title: "Have Issues?",
      anchor: "Have Issues?",
      link: "https://google.com",
      info: "Lorem ipsum dolor sit amet, consectetur adipis icing.",
      icon: <BiEdit className={iconClasses} />,
    },
  ];
  // process-bg before:content-[''] before:absolute before:w-full before:h-full before:top-0 before:left-0

  return (
    <div className={`relative process-bg `}>
      <img
        src={ZigZag}
        alt="zigzag"
        className=" hidden xl:block absolute top1/2 left-1/2 -translate-x-1/2 translate-y-12 w-[85%]"
      />
      <div className="flex justify-around gap-4 lg:flex-nowrap flex-wrap bordbox">
        {process.map(({ title, link, info, icon, anchor }, i) => (
          <ProcessBox
            key={i}
            title={title}
            link={link}
            info={info}
            step={i + 1}
            icon={icon}
            anchor={anchor}
            zigzag={i % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default ProcessMain;
