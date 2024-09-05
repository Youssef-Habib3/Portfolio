import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ExtraSkillsList {
  name: string;
}

const ExtraSkills: React.FC = () => {
  const extraSkills = {
    title: "Extra Skills" as string,
    description: "" as string,

    extraSkillsList: [
      {
        name: "CS50",
      },
      {
        name: "Python",
      },
      {
        name: "C",
      },
      {
        name: "c++",
      },
      {
        name: "CompTIA A+",
      },
      {
        name: "CompTIA Network+",
      },
      {
        name: "CCNA",
      },
      {
        name: "MCSA",
      },
      {
        name: "CompTIA Security+",
      },
      {
        name: "Problem Solving",
      },
    ] as ExtraSkillsList[],
  };

  return (
    <div className="flex flex-col text-center lg:text-left gap-5">
      <h3 className="text-4xl font-bold">{extraSkills.title}</h3>

      <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
        {extraSkills.description}
      </p>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:gap-7 gap-4">
        {extraSkills.extraSkillsList.map((skill, index) => (
          <li key={index}>
            <TooltipProvider delayDuration={100}>
              <Tooltip>
                <TooltipTrigger className="w-full h-[100px] bg-[#232329] rounded-xl flex justify-center items-center group">
                  <p className="capitalize">{skill.name}</p>
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

export default ExtraSkills;
