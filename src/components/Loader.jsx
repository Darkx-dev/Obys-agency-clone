import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
function Loader() {
  const loaderMain = useRef([]);
  const loaderCounter = useRef();
  useGSAP(() => {
    let count = 0;
    const tl = gsap.timeline();
    const h1Array = loaderMain.current.querySelectorAll(".line");
    tl.from(h1Array, {
      y: 200,
      duration: 1,
      stagger: 0.3,
      ease: "sin.out",
    });

    tl.from(
      loaderCounter.current,
      {
        duration: 2,
        opacity: 0,
        onStart: () => {
          setInterval(() => {
            if (count <= 100) {
              loaderCounter.current.querySelector("span").textContent = count++;
            }
          }, 25);
        },
      },
      "-=1"
    );
  });
  return (
    <div
      className="bg-loaderBlack h-screen absolute flex justify-center items-center flex-col left-0 text-white right-0 text-8xl "
      id="loader"
    >
      <div className="loader-main" ref={loaderMain}>
        <div className="line-container">
          <div className="line flex gap-2" id="line1">
            <h1 className="counter" ref={loaderCounter}>
              <span>98</span> - 100
            </h1>
            <h1>YOUR</h1>
          </div>
        </div>
        <div className="line-container">
          <div className="line flex gap-2" id="line2">
            <h1>WEB</h1>
            <h1>EXPERIENCE</h1>
          </div>
        </div>
        <div className="line-container">
          <div className="line flex gap-2" id="line3">
            <h1>IS</h1>
            <h1>LOADING</h1>
            <h1>RIGHT</h1>
            <h1>NOW</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
