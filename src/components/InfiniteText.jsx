import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

function InfiniteText() {
  gsap.registerPlugin(useGSAP);
  const InfiniteTextContainer = useRef(null)
  useGSAP(() => {
    gsap.to(InfiniteTextContainer.current.querySelectorAll('.left-scroll'), {
      x: 1000,
      duration: 8,
      ease: "linear",
      repeat: -1,
    });
    gsap.to(InfiniteTextContainer.current.querySelectorAll('.right-scroll'), {
      x: -1000,
      duration: 10,
      ease: "linear",
      repeat: -1,
    });
  });

  return (
    <div ref={InfiniteTextContainer} className="infinite-text-container">
      <div className="text-line-1 flex flex-nowrap left-scroll">
        <span>TECHNOLOGY</span>-<span>SPORT</span>-<span>FASHION</span>-
        <span>TECHNOLOGY</span>-<span>SPORT</span>-<span>FASHION</span>-
        <span>TECHNOLOGY</span>-<span>SPORT</span>-<span>FASHION</span>-
      </div>
      <div className="text-line-2 flex flex-nowrap text-nowrap right-scroll">
        <span>ARCHITECTURE</span>-<span>BEAUTY</span>-<span>REAL ESTATE</span>-
        <span>ARCHITECTURE</span>-<span>BEAUTY</span>-<span>REAL ESTATE</span>-
        <span>ARCHITECTURE</span>-<span>BEAUTY</span>-<span>REAL ESTATE</span>-
      </div>
      <div className="text-line-3 flex flex-nowrap left-scroll">
        <span>TECHNOLOGY</span>-<span>SPORT</span>-<span>FASHION</span>-
        <span>TECHNOLOGY</span>-<span>SPORT</span>-<span>FASHION</span>-
        <span>TECHNOLOGY</span>-<span>SPORT</span>-<span>FASHION</span>-
      </div>
      <div className="text-line-4 flex flex-nowrap right-scroll">
        <span>TECHNOLOGY</span>-<span>SPORT</span>-<span>FASHION</span>-
        <span>TECHNOLOGY</span>-<span>SPORT</span>-<span>FASHION</span>-
        <span>TECHNOLOGY</span>-<span>SPORT</span>-<span>FASHION</span>-
      </div>
    </div>
  );
}

export default InfiniteText;
