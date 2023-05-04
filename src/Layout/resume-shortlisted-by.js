// import Section from "../Components/section";
// import { TfiMicrosoftAlt } from "react-icons/tfi";
// import Marquee from "react-fast-marquee";
// import RSBHeading from "../Components/resume-shorlisted-by/rsb-heading";
// import netflix from '../images/netflix.png'
// import shell from '../images/shell.png'
// import tcs from '../images/tcs.png'

// const ResumeShortlistedBy = () => {
//   const companies = [{netflix}, {shell}, {tcs}];
//   const size = "w-16 h-16 ";
//   // gradient color should be in [r, g, b] form
//   return (
//     <div className={"bg-blue-50"}>
//       <Section classname={"py-10 pb-14"}>
//         <RSBHeading />

//         {/* eslint-disable-next-line react/jsx-no-undef */}
//         <Marquee gradientColor={[239, 246, 255]} gradientWidth={50} speed={40}>
//           <div className="flex justify-around w-full">
//             {companies.map((_, i) => (
//               <TfiMicrosoftAlt key={i} className={size + "text-slate-400 mr-7"} />
//             ))}
//           </div>
//         </Marquee>
//       </Section>
//     </div>
//   );
// };

// export default ResumeShortlistedBy;

// import Section from "../Components/section";
// import { TfiMicrosoftAlt } from "react-icons/tfi";
// import Marquee from "react-fast-marquee";
// import RSBHeading from "../Components/resume-shorlisted-by/rsb-heading";
// import netflix from '../images/netflix.png'
// import shell from '../images/shell.png'
// import tcs from '../images/tcs.png'

// const ResumeShortlistedBy = () => {
//   const companies = ["", "", "", "", ""];
//   const size = "w-16 h-16 ";
//   // gradient color should be in [r, g, b] form
//   return (
//     <div className={"bg-blue-50"}>
//       <Section classname={"py-10 pb-14"}>
//         <RSBHeading />

//         {/* eslint-disable-next-line react/jsx-no-undef */}
//         <Marquee gradientColor={[239, 246, 255]} gradientWidth={50} speed={400}>
//           <div style={{
//             display: "flex",
//             overflowX: "hidden",
//             overflowY: "hidden",
//             scrollBehavior: "smooth",
//             padding: "1rem",
//             // width:"10%",
//             // height:"10%"

//           }}>
//             <div style={{
//               flex: "0 0 auto",
//               margin: "1rem",
//               border:"2px solid red",
//               position:"absolute",
//               height:"10px"
//             }}>
//             <img src={netflix} alt="Logo 1"></img>
//             </div>
//             <div style={{
//               flex: "0 0 auto",
//               marginRight: "1rem"
//             }}>
//               <img src={shell} alt="Logo 2"></img>
//             </div>
//             <div style={{
//               flex: "0 0 auto",
//               marginRight: "10"
//             }}>
//               <img src={tcs} alt="Logo 3"></img>
//             </div>
//           </div>
//         </Marquee>
//       </Section>
//     </div>
//   );
// };

// export default ResumeShortlistedBy;

import Section from "../Components/section";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import Marquee from "react-fast-marquee";
import RSBHeading from "../Components/resume-shorlisted-by/rsb-heading";
import netflix from "../images/netflix.png";
import shell from "../images/shell.png";
import tcs from "../images/tcs.png";
import world_bank_group from "../images/world_bank_group.png";
import oecd from "../images/oecd.png";
import morgan_stanley from "../images/morgan_stanley.png";
import samsung from "../images/samsung.png";

const ResumeShortlistedBy = () => {
  const companies = ["", "", "", "", ""];
  // gradient color should be in [r, g, b] form
  return (
    <div className={"bg-blue-50"}>
      {/* <div className="backpink"> */}
      <Section classname={"py-10 pb-14"}>
        <RSBHeading />

        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Marquee gradientColor={[239, 246, 255]} gradientWidth={50} speed={100}>
          <div
            style={{
              display: "flex",
              overflowX: "hidden",
              overflowY: "hidden",
              scrollBehavior: "smooth",
              padding: "1rem",
              // width:"10%",
              // height:"10%"
            }}
          >
            <div
              style={{
                flex: "0 0 auto",
                marginRight: "2rem",
              }}
            >
              <img src={tcs} alt="Logo 3" className="w-18 h-16"></img>
            </div>
            <div
              style={{
                flex: "0 0 30",
                marginRight: "3rem",
              }}
            >
              <img
                src={morgan_stanley}
                alt="Logo 2"
                className="w-23 h-20"
              ></img>
            </div>
            <div
              style={{
                flex: "0 0 auto",
                marginRight: "2rem",
              }}
            >
              <img
                src={world_bank_group}
                alt="Logo 3"
                className="w-18 h-16"
              ></img>
            </div>
            <div
              style={{
                flex: "0 0 30",
                marginRight: "3rem",
              }}
            >
              <img src={oecd} alt="Logo 2" className="w-18 h-16"></img>
            </div>
            <div
              style={{
                flex: "0 0 auto",
                marginRight: "2rem",
              }}
            >
              <img src={netflix} alt="Logo 3" className="w-18 h-16"></img>
            </div>
            <div
              style={{
                flex: "0 0 auto",
                marginRight: "2rem",
              }}
            >
              <img src={samsung} alt="Logo 3" className="w-18 h-16"></img>
            </div>
          </div>
        </Marquee>
      </Section>
    </div>
  );
};

export default ResumeShortlistedBy;
