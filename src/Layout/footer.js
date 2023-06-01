import Section from "../Components/section";
import SocialLinks from "../Components/footer/social-link";
import FooterInfoLink from "../Components/footer/footer-info-link";
import {Link} from "react-router-dom";
const Footer = () => {
  const jobSeeker = {
    title: "JOB SEEKERS",
    subTitle: [
      "Create a Resume",
      "Create a Resume",
      "Create a Resume",
      "Cover Letter Templates",
    ],
  };

  const careerResources = {
    title: "CAREER RESOURCES",
    subTitle: [
      "Create a Resume",
      "Create a Resume",
      "Create a Resume",
      "Cover Letter Templates",
    ],
  };

  const ourCompany = {
    title: "OUR COMPANY",
    subTitle: [
      "Create a Resume",
      "Create a Resume",
      "Create a Resume",
      "Cover Letter Templates",
    ],
  };
  const support = {
    title: "SUPPORT",
    subTitle: [
      "Create a Resume",
      "Create a Resume",
      "Create a Resume",
      "Cover Letter Templates",
    ],
  };

  /* background-color: #333;
opacity: 0.9;
background-image: radial-gradient(#3f3f3f 0.8px, #333 0.8px);
background-size: 16px 16px; */

  return (
    <div className="py-8 text-white  backfooter1">
      <Section classname="py-8">
        <div className="row ">
          <h5 className="head2"><Link to="/build-resume" className="text-white text-decoration-none"> Create a Resume</Link></h5>
        </div>
        <hr></hr>
        <div className="py-5 row">
          <SocialLinks />
        </div>
        <div className="row">
          <div className="text-center col-lg-3 col-md-6 col-sm-6 text-white text-decoration-none">
            <FooterInfoLink
              title={jobSeeker.title}
              subTitle={jobSeeker.subTitle}
            />
          </div>
          <div className="text-center col-lg-3 col-md-6 col-sm-6 text-white text-decoration-none">
            <FooterInfoLink
          
              title={careerResources.title}
              subTitle={careerResources.subTitle}
            />
          </div>
          <div className="text-center col-lg-3 col-md-6 col-sm-6 text-white text-decoration-none">
            <FooterInfoLink
              title={ourCompany.title}
              subTitle={ourCompany.subTitle}
            />
          </div>
          <div className="text-center col-lg-3 col-md-6 col-sm-6 text-white text-decoration-none">
            <FooterInfoLink title={support.title} subTitle={support.subTitle} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
