"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HomePhoto: React.FC = () => {
  return (
    <div className="w-full h-full relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { delay: 2, duration: 0.4, ease: "easeIn" },
        }}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2, duration: 0.4, ease: "easeIn" },
          }}
          className="w-[65%] h-[75%] lg:w-[260px] lg:h-[385px] absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%]"
        >
          <Image
            src="/imgs/my-photo.png"
            priority
            quality={100}
            fill
            alt="My Photo"
          />
        </motion.div>

        {/* Circle */}
        <motion.svg
          className="w-[257px] h-[307px] lg:w-[407px] lg:h-[507px] z-10 relative"
          fill="transparent"
          viewBox="0 0 506 506"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle
            cx="253"
            cy="253"
            r="250"
            stroke="#00ff99"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </motion.svg>
      </motion.div>
    </div>
  );
};

export default HomePhoto;
