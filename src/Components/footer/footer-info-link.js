const FooterInfoLink = ({ title, subTitle }) => {
  return (
    <div className="flex flex-col gap-2 ">
      <p>{title}</p>
      <div className="flex flex-col gap-1">
        {subTitle.map((linkTitle, i) => (
          <a key={i} href="https://google.com">
            {linkTitle}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterInfoLink;
