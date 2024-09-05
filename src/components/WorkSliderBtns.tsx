"use client";

import { RxCaretLeft } from "react-icons/rx";
import { RxCaretRight } from "react-icons/rx";
import { useSwiper } from "swiper/react";

interface workSliderBtns {
  containerStyles: string;
  btnStyles: string;
}

const WorkSliderBtns: React.FC<workSliderBtns> = ({
  containerStyles,
  btnStyles,
}) => {
  const swiper = useSwiper();

  return (
    <div className={containerStyles}>
      <button
        className={`rounded-tr-md rounded-br-md lg:rounded-none ${btnStyles}`}
        onClick={() => swiper.slidePrev()}
      >
        <RxCaretLeft />
      </button>

      <button
        className={`rounded-tl-md rounded-bl-md lg:rounded-none ${btnStyles}`}
        onClick={() => swiper.slideNext()}
      >
        <RxCaretRight />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
