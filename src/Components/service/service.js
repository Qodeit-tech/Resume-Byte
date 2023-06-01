import { useEffect } from "react";
import optimise from "../../images/image-removebg-preview (2).png";
import ats from "../../images/ats.png";
import custom from "../../images/custom.png";
import AOS from "aos";
import "aos/dist/aos.css";
const Service = () => {
  // const [hovered, setHovered] = useState(false);
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    // <div
    //   onMouseOver={() => setHovered(true)}
    //   onMouseOut={() => setHovered(false)}
    //   className={`w-11/11 p-5 sm:h-[3.7rem] sm:hover:h-48 lg:w-[19rem]  lg:p-9 xl:w-[22rem] lg:h-[11rem] lg:hover:h-[25.5rem] ${color} text-black hover:z-10  transition-all overflow-hidden bord justify-content-center`}
    // >
    //   <div className="flex flex-col gap-2 align-middle transition-all justify-content-center ">
    //     <img
    //       src={image}
    //       alt="images"
    //       width="30%"
    //       className="txt justify-content-center"
    //     />
    //     <p className="text-xl font-semibold whitespace-nowrap txt">{title}</p>
    //     <p
    //       className={`text-ellipsis  ${
    //         hovered ? "line-clamp-none" : "lg:line-clamp-3"
    //       } transition-all overflow-hidden p-4`}
    //     >
    //       {info}
    //     </p>
    //   </div>
    // </div>
    <section class="text-gray-600 body-font">
  <div class="container px-2 py-4  mx-auto">
  <div class="flex flex-wrap -m-4 justify-content-center">
            <div class="xl:w-1/3 md:w-1/2 p-4" data-aos="fade-right">
        <div class=" p-6 rounded-lg grid" style={{ backgroundColor: "#eff6ff"}}>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={optimise} alt="content" className="h-auto max-w-[50%] justify-self-center vert-move" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Resume Optimization</h3>
          {/* <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2> */}
          <p class="leading-relaxed text-base">Our cutting-edge technology  analyses  your resume to ensure that it is optimized  for  ATS.  We  use  advanced  algorithms  to  identify  keywords  and  phrases  that  are most relevant to your target job and make sure that your resume is structured in a way that is easy for ATS to read.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4" data-aos="fade-up">
        <div class=" p-6 rounded-lg grid" style={{ backgroundColor: "#eff6ff"}}>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={ats} alt="content" className="h-auto max-w-[50%] justify-self-center vert-move" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">ATS Compatibility</h3>
          {/* <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2> */}
          <p class="leading-relaxed text-base">We  ensure  that  your  resume  is  compatible  with  all  major  ATS  systems used by employers. This  means that your resume  will  be easily  searchable and accessible  by recruiters and hiring managers, increasing your chances of getting noticed.</p>
        </div>
      </div>
      <div class="xl:w-1/3 md:w-1/2 p-4 "data-aos="fade-left">
        <div class=" p-6 rounded-lg grid" style={{ backgroundColor: "#eff6ff"}}>
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={custom} alt="content" className="h-auto max-w-[50%] justify-self-center vert-move" />
          <h3 class="tracking-widest text-indigo-500 text-xs font-medium title-font">Customization</h3>
          {/* <h2 class="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2> */}
          <p class="leading-relaxed text-base">We provide personalized services to tailor your resume to the specific job you are  applying  for.  Our  team  of  expert  resume  writers  will  work  with  you  to  highlight  your strengths and accomplishments in a way that resonates with potential employers.</p>
        </div>
      </div>
      </div>
    </div>
  
</section>
  );
};

export default Service;
