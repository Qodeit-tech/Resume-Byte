const Heading = ({ shadowText, text, size, margin, classname="" }) => {
  // const shadowTextClass = `before:content-['${shadowText}']`;
  // const sizeClass = `before:text-${size}xl`;
  // const marginClass = `mb-${margin}`
  return (
    <>
      {/* ${sizeClass} ${shadowTextClass} ${margin}*/}
      <p
        className={`text-base inline-block relative mb-4 ${shadowText} ${size} ${margin} tracking-widest
         before:absolute before:opacity-25  before:font-bold before:top-0 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 text-blue-500 ${classname}`}
      >
        {text}
      </p>
    </>
  );
};

export default Heading;
