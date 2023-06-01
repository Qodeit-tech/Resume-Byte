// import { Fragment, useEffect, useRef, useState } from "react";

// const HomeCarousel = ({ data, setNavbarDark }) => {
//   // 0th indexed
//   const [activeCarousel, setActiveCarousel] = useState(0);
//   const homeRef = useRef();

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         setNavbarDark(!entries[0].isIntersecting);
//       },
//       {
//         rootMargin: `-160px`,
//         // rootMargin: `-200px`,
//       }
//     );
//     observer.observe(homeRef.current);
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className="relative" ref={homeRef} id="home">
//       {data.map((dataObj, i) => {
//         return (
//           <Fragment>
//             {i === activeCarousel && (
//               <div
//                 key={i}
//                 className="relative top-0 grid w-full overflow-hidden place-items-center h-75vh"
//               >
//                 <div className="z-30 flex flex-col items-center gap-16 text-white w-fit">
//                   <div className="flex flex-col items-center text-center">
//                     <p className="w-3/5 text-xl font-bold lg:text-4xl">
//                       {dataObj.heading}
//                     </p>
//                     <p className="text-sm font-bold lg:text-lg">
//                       {" "}
//                       &#8211; {dataObj.headingBy}
//                     </p>
//                   </div>
//                   {dataObj.buttons && (
//                     <div className="flex justify-center gap-5 font-medium">
//                       {dataObj.buttons.map(
//                         ({ buttonName, textColor = "", bgColor = "" }, i) => (
//                           <button
//                             key={i}
//                             className={`py-2 px-6 lg:py-4 lg:px-12 ${bgColor} ${textColor} rounded-full`}
//                           >
//                             {buttonName}
//                           </button>
//                         )
//                       )}
//                     </div>
//                   )}
//                 </div>
//                 <div className={`absolute top-0 h-full lg:w-full`}>
//                   <img
//                     className="object-cover h-full lg:w-full"
//                     src={dataObj.image}
//                     alt={dataObj.imageName}
//                   />
//                   <div
//                     className={`absolute top-0 w-full h-full ${
//                       i === 2
//                         ? "shadow-[inset_100rem_100rem_#00000075]"
//                         : "shadow-[inset_100rem_100rem_#00000045]"
//                     }`}
//                   ></div>
//                 </div>
//               </div>
//             )}
//           </Fragment>
//         );
//       })}
//       <div className="absolute z-50 flex gap-1 -translate-x-1/2 lg:flex-col bottom-5 left-1/2 lg:items-end lg:justify-center lg:translate-x-0 lg:top-1/2 lg:-translate-y-1/2 lg:right-10">
//         {new Array(data.length).fill("").map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setActiveCarousel(i)}
//             className={`h-4 w-4 rounded-full bg-white ${
//               activeCarousel === i ? "!bg-blue-600" : ""
//             } `}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import resume1 from "../images/resume1.jpeg";
import resume2 from "../images/resume2.jpg";
import resume3 from "../images/resume3.jpg";
import Testimonials from "./testimonials";
import ServiceBox from "../Components/service/service";
import AboutUs from "./about-us";
import Guide from "../Components/guide/Guide";
import Templates from "./templates";
import ResumeShortlistedBy from "./resume-shortlisted-by";
import Createcover from "../Components/createcover/Createcover";
import Cvex from "../Components/CvEx/Cvex";
import Feature from "../Components/Features/Feature";
import ResumeEx from "../Components/ResumeExample/ResumeEx";
import Process from "./process";
import Blog from "./blog";
import Faq from "../Components/faq/Faq";
import Join from "../Components/Join/Join";
import ContactUs from "./contact-us";
import { Link } from "react-router-dom";
import "../index.css";
import halftemp from "../images/halftemp.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
const backgroundImageUrls = [resume1, resume2, resume3];
const HomeCarousel = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(0);
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  // window.scrollTo(0, 0);

  useEffect(() => {
    // Set an interval to change the background image every 2 seconds
    const intervalId = setInterval(() => {
      setBackgroundIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImageUrls.length
      );
    }, 2000);

    // Clear the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  const backgroundImageUrl = backgroundImageUrls[backgroundIndex];

  // tanmay work
  const carouselData = [
    {
      key: 1,
      heading:
        "'98% of Fortune 500 companies use Applicant Tracking System (ATS) to filter resumes.'",
      headingBy: "Job scan",
      image: resume1,
      imgName: "resume1-img",
    },
    {
      key: 2,
      heading:
        "'Hiring Manager spends an average of only 7.4 seconds reviewing a resume'",
      headingBy: "Forbes",
      image: resume2,
      imgName: "resume2-img",
    },
    {
      key: 3,
      heading:
        "'On an average, 75% of resumes are rejected by Application Tracking System (ATS) before ever- reaching the hands of hiring managers.'",
      headingBy: "Forbes",
      image: resume3,
      imgName: "resume3-img",
    },
  ];

  const styles = {
    height: "100vh",
    backgroundImage: `url(${backgroundImageUrl})`,
    //  backgroundColor:'#000000c9',
    // backgroundColor:"rgb(239, 246, 255)" ,
    // backgroundImage: "linear-gradient(to right, #ffc8dd, #b295f7)",
    // backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)",
    // backgroundColor: "#eff6ff",
    // backgroundImage:`url("../images/videoback.mp4")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transition: "all 700ms ease-in-out",
    zIndex: "-1",
    marginTop: "57px",
  };

  return (
    <>
   
    <div style={styles} id="home">
      {/* {carouselData.map((item, index) => (
                <div
                  key={index}
                  style={{
                    width:"100%",
                    height:"100%",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"center",
                    zIndex:"10"
                  }}
                >
                  <h2 style={{ fontSize: "5rem", marginBottom: "1rem" , zIndex:"11", color:"red"}}>
                    {item.heading}
                  </h2>
                  <p>{item.headingBy}</p>
                </div>
              ))} */}

      <div
        className="text-black "
        // className=" bg-[#252525b1] text-white"
        style={{
          // backgroundImage:`url("../images/videoback.mp4")`,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          transition: "all 1s",
          backgroundColor:"#eff6ffc9" ,
          // zIndex: "10",
        }}
      >
        {/* <video autoPlay muted loop id='video'>
          <source src="../images/videoback.mp4" type="video/mp4"></source>
        </video> */}
        <p className="pt-5 text-center text-md" data-aos="fade-down">ONLINE RESUME BUILDER</p>
        <h2 data-aos="zoom-in"
          className={"italic text-2xl lg:text-4xl text-black-500 font-serif font-bold pt-2 head"}
          style={{
            fontSize: "2.0rem",
            marginBottom: "1rem",
            zIndex: "11",
            justifyContent: "center",
            width: "80%",
            transition: "all 1s ease-in-out",
          }}
        >
          {carouselData[backgroundIndex].heading}
        </h2>
        <p className="text-lg text-center ">
          {" "}
          ~ {carouselData[backgroundIndex].headingBy}
        </p>
        <p className="py-2 text-lg text-center" data-aos="zoom-in">
          Build a Job winning Perfect Resume & CV in just 5 minutes{" "}
        </p>
        <button className="p-3 text-white bluebg"><Link to="/build-resume" className="text-white">Create My Resume</Link></button>
        <p className="pt-3 pb-2 text-lg text-center" data-aos="zoom-in">
          30,037 resumes created today
        </p>
        {/* <img data-aos="flip-up"
          src={halftemp}
          alt="template"
          style={{
            transition: "all 1s ease-in-out",
          }} /> */}
      </div>
    </div><Testimonials /><ServiceBox /><AboutUs /><Guide /><Templates /><ResumeShortlistedBy /><Createcover /><Cvex /><Feature /><ResumeEx /><Process /><Blog /><Faq /><Join /><ContactUs /></>
  );
};

export default HomeCarousel;
