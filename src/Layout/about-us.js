import AboutUsSection from "../Components/about-us-section";
import Section from "../Components/section";
import ServiceBox from "./service-box";

const AboutUs = () => {
  return (
    <div>
      <Section classname={"relative pt-8 lg:flex lg:p-0"}>
        <ServiceBox />
        <AboutUsSection />
      </Section>
    </div>
  );
};

export default AboutUs;
