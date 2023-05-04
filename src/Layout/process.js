import ProcessHeading from "../Components/process/process-heading";
import ProcessMain from "../Components/process/process-main";
import Section from "../Components/section";
import ProAcc from "../Components/process/ProAcc";
const Process = () => {
  return (
    <div className="bg-blue-50 " id="process">
      {/* <div className="bg-blue-50 backpink" id="process"> */}
      <Section classname={"py-6 "}>
        {/* <ProcessHeading /> */}
        {/* <ProcessMain /> */}
        <ProAcc />
      </Section>
    </div>
  );
};

export default Process;
