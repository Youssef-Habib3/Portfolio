"use client";

import CountUp from "react-countup";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { allPosts } from "@/app/store/features/postSlice";
import { RootState, AppDispatch } from "@/app/store/store";

interface Stats {
  num: number;
  text: string;
}

const Stats: React.FC = () => {
  const disPatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    disPatch(allPosts());
  }, [disPatch]);

  const stats: Stats[] = [
    {
      num: data.length - 1,
      text: "Projects Completed",
    },
    {
      num: 22,
      text: "Technologies mastered",
    },
  ];

  return (
    <footer className="pt-6 lg:pt-0">
      <div className="container mx-auto flex justify-center items-center gap-5 lg:gap-20 flex-wrap">
        {stats.map((stat, index) => (
          <div key={index} className="flex justify-center items-center gap-2">
            <CountUp
              end={stat.num}
              duration={5}
              delay={2}
              className="text-4xl lg:text-6xl font-extralight"
            />
            <p
              className={`${
                stat.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
              } leading-snug text-white/80`}
            >
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Stats;
