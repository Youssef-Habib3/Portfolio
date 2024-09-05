import { FaGithub, FaReact, FaSass, FaCss3 } from "react-icons/fa";
import { BsGit } from "react-icons/bs";
import { SiRedux, SiNextdotjs, SiPug } from "react-icons/si";
import { TbBrandTypescript, TbBrandTailwind } from "react-icons/tb";
import { DiJavascript1 } from "react-icons/di";
import { AiFillHtml5 } from "react-icons/ai";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ReactNode } from "react";

interface SkillsList {
  icon: ReactNode;
  name: string;
}

const Skills: React.FC = () => {
  const skills = {
    title: "My Skills" as string,
    description: "" as string,

    skillsList: [
      {
        icon: <AiFillHtml5 />,
        name: "HTML 5",
      },
      {
        icon: <FaCss3 />,
        name: "CSS 3",
      },
      {
        icon: <DiJavascript1 />,
        name: "Javascript",
      },
      {
        icon: <SiPug />,
        name: "Pug",
      },
      {
        icon: <FaSass />,
        name: "Sass",
      },
      {
        icon: <TbBrandTailwind />,
        name: "Tailwind",
      },
      {
        icon: <TbBrandTypescript />,
        name: "Typescript",
      },
      {
        icon: <FaReact />,
        name: "React",
      },
      {
        icon: <SiNextdotjs />,
        name: "Next",
      },
      {
        icon: <SiRedux />,
        name: "Redux",
      },
      {
        icon: <BsGit />,
        name: "Git",
      },
      {
        icon: <FaGithub />,
        name: "GitHub",
      },
    ] as SkillsList[],
  };

  return (
    <div className="flex flex-col text-center lg:text-left gap-5">
      <h3 className="text-4xl font-bold">{skills.title}</h3>

      <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
        {skills.description}
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-7 gap-4">
        {skills.skillsList.map((skill, index) => (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <div className="text-5xl group-hover:text-accent transition-all duration-300">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="capitalize">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
