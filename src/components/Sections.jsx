import Section1 from "./sections/Section1";
import Section2 from "./sections/Section2";
import { useRef } from "react";
import gsap from "gsap/gsap-core";
import ScrollTrigger from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

function Sections() {
  const containerr = useRef();
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const locoScroll = new LocomotiveScroll({
      el: containerr.current,
      smooth: true,

      // for tablet smooth
      tablet: { smooth: true },

      // for mobile
      smartphone: { smooth: true },
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy(containerr.current, {
      scrollTop(value) {
        return arguments.length
          ? locoScroll.scrollTo(value, 0, 0)
          : locoScroll.scroll.instance.scroll.y;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight,
        };
      },
    });
  });

  return (
    <div
      ref={containerr}
      data-scroll
      className="absolute w-full pt-48 bg-inherit h-min-screen"
      id="sections"
    >
      <Section1 />
      <Section2 />
    </div>
  );
}

export default Sections;
