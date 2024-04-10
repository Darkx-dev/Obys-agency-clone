import gsap from "gsap/gsap-core";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
gsap.registerPlugin(useGSAP);
function Loader() {
  const loaderMain = useRef([]);
  const loaderBottom = useRef();
  const loaderCounter = useRef();
  useGSAP(() => {
    let count = 0;
    const tl = gsap.timeline();
    const h1Array = loaderMain.current.querySelectorAll(".line");
    const h1ArrayEven =
      loaderMain.current.querySelectorAll("h1:nth-child(even)");
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
      "-=0.5"
    );

    tl.from(
      loaderBottom.current,
      {
        opacity: 0,
        duration: 0.2,
      },
      "-=1"
    );

    tl.to(h1ArrayEven, {
      opacity: 0.2,
      stagger: 0.25,
    });

    tl.to(
      loaderMain.current,
      {
        opacity: 0,
        // y: -1000,
        delay: 0.8,
        ease: "power2.in",
        onStart: () => {
          tl.to(loaderMain.current, {
            y: -1000,
            ease: "power2.in",
          },
        "-=0.4")
        }
      },
      "-=1"
    );
  });
  return (
    <div
      className="bg-loaderBlack h-screen absolute z-50 flex justify-center items-center flex-col left-0 text-white right-0 "
      id="loader"
      ref={loaderMain}
    >
      <div className="loader-main text-[7rem]">
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
      <div
        ref={loaderBottom}
        className="loader-bottom w-[40rem] h-40 flex just"
      >
        <p className="font-light my-auto justify-self-start">
          Please wait.. <br /> a few seconds
        </p>
      </div>
    </div>
  );
}

export default Loader;
