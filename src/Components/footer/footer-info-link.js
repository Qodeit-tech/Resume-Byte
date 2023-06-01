const FooterInfoLink = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <p>{title}</p>
      <div className="flex flex-col gap-1">
        {subTitle.map((linkTitle, i) => (
          <a key={i} href="https://google.com"   className="text-white text-decoration-none">
            {linkTitle}   
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterInfoLink;
