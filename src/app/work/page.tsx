"use client";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import SwiperCore from "swiper";

interface Stack {
  name: string;
}

interface Project {
  num: string;
  category: string;
  title: string;
  description: string;
  stack: Stack[];
  image: string;
  live: string;
  github: string;
}

const Work: React.FC = () => {
  const projects: Project[] = [
    {
      num: "01",
      category: "Front-End",
      title: "Project 1",
      description: "CRUD App",

      stack: [
        {
          name: "Next",
        },
        {
          name: "Tailwind",
        },
        {
          name: "Motion",
        },
        {
          name: "Shadcn",
        },
        {
          name: "Redux",
        },
      ],
      image: "/imgs/crud.png",
      live: "https://crud-youssef-habib3.vercel.app/",
      github: "https://github.com/Youssef-Habib3/CRUD",
    },
    {
      num: "02",
      category: "Front-End",
      title: "Project 2",
      description: "Phone Store App",

      stack: [
        {
          name: "React",
        },
        {
          name: "TypeScript",
        },
        {
          name: "Tailwind",
        },
        {
          name: "Motion",
        },
        {
          name: "Shadcn",
        },
        {
          name: "Redux",
        },
      ],
      image: "/imgs/phone-store-app.png",
      live: "https://phone-store-app-youssef-habib3.vercel.app/",
      github: "https://github.com/Youssef-Habib3/Phone-Store-App",
    },
    {
      num: "03",
      category: "Front-End",
      title: "Project 3",
      description: "Weather App",

      stack: [
        {
          name: "Next",
        },
        {
          name: "TypeScript",
        },
        {
          name: "Tailwind",
        },
        {
          name: "Motion",
        },
      ],
      image: "/imgs/weather-app.png",
      live: "https://weather-app-youssef-habib3.vercel.app/",
      github: "https://github.com/Youssef-Habib3/Weather-App",
    },
    {
      num: "04",
      category: "Front-End",
      title: "Project 4",
      description: "To-Do-List App",
      stack: [
        {
          name: "Next",
        },
        {
          name: "Tailwind",
        },
        {
          name: "Motion",
        },
      ],
      image: "/imgs/to-do-list app.png",
      live: "https://to-do-list-youssef-habib3.vercel.app/",
      github: "https://github.com/Youssef-Habib3/To-Do-List-App",
    },
    {
      num: "05",
      category: "Front-End",
      title: "Project 5",
      description: "Quiz App",
      stack: [
        {
          name: "Next",
        },
        {
          name: "Tailwind",
        },
        {
          name: "Motion",
        },
        {
          name: "Shadcn",
        },
      ],
      image: "/imgs/quiz app.png",
      live: "https://quiz-app-youssef-habib3.vercel.app/",
      github: "https://github.com/Youssef-Habib3/Quiz-App",
    },
    {
      num: "06",
      category: "Front-End",
      title: "Project 6",
      description: "Generate-Password App",
      stack: [
        {
          name: "Next",
        },
        {
          name: "Tailwind",
        },
        {
          name: "Motion",
        },
        {
          name: "Shadcn",
        },
      ],
      image: "/imgs/generate-password app.png",
      live: "https://password-generator-youssef-habib3.vercel.app/",
      github: "https://github.com/Youssef-Habib3/Password-Generator",
    },
    {
      num: "07",
      category: "Front-End",
      title: "Project 7",
      description: "Hydra App",
      stack: [
        {
          name: "React",
        },
        {
          name: "TypeScript",
        },
        {
          name: "Tailwind",
        },
        {
          name: "Shadcn",
        },
      ],
      image: "/imgs/hydra-app.png",
      live: "https://hydra-app-youssef-habib3.vercel.app/",
      github: "https://github.com/Youssef-Habib3/Hydra-App",
    },
  ];

  const [project, setProject] = useState<Project>(projects[0]);

  const handelSlideChange = (swiper: SwiperCore) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update state
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        delay: 2.4,
        duration: 0.4,
        ease: "easeIn",
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 lg:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-7">
          {/* text */}
          <div className="w-full lg:w-[50%] lg:h-[440px] flex flex-col lg:justify-between order-2 lg:order-none">
            <div className="flex flex-col gap-7">
              <div className="text-8xl leading-none font-extrabold mt-8 lg:mt-0">
                {project.num}
              </div>

              <h2 className="text-3xl font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>

              <p className="text-white/60">{project.description}</p>

              {/* Project Technologies */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => (
                  <li className="text-xl text-accent" key={index}>
                    {item.name}
                    {/* remove the last comma */}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>

              {/* border */}
              <div className="border border-white/20"></div>

              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live */}
                <Link target="_blank" href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Go to page</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>

                {/* github */}
                <Link target="_blank" href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[60px] h-[60px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>

                      <TooltipContent>
                        <p>Go to GitHub</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* slider */}
          <div className="w-full lg:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              onSlideChange={handelSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20 rounded-md">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>

                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt="Image Slider"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}

              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-4xl w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
