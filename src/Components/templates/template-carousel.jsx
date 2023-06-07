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
//           <div className="flex w-full shadow-md hover:scale-110">
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
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import template1 from "./../../images/template1.jpg";
import template2 from "./../../images/template2.jpg";
import template3 from "./../../images/template3.jpg";
// import {  Carousel} from "tailwindcss";




const TemplateCarousel = () => {
  const [onHover, setOnHover] = useState(false);
  const imageClass = "ml-4";

  const templates = [template1, template2, template3];

  return (
     
    // <>
    //   <div
    //     className="hidden transition-all hover:scale-110 lg:block"
    //     onMouseOver={() => setOnHover(true)}
    //     onMouseOut={() => setOnHover(false)}
    //   >
    //     <Marquee
    //       className="transition-all hover:scale-110 w-96"
    //       gradientWidth={0}
    //       style={onHover ? { width: "24rem" } : { width: "24rem" }}
    //       speed={onHover ? "75" : "100"}
    //     >
    //       <div
    //         className={`relative w-96  overflow-hidden scroll-m-0
    //     `}
    //       >
    //         <div className="flex w-full shadow-md hover:scale-110">
    //           {templates.map((template, index) => (
    //             <img
    //               key={index}
    //               src={template}
    //               alt={`template${index}`}
    //               className={`${imageClass} `}
    //             />
    //           ))}
    //           {templates.map((template, index) => (
    //             <img
    //               key={index + 3}
    //               src={template}
    //               alt={`template${index}`}
    //               className={`${imageClass} `}
    //             />
    //           ))}
    //           {templates.map((template, index) => (
    //             <img
    //               key={index + 6}
    //               src={template}
    //               alt={`template${index}`}
    //               className={`${imageClass} `}
    //             />
    //           ))}
    //         </div>
    //       </div>
    //     </Marquee>
    //   </div>
    // </>
    
//     <div
//   id="carouselExampleControls"
//   class="relative"
//   data-te-carousel-init
//   data-te-carousel-slide>
//   {/* <!--Carousel items--> */}
//   <div
//     class="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
//     {/* <!--First item--> */}
//     <div
//       class="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-item
//       data-te-carousel-active>
//       <img
//         src={template1}
//         class="block w-full"
//         alt="Wild Landscape" />
//     </div>
//     {/* <!--Second item--> */}
//     <div
//       class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-item>
//       <img
//         src={template2}
//         class="block w-full"
//         alt="Camera" />
//     </div>
//     {/* <!--Third item--> */}
//     <div
//       class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
//       data-te-carousel-item>
//       <img
//         src={template3}
//         class="block w-full"
//         alt="Exotic Fruits" />
//     </div>
//   </div>

//   {/* <!--Carousel controls - prev item--> */}
//   <button
//     class="absolute bottom-0 left-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//     type="button"
//     data-te-target="#carouselExampleControls"
//     data-te-slide="prev">
//     <span class="inline-block h-8 w-8">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         class="h-6 w-6">
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M15.75 19.5L8.25 12l7.5-7.5" />
//       </svg>
//     </span>
//     <span
//       class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//       >Previous</span>
//   </button>
//   {/* <!--Carousel controls - next item--> */}
//   <button
//     class="absolute bottom-0 right-0 top-0 z-[1] flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
//     type="button"
//     data-te-target="#carouselExampleControls"
//     data-te-slide="next">
//     <span class="inline-block h-8 w-8">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke-width="1.5"
//         stroke="currentColor"
//         class="h-6 w-6">
//         <path
//           stroke-linecap="round"
//           stroke-linejoin="round"
//           d="M8.25 4.5l7.5 7.5-7.5 7.5" />
//       </svg>
//     </span>
//     <span
//       class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
//       >Next</span>
//   </button>
// </div>
{/* <div className="p-4 xl:w-1/3 md:w-1/2">
<Carousel>
                <div>
                    <img src={template1} alt=""/>
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div>
                    <img src={template2} alt=""/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div>
                    <img src={template3} alt="" />
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
</div> */}
  );
};

export default TemplateCarousel;
