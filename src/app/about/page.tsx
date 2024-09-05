import Link from "next/link";

interface Location {
  name: string;
  value: string;
}

interface InfoItem {
  name: string;
  value: string;
  href: string;
  target: string;
}

interface AboutData {
  title: string;
  description: string;
  location: Location;
  info: InfoItem[];
}

const About: React.FC = () => {
  const about: AboutData = {
    title: "About me",
    description: "Programming is my life",

    location: {
      name: "Location",
      value: "Markaz El Bagor, Al Minufiyah",
    },

    info: [
      {
        name: "Name",
        value: "Youssef Habib",
        href: "",
        target: "",
      },
      {
        name: "Phone",
        value: "(+20) 1092554811",
        href: "tel:+201092554811",
        target: "_blank",
      },
      {
        name: "Phone",
        value: "(+20) 1111938404",
        href: "tel:+201111938404",
        target: "_blank",
      },
      {
        name: "Gmail",
        value: "yousefhabibelsehamy33@gmail.com",
        href: "mailto:yousefhabibelsehamy33@gmail.com",
        target: "_blank",
      },
      {
        name: "Linked in",
        value: "Youssef-Habib3",
        href: "https://www.linkedin.com/in/Youssef-Habib3",
        target: "_blank",
      },
      {
        name: "GitHub",
        value: "Youssef-Habib3",
        href: "https://github.com/Youssef-Habib3",
        target: "_blank",
      },
      {
        name: "Youtube",
        value: "Youssef Habib",
        href: "https://www.youtube.com/@EL_PHAROAH_Coding",
        target: "_blank",
      },
      {
        name: "Languages",
        value: "Arabic, English, German",
        href: "",
        target: "",
      },
    ],
  };

  return (
    <div className="flex flex-col justify-center h-[80vh] items-center text-center xl:text-left gap-5">
      <h3 className="text-4xl font-bold">{about.title}</h3>

      <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
        {about.description}
      </p>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[600px] mx-auto xl:mx-0">
        {about.info.map((item, index) => (
          <li
            key={index}
            className="flex items-center justify-center xl:justify-start gap:4"
          >
            <span className="text-white/60 mr-2">{item.name}</span>
            <Link href={item.href} target={item.target}>
              <span className="overflow-hidden">{item.value}</span>
            </Link>
          </li>
        ))}
      </div>

      <p>
        {about.location.name}:{" "}
        <span className="text-accent">{about.location.value}</span>
      </p>
    </div>
  );
};

export default About;
