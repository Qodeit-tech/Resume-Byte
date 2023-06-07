// // import natureImg from "./images/nature.jpg";
// import resume1 from "./images/resume1.jpeg";
// import resume2 from "./images/resume2.jpg";
// import resume3 from "./images/resume3.jpg";
// import Navbar from "./Layout/navbar";
// import AboutUs from "./Layout/about-us";
// import Process from "./Layout/process";
// import Templates from "./Layout/templates";
// import Blog from "./Layout/blog";
// import Testimonials from "./Layout/testimonials";
// import ResumeShortlistedBy from "./Layout/resume-shortlisted-by";
// import ContactUs from "./Layout/contact-us";
// import Footer from "./Layout/footer";
// import HomeCarousel from "./Layout/home-carousel";
// import { Fragment, useState } from "react";
// import { Route, Routes } from "react-router";
// import CreateResume from "./Layout/create-resume";
// import BuildResume from "./Components/body/body";

// function App() {
//   const [navbarDark, setNavbarDark] = useState(true);
//   const carouselData = [
//     {
//       heading:
//         "'98% of Fortune 500 companies use Applicant Tracking System (ATS) to filter resumes.'",
//       headingBy: "Job scan",
//       image: resume1,
//       imgName: "resume1-img",
//     },
//     {
//       heading:
//         "'Hiring Manager spends an average of only 7.4 seconds reviewing a resume'",
//       headingBy: "Forbes",
//       image: resume2,
//       imgName: "resume2-img",
//     },
//     {
//       heading:
//         "'On an average, 75% of resumes are rejected by Application Tracking System (ATS) before ever- reaching the hands of hiring managers.'",
//       headingBy: "Forbes",
//       image: resume3,
//       imgName: "resume3-img",
//     },
//   ];
//   // font-sans
//   return (
//     <div className="App font-['Open_Sans'] relative">
//       <Navbar navbarDark={navbarDark} />
//       <Routes>
//         <Route
//           path="/"
//           element={
//             <Fragment>
//               <HomeCarousel data={carouselData} setNavbarDark={setNavbarDark} />
//               <AboutUs />
//               <Process />
//               <Templates />
//               <Blog />
//               <Testimonials />
//               <ResumeShortlistedBy />
//               <ContactUs />
//               <Footer />
//             </Fragment>
//           }
//         />
//         <Route path={"/create-resume"} element={<CreateResume />} />
//         <Route path={"/build-resume"} element={<BuildResume />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
import { useEffect } from "react";
import natureImg from "./images/nature.jpg";
import resume1 from "./images/resume1.jpeg";
import resume2 from "./images/resume2.jpg";
import resume3 from "./images/resume3.jpg";
import Nav from "./Layout/navbar";
import AboutUs from "./Layout/about-us";
import Process from "./Layout/process";
import Templates from "./Layout/templates";
import Blog from "./Layout/blog";
import Testimonials from "./Layout/testimonials";
import ResumeShortlistedBy from "./Layout/resume-shortlisted-by";
import ContactUs from "./Layout/contact-us";
import Footer from "./Layout/footer";
import HomeCarousel from "./Layout/home-carousel";
import { Fragment, useState } from "react";
import { Route, Routes } from "react-router";
import CreateResume from "./Layout/create-resume";
import BuildResume from "./Components/body/body";
import ProgressBar from "./Components/Editor/ProgressBar";
import NewEditor from "./Components/new-resume-builder/NewEditor";
import Download from "./Components/new-resume-builder/Download";
import SentPage from "./Components/pages/SentPage";
import Faq from "./Components/faq/Faq";
import Join from "./Components/Join/Join";
import ResumeEx from "./Components/ResumeExample/ResumeEx";
import Feature from "./Components/Features/Feature";
import Cvex from "./Components/CvEx/Cvex";
import Createcover from "./Components/createcover/Createcover";
import Guide from "./Components/guide/Guide";
import ServiceBox from "./Components/service/service";
import Loader from 'react-loader-spinner';
import { ThreeDots } from 'react-loader-spinner';
import {Grid} from "react-loader-spinner";
import TemplateSelectionPage from "./Components/new-resume-builder/TemplateSelectionPage";
function App() {
  // Hide the loader initially

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Change the delay time as needed

    return () => clearTimeout(timer);
  }, []);

  const [navbarDark, setNavbarDark] = useState(true);
  const [id, setId] = useState(true);
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

 
// alert('Refreshing');
// document.getElementsByClassName("dem").innerHTML = "hi";


  
  // font-sans
  return (
    <div className="App  font-['Open_Sans'] relative" >
    {/* <Grid
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="grid-loading"
  radius="12.5"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
/> */}
{/* <div className="items-center w-full h-full p-5 text-center container-fluid dem" style={{ display: loading ? "block" : "none" }}>
      <div className="container p-5">
      <h1 className="pt-5">Loading...</h1>
      <ThreeDots type="ThreeDots" color="#00BFFF" height={100} width={100} />
      </div>
    </div>  */}
  

      <Nav navbarDark={navbarDark} className='pb-5'/>

      {/* <Download></Download> */}
      <Routes>
        <Route services
          path="/"
          element={
            <Fragment>
              <HomeCarousel
                data={carouselData}
                setNavbarDark={setNavbarDark}
              ></HomeCarousel>
              {/* <Testimonials />
              
              <ServiceBox/>
              
              <AboutUs />
              <Guide />

              <Templates />

              <ResumeShortlistedBy />
              <Createcover />
              <Cvex />
              <Feature />
              <ResumeEx />
              <Process />
              
              <Blog />
              <Faq />
              <Join />
              <ContactUs /> */}
             
            </Fragment>
          }
        />
        <Route path={"/home"} element={<HomeCarousel />} />
        <Route path={"/services"} element={<ServiceBox />} />
        <Route path={"/about"} element={<AboutUs/>}/>
        <Route path={"/process"} element={<Process/>}/>
        <Route path={"/create-resume"} element={<CreateResume />} />
       <Route path={"/features"} element={<Feature/>}/>
       <Route path={"/blogs"} element={<Blog/>}/>
       <Route path={"/contact"} element={<ContactUs/>}/>
       <Route path={"/templateselection"} element={<TemplateSelectionPage/>}/>
        <Route
          path={"/build-resume"}
          element={
            <>
              <NewEditor set={setId} />
            </>
          }
        />
        <Route
          path={"/download"}
          element={
            <>
              <Download id={id}></Download>
            </>
          }
        />
        <Route
          path={"/success"}
          element={
            <>
              <SentPage></SentPage>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
