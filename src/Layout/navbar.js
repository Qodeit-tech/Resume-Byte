import Section from "../Components/section";
import { IoMdMenu } from "react-icons/io";
import { Fragment, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = ({ navbarDark }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const scrollTo = [
  //  "Home",
  //   "Services",
  //   "About",
  //   "Process",
  //   "Features",
  //   "Blogs",
  //   "Contact",
  ];
  const newPageLinks = [
    {
      anchorName:"Home",
      link:"/home",
    },
    {
      anchorName:"Services",
      link:"/services",
    },
    {
      anchorName:"About",
      link:'/about',

    },
    {
      anchorName:"Process",
      link:"/process",
    },
    {
      anchorName:"Features",
      link:'/features',
    },
    {
      anchorName:"Blogs",
      link:"/blogs",
    },
    {
      anchorName:"Contact",
      link:'/contact',
    },
    {
      anchorName: "Build Resume",
      link: "/build-resume",
    },
    
  ];

  return (
    <Fragment>
      <div
        // className={`bg-[#0e0f1f] fixed w-full top-0 z-50 text-white ${navbarDark ? "shadow-md" : ""
        //   } `}
        className={` min-h-[3rem] fixed w-full top-0 z-10000 whitebg ${
          navbarDark ? "shadow-md" : ""
        } `}
      >
        <div className="flex items-center justify-between px-5 lg:justify-between lg:py-22">
          <p className="font-semibold mt-[1rem] lg:w-1/4 text-left">Logo</p>

          <div
            className="block lg:hidden "
            onClick={() => {
              setNavbarOpen(!navbarOpen);
            }}
          >
            <IoMdMenu className="w-6 h-6" />
          </div>

          <div
            className={`hidden lg:flex lg:items-center gap-10 font-semibold ${
              navbarDark ? "" : "border-b-1 border-white-50"
            } py-3`}
          >
            {scrollTo.map((link, i) => (
              <Link
                className="px-2 py-1 hover:text-white no-underline hover:bg-[#1d4ed8] rounded-md duration-200"
                key={i}
                to={`/#${link.toLowerCase()}`}
              
              >
                {link}
              </Link>
            ))}
          </div>
          <div
            className={`hidden lg:flex lg:items-center gap-8 font-semibold ${
              navbarDark ? "" : "border-b-1 border-white-50"
            } py-3`}
          >
            {newPageLinks.map(({ link, anchorName }) => (
              <NavLink className={" bg-black-600 p-2 rounded-lg"} to={link}>
                {anchorName}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
      {/* Mobile view navbar */}
      <div
        className={`fixed top-0  ${
          navbarOpen ? "left-0" : "left-full"
        }   w-screen h-screen flex flex-col gap-6 p-5 items-center justify-center z-50 bg-blue-900 bg-opacity-60 text-white font-semibold text-lg backdrop-blur-lg transition-all`}
        onClick={() => setNavbarOpen(false)}
      >
        {scrollTo.map((link, i) => (
          <a
            key={i}
            href={`/#${link.toLowerCase()}`}
           
            className={`border-1 w-full text-center text-white p-2 rounded-md no-underline border-slate-700 border-opacity-60`}
          
          >
            {link}
          </a>
        ))}
        {newPageLinks.map(({ link, anchorName }) => {
          const classnames = `no-underline border-1 w-full text-center p-2 rounded-md border-slate-700 border-opacity-60`;
          return (
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? `${classnames} text-blue-900`
                  : classnames + " bg-blue-900"
              }
              to={link}
            >
              {anchorName}
            </NavLink>
          );
        })}
      </div>
    </Fragment>
  );
};

export default Navbar;
