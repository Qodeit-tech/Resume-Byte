const ContactUsForm = () => {
  const formInputClass = "outline-none shadow-[inset_0_0_0_1px_#cccccc] p-3"

  return <div className="w-full py-5">
    <form className="flex flex-col gap-2 py-2">
      <input type={'text'} placeholder={"Your name"} className={formInputClass}  />
      <input type={'text'} placeholder={"Your email address"} className={formInputClass} />
      <input type={'text'} placeholder={"subject"} className={formInputClass} />
      <textarea type={'text'} placeholder={"Your message"} className={`${formInputClass} resize-y`} />
      <button type="submit" className="w-full p-2 mt-8 font-semibold text-white bg-blue-600 rounded-sm">SEND MESSAGE</button>
    </form>
  </div>;
};

export default ContactUsForm;
