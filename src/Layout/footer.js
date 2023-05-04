import Section from "../Components/section";
import SocialLinks from "../Components/footer/social-link";
import FooterInfoLink from "../Components/footer/footer-info-link";

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
    <div className=" text-white py-8 backfooter1">
      <Section classname="py-8">
        <div className="row ">
          <h5 className="head2"> Create a Resume</h5>
        </div>
        <hr></hr>
        <div className="row py-5">
          <SocialLinks />
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6 text-center">
            <FooterInfoLink
              title={jobSeeker.title}
              subTitle={jobSeeker.subTitle}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center">
            <FooterInfoLink
              title={careerResources.title}
              subTitle={careerResources.subTitle}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center">
            <FooterInfoLink
              title={ourCompany.title}
              subTitle={ourCompany.subTitle}
            />
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6 text-center">
            <FooterInfoLink title={support.title} subTitle={support.subTitle} />
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Footer;
