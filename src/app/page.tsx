"use client";

import { HiOutlineDownload } from "react-icons/hi";
import Link from "next/link";
import { Button } from "../components/ui/button";
import Links from "../components/home-components/Links";
import HomePhoto from "../components/home-components/HomePhoto";
import Stats from "../components/home-components/Stats";

const Home: React.FC = () => {
  return (
    <main>
      <div className="container mx-auto flex justify-between items-center flex-col lg:flex-row">
        <div className="content order-2 lg:order-none text-center lg:text-left select-none">
          {/* Career Name */}
          <h2>Front-End Developer</h2>

          {/* My Name */}
          <h1 className="text-4xl font-bold mb-3">
            Hello I`m
            <br />
            <span className="text-accent">Youssef Habib</span>
          </h1>

          {/* About Me */}
          <p className="max-w-[90%] lg:mx-0 mx-auto">
            I am a passionate Frontend Developer skilled in HTML, CSS,
            JavaScript, and modern frameworks like React. I specialize in
            creating responsive, user-friendly web applications with a focus on
            design and accessibility. I thrive in collaborative environments,
            working closely with cross-functional teams to deliver high-quality
            solutions. Constantly learning and adapting to new technologies, I
            am dedicated to producing impactful and innovative frontend
            experiences.
          </p>

          {/* Download Button */}
          <div className="link-container flex flex-col lg:flex-row justify-center lg:justify-between items-center lg:w-[80%] gap-4 mt-4">
            <Link target="_blank" href="Youssef-Habib_front-end.pdf">
              <Button
                variant="outline"
                className="uppercase flex justify-center items-center gap-2"
              >
                Download CV <HiOutlineDownload />
              </Button>
            </Link>

            {/* Links */}
            <div className="links flex justify-center items-center gap-4 pb-4 lg:pb-0">
              <Links />
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="image order-1 lg:order-none">
          <HomePhoto />
        </div>
      </div>

      <Stats />
    </main>
  );
};

export default Home;
