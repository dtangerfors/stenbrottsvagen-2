import React, { useRef, useEffect, useState } from "react";

import bgImage from "../../../images/cover-garden.webp";
import Weather from "../../weather";

const Hero = () => {
  const heroRef = useRef<HTMLHeadingElement | null>(null);
  const [blurValue, setBlurValue] = useState(0);

  // scroll event handler
  const handleScroll = () => {
    const elem: any = heroRef.current;
    const scrolled = document.documentElement.scrollTop;

    setBlurValue(scrolled / 15)
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="relative h-[47rem] pt-40 pb-20 z-[2]" ref={heroRef}>
      <div className="absolute w-full h-full inset-0">
        <div className="absolute bottom-0 h-full w-full" style={{backdropFilter:`blur(${blurValue}px)`, WebkitBackdropFilter:`blur(${blurValue}px)`}}></div>
      </div>
      <div className="relative z-10 flex flex-col items-center">
        <h1 className="text-heading text-white font-semibold">
          Stenbrottsvägen
        </h1>
      </div>
      <div className="sticky top-40 mt-6 z-10 flex flex-col items-center">
        <div className="">
          <Weather lon="19.039444" lat="57.855" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
