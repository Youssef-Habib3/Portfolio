import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import { Button } from "../ui/button";

const Header: React.FC = () => {
  return (
    <header className="py-3 text-white">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-3xl font-semibold">
          <h1>
            Joe<span className="text-accent">.</span>
          </h1>
        </Link>

        <div className="hidden lg:flex justify-center items-center">
          <DesktopNav />

          <Link href="/about" className="ml-3">
            <Button>Hire Me</Button>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
