import { AiFillStar } from "react-icons/ai";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import Review from "./review";

const TestimonialsSection = () => {
  const reviews = [
    {
      heading: "",
      rating: 5,
      user: "Haggrit",
      review:
        "I have used several resume builders in the past, but this website is by far the best. The customization options are endless, allowing me to tailor my resume to fit any job application. The process of resume building is really easy and it doesn't feel like I am building a resume!",
    },
    {
      heading: "",
      rating: 5,
      user: "Snape",
      review:
        "I was initially hesitant to use a resume builder, but this website exceeded my expectations and it made the work so easy with its interactive user interface. The templates are visually appealing and showcase my skills and experience in the best light possible. I am so glad I found this website!",
    },
    {
      heading: "",
      rating: 5,
      user: "Dumbledore",
      review:
        "I cannot recommend this resume builder enough. The website is easy to navigate and the templates are customizable and professional.The best feature I found was 'ATS compatibility' which not only made an optimized resume but helped me land my dream job. This website is a game-changer for anyone looking to elevate their job search.",
    },
    {
      heading: "",
      rating: 5,
      user: "Dorby",
      review:
        "Resume Byte has truly transformed my job search. The website is intuitive and straightforward, and the templates are top-notch. It not only creates a new resume but also provides an option to optimize your existing resume. I recommend this website to everyone who is a job seeker and is really serious about the same.",
    },
    {
      heading: "",
      rating: 5,
      user: "Voldy",
      review:
        "I was really struggling to put together a strong and compelling resume, but this website made it so easy! The step-by-step process and helpful tips and suggestions really guided me through the process and helped me highlight my skills and accomplishments.",
    },
  ];
  const avgRating = 4;
  return (
    <div>
      <div className="flex justify-between gap-8 flex-col lg:flex-row">
        <div className="flex flex-col gap-2 lg:gap-6 items-center lg:items-start">
          <div className="flex flex-col gap-1 items-center lg:items-start">
            <p className="text-xl font-medium">{`${avgRating} out of 5`}</p>
            <div className="flex gap-0">
              {new Array(avgRating).fill("").map((_, i) => (
                <AiFillStar key={i} className={"text-blue-500 h-8 w-8"} />
              ))}
              {!!(5 - avgRating) &&
                new Array(5 - avgRating)
                  .fill("")
                  .map((_, i) => (
                    <AiFillStar className="text-slate-400 h-8 w-8" key={i} />
                  ))}
            </div>
          </div>
          <p className="text-xs text-slate-400">Based on 44,112 reviews</p>
        </div>
        <div className="flex flex-col gap-7 overflow-hidden">
          <div className="overflow-hidden pb-4 scrollbar scrollbar-h-1 scrollbar-rounded-full scrollbar-track-slate-300 scrollbar-corner-rounded-full  scrollbar-thumb-blue-500">
            <div className="flex gap-4">
              {reviews.map(({rating, user, review, heading}, i) => (
                <Review key={i} rating={rating} user={user} review={review} heading={heading} />
              ))}
            </div>
          </div>
          {/* <div className="h-[2px] w-full bg-slate-400 rounded-full"></div> */}
          {/* <div className="flex gap-4 items-center">
            <div className="flex gap-2">
              <div className="grid place-items-center w-10 h-10 bg-slate-200 rounded-full">
                <MdArrowBackIos className="ml-2 h-5 w-5 text-slate-500" />
              </div>
              <div className="grid place-items-center w-10 h-10 bg-slate-200 rounded-full">
                <MdArrowForwardIos className="ml-0.5 h-5 w-5 text-slate-500" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
