// import { FaInstagram } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// // import { FaTwitter } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";

// const SocialLinks = () => {
//   const socialMediaHandlers = [
//     {
//       link: "",
//       logo: <FaInstagram />,
//     },
//     {
//       link: "",
//       logo: <FaTwitter />,
//     },
//     {
//       link: "",
//       logo: <FaYoutube/>,
//     },
//     {
//       link: "",
//       logo: <FaLinkedin />,
//     },
//     {
//       link: "",
//       logo: <FaGithub/>,
//     },
//   ];
//   return (
//     <div className="flex flex-col gap-3 items-center ">
//       <p className="text-lg font-medium">Connect with us on social media</p>
//       <div className="flex gap-4">
//         {socialMediaHandlers.map(({ link, logo }, i) => (
//           <a
//             href={link} key={i}
//             className="grid place-items-center w-10 h-10 rounded-full bg-[#333333] text-white"
//           >
//             {logo}
//           </a>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SocialLinks;

import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SocialLinks = () => {
  const socialMediaHandlers = [
    {
      link: "",
      logo: <FaInstagram />,
    },
    {
      link: "",
      logo: <FaTwitter />,
    },
    {
      link: "",
      logo: <FaYoutube />,
    },
    {
      link: "",
      logo: <FaLinkedin />,
    },
    {
      link: "",
      logo: <FaGithub />,
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "3px",
        alignItems: "center",
      }}
    >
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        Connect with us on social media
      </p>
      <div style={{ display: "flex", gap: "15px" }}>
        {socialMediaHandlers.map(({ link, logo }, i) => (
          <a
            href={link}
            key={i}
            style={{
              display: "grid",
              placeItems: "center",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#333333",
              color: "white ",
              transition: "background-color 0.5s ease, box-shadow 0.5s ease",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#2464F7";
              e.target.style.boxShadow = "0 0 10px white";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#333333";
              e.target.style.boxShadow = "none";
            }}
          >
            {logo}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;
