const Section = ({ children, classname = "" }) => {
  return <div className={"mx-[6%] xl:mx-[15%]  " + classname}>{children}</div>;
};

export default Section;
