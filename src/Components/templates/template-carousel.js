// import { useState } from "react";
// import Marquee from "react-fast-marquee";
// import template1 from "./../../images/template1.jpg";
// import template2 from "./../../images/template2.jpg";
// import template3 from "./../../images/template3.jpg";

// const TemplateCarousel = () => {
//   const [onHover, setOnHover] = useState(false);
//   // const [activePage, setActivePage] = useState(1);
//   const imageClass = "ml-4";

//   return (
//     <div
//       className="hidden transition-all hover:scale-110 lg:block"
//       onMouseOver={() => setOnHover(true)}
//       onMouseOut={() => setOnHover(false)}
//     >
//       <Marquee className="transition-all hover:scale-110 w-96"
//         gradientWidth={0}
//         style={
//           onHover
//             ? { width: "24rem", }
//             : { width: "24rem" }
//         }
//         speed={onHover ? "75" : "100"}
//       >
//         <div
//           className={`relative w-96  overflow-hidden scroll-m-0
//         `}
//         >
//           <div className="flex shadow-md w-full hover:scale-110">
//             <img src={template1} alt="example" className={`${imageClass} `} />
//             <img src={template1} alt="example" className="rotate-180 " />
//             <img src={template1} alt="example" className={`${imageClass} `} />
//             <img src={template1} alt="example" className={`${imageClass} `} />
//           </div>
//         </div>
//       </Marquee>
//     </div>
//   );
// };

// export default TemplateCarousel;
import { useState } from "react";
import Marquee from "react-fast-marquee";
import template1 from "./../../images/template1.jpg";
import template2 from "./../../images/template2.jpg";
import template3 from "./../../images/template3.jpg";

const TemplateCarousel = () => {
  const [onHover, setOnHover] = useState(false);
  const imageClass = "ml-4";

  const templates = [template1, template2, template3];

  return (
    <>
      <div
        className="hidden transition-all hover:scale-110 lg:block"
        onMouseOver={() => setOnHover(true)}
        onMouseOut={() => setOnHover(false)}
      >
        <Marquee
          className="transition-all hover:scale-110 w-96"
          gradientWidth={0}
          style={onHover ? { width: "24rem" } : { width: "24rem" }}
          speed={onHover ? "75" : "100"}
        >
          <div
            className={`relative w-96  overflow-hidden scroll-m-0
        `}
          >
            <div className="flex shadow-md w-full hover:scale-110">
              {templates.map((template, index) => (
                <img
                  key={index}
                  src={template}
                  alt={`template${index}`}
                  className={`${imageClass} `}
                />
              ))}
              {templates.map((template, index) => (
                <img
                  key={index + 3}
                  src={template}
                  alt={`template${index}`}
                  className={`${imageClass} `}
                />
              ))}
              {templates.map((template, index) => (
                <img
                  key={index + 6}
                  src={template}
                  alt={`template${index}`}
                  className={`${imageClass} `}
                />
              ))}
            </div>
          </div>
        </Marquee>
      </div>
    </>
  );
};

export default TemplateCarousel;
