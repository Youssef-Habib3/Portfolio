"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavLink {
  name: string;
  path: string;
}

const DesktopNav: React.FC = () => {
  const links: NavLink[] = [
    {
      name: "home",
      path: "/",
    },
    {
      name: "resume",
      path: "/resume",
    },
    {
      name: "work",
      path: "/work",
    },
    {
      name: "about",
      path: "/about",
    },
  ];

  const pathName = usePathname();

  return (
    <nav>
      {links.map((link, index) => (
        <Link
          className={`${
            link.path === pathName && "text-accent border-b-2 border-accent"
          } px-4 capitalize font-medium hover:text-accent transition-all`}
          key={index}
          href={link.path}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default DesktopNav;
