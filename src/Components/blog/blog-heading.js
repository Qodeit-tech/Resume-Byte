import BlueDash from "../blue-dash";
import Heading from "../heading";

const BlogHeading = () => {
  return (
    <div className="flex flex-col items-center gap-2 py-5 text-center ">
      <Heading
        text={"OUR BLOGS"}
        shadowText="before:content-['Our_Blogs']"
        // shadowText="Process"
        size=" before:text-6xl lg:before:text-8xl"
        margin="mb-10"
        classname="before:whitespace-nowrap"
      />
      <p className="text-2xl font-semibold lg:text-5xl">Learn more from our blog</p>
      <BlueDash marginY="my-5" />
      <p>
        Browse our HTML5 responsive agency template below. Quisque lorem tortor
        fringilla sed, vestibulum id.
      </p>
    </div>
  );
};

export default BlogHeading;
