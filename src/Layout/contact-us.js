import ContactUsForm from "../Components/contact-us/contact-us-form";
import ContactUsHeading from "../Components/contact-us/contact-us-heading";
import Section from "../Components/section";

const ContactUs = () => {
  return (
    <div id="contact">
      <Section>
        <div className="flex flex-col gap-7  w-full py-14 lg:flex-row lg:gap-60 items-center">
          <ContactUsHeading />
          <ContactUsForm />
        </div>
      </Section>
    </div>
  );
};

export default ContactUs;
