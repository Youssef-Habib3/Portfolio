"use client";

import { CgMenuRightAlt } from "react-icons/cg";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import Link from "next/link";

interface Links {
  name: string;
  path: string;
}

const MobileNav: React.FC = () => {
  const links: Links[] = [
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
    <Sheet>
      <SheetTrigger>
        <CgMenuRightAlt className="text-4xl text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="my-28 text-center text-3xl">
          <h1>
            Joe<span className="text-accent">.</span>
          </h1>
        </div>

        {/* Nav */}
        <nav className="flex flex-col justify-center items-center">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className={`${
                link.path === pathName && "text-accent border-b-2 border-accent"
              } capitalize text-xl hover:text-accent transition-all mt-4`}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
