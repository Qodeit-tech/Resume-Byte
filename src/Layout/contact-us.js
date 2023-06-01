import ContactUsForm from "../Components/contact-us/contact-us-form";
import ContactUsHeading from "../Components/contact-us/contact-us-heading";
import Section from "../Components/section";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <div id="contact">
      <Section>
        <div className="flex flex-col items-center w-full gap-7 py-14 lg:flex-row lg:gap-60">
          <ContactUsHeading  data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
          <ContactUsForm  data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine"/>
        </div>
      </Section>
    </div>
  );
};

export default ContactUs;
