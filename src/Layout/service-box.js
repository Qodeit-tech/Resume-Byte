import Service from "../Components/service/service";
import optimise from "../images/image-removebg-preview (2).png";
import ats from "../images/ats.jpg";
import custom from "../images/custom.jpg";
const ServiceBox = () => {
  const serviceContent = [
    {
      image: optimise,
      title: "Resume Optimization",
      info: "Our cutting-edge technology  analyses  your resume to ensure that it is optimized  for  ATS.  We  use  advanced  algorithms  to  identify  keywords  and  phrases  that  are most relevant to your target job and make sure that your resume is structured in a way that is easy for ATS to read.",
      // color: "bg-[#0674fd]",
      color: "bg-white",
    },
    {
      image: ats,
      title: "ATS Compatibility",
      info: "We  ensure  that  your  resume  is  compatible  with  all  major  ATS  systems used by employers. This  means that your resume  will  be easily  searchable and accessible  by recruiters and hiring managers, increasing your chances of getting noticed.",
      // color: "bg-[#7bcf0c]",
      color: "bg-white",
    },
    {
      image: custom,
      title: "Customization",
      info: "We provide personalized services to tailor your resume to the specific job you are  applying  for.  Our  team  of  expert  resume  writers  will  work  with  you  to  highlight  your strengths and accomplishments in a way that resonates with potential employers.",
      color: "bg-white",
      // color: "bg-[#111111]",
    },
  ];

  return (
    <div
      className=" relative flex flex-col gap-2  justify-self-center lg:flex-row  lg:gap-5 lg:absolute lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2  items-center transition-all"
      id="services"
    >
      {serviceContent.map(({ image, title, info, color }, i) => (
        <Service
          key={i}
          image={image}
          title={title}
          info={info}
          color={color}
        />
      ))}
    </div>
  );
};

export default ServiceBox;
