import { MdEmail } from "react-icons/md";
import { AiFillYoutube } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { DiGithubBadge } from "react-icons/di";
import Link from "next/link";
import { ReactNode } from "react";

interface Links {
  icon: ReactNode;
  path: string;
}

const Links: React.FC = () => {
  const links: Links[] = [
    {
      icon: <DiGithubBadge />,
      path: "https://github.com/Youssef-Habib3",
    },
    {
      icon: <FaLinkedinIn />,
      path: "https://www.linkedin.com/in/youssef-habib3/",
    },
    {
      icon: <AiFillYoutube />,
      path: "https://www.youtube.com/@EL_PHAROAH_Coding",
    },
    {
      icon: <MdEmail />,
      path: "mailto:yousefhabibelsehamy33@gmail.com",
    },
  ];

  return links.map((link, index) => (
    <Link
      key={index}
      href={link.path}
      className="border border-accent rounded-full p-2 text-accent hover:text-white hover:border-white transition-all"
    >
      {link.icon}
    </Link>
  ));
};

export default Links;
