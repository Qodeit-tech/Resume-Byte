import Section from "../Components/section";
import TestimonialsHeading from "../Components/testimonials/testimonials-heading";
import TestimonialsSection from "../Components/testimonials/testimonials-section";

const Testimonials = () => {
  return (
    <div>
      <Section classname={'py-10'}>
        <TestimonialsHeading />
        <TestimonialsSection />
      </Section>
    </div>
  );
};

export default Testimonials;
