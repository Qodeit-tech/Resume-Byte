const ContactUsForm = () => {
  const formInputClass = "outline-none shadow-[inset_0_0_0_1px_#cccccc] p-3"

  return <div className="w-full">
    <form className="flex flex-col gap-2">
      <input type={'text'} placeholder={"Your name"} className={formInputClass}  />
      <input type={'text'} placeholder={"Your email address"} className={formInputClass} />
      <input type={'text'} placeholder={"subject"} className={formInputClass} />
      <textarea type={'text'} placeholder={"Your message"} className={`${formInputClass} resize-y`} />
      <button type="submit" className="mt-8 w-full p-2 bg-blue-600 font-semibold rounded-sm text-white">SEND MESSAGE</button>
    </form>
  </div>;
};

export default ContactUsForm;
