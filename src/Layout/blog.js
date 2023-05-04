// import { useCallback, useState } from "react";
import BlogBox from "../Components/blog/blog-box";
import BlogHeading from "../Components/blog/blog-heading";
import Section from "../Components/section";
import image1 from "./../images/blog.jpg";

const Blog = () => {
  const blogArr = [
    {
      heading: "'Infusion of technology in Hiring process'",
      subHeading: "Explanation of why you didnt get a call back!",
      link: "",
      image: <img src={image1} alt="example" className="" />,
    },
    {
      heading: "Applicant Tracking System",
      subHeading: "Its working and how it has changed the picture.",
      link: "",
      image: <img src={image1} alt="example" className="" />,
    },
    {
      heading: "Importance of Amount of Data in a resume",
      subHeading: "Need for Optimization!",
      link: "",
      image: <img src={image1} alt="example" className="" />,
    },
    {
      heading: "What does a hiring manager look for in a resume?",
      subHeading: "",
      link: "",
      image: <img src={image1} alt="example" className="" />,
    },
    {
      heading: "Pros and Cons of building and designing a resume.",
      subHeading: "",
      link: "",
      image: <img src={image1} alt="example" className="" />,
    },
  ];

  return (
    <div className="bg-blue-50" id="blogs">
      {/* // <div className="backpink" id="blogs"> */}
      <Section classname={"py-10 pt-20"}>
        <BlogHeading />
        <div className="scrollbar scrollbar-h-1 scrollbar-rounded-full scrollbar-track-slate-300 scrollbar-corner-rounded-full  scrollbar-thumb-blue-600 pb-10 select-none my-4">
          <div className="flex gap-7">
            {blogArr.map(({ heading, subHeading, link, image }, i) => (
              <BlogBox
                key={i}
                heading={heading}
                subHeading={subHeading}
                image={image}
                link={link}
              />
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Blog;
