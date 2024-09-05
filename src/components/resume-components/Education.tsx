import { ScrollArea } from "@/components/ui/scroll-area";

interface Descriptions {
  desc: string;
}

interface Items {
  institution: string;
  degree: string;
  duration: string;
}

const Education: React.FC = () => {
  const education = {
    title: "My Education" as string,
    descriptions: [
      { desc: "I got:" },
      { desc: "• ICDL form Edraak in ( June 2023 )" },
      {
        desc: "• Fundamentals Of Digital Marketing from Google in ( December 2023 )",
      },
      { desc: "• Introduction To Network form Edraak in ( June 2023 )" },
      { desc: "• HTML, CSS, JS form M3aarf in ( March 2024 )" },
      { desc: "• BootStrap, DOM, React from Satr in ( April 2024 )" },
      { desc: "• Microsoft Office 365 form Edraak in ( June 2023 )" },
    ] as Descriptions[],

    items: [
      {
        institution: "Menoufia University",
        degree: "Bachelor of commerce",
        duration: "2022 - Now",
      },
      {
        institution: "Tuwaiq Academy(Satr)",
        degree: "Front-End",
        duration: "2022 - 2023",
      },
      {
        institution: "Youtube",
        degree: "Elzero, Net Ninja, ...",
        duration: "2022 - Now",
      },
    ] as Items[],
  };

  return (
    <div className="flex flex-col text-center lg:text-left gap-5">
      <h3 className="text-4xl font-bold">{education.title}</h3>

      <div className="max-w-[600px] text-white/60 mx-auto lg:mx-0">
        {education.descriptions.map((item, index) => (
          <p key={index}>{item.desc}</p>
        ))}
      </div>

      <ScrollArea className="h-[400px]">
        <ul className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {education.items.map((item, index) => (
            <li
              key={index}
              className="bg-[#232329] h-[184px] py-12 px-6 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
            >
              <span className="text-accent">{item.duration}</span>
              <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                {item.degree}
              </h3>
              <div className="flex items-center gap-3">
                {/* dot */}
                <span className="w-2 h-2 rounded-full bg-accent"></span>
                <p className="text-white/60">{item.institution}</p>
              </div>
            </li>
          ))}
        </ul>
      </ScrollArea>
    </div>
  );
};

export default Education;
