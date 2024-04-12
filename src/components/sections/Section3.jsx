import ProjectCard from "../ProjectCard";
import olga from "/src/assets/Olga_Prudka_1.png";
import aim from "/src/assets/AIM-1.png";
import Arrow from "../Arrow";
function Section3() {
  return (
    <section data-scroll-section>
      <div className="flex flex-col justify-center text-[7rem] font-semibold leading-[6.8rem]">
        <div className="top-container mt-32 mb-10 flex justify-center gap-20">
          <div
            data-scroll
            data-scroll-speed="-2"
            className="left-container justify-self-end"
          >
            <div className="order w-fit">03</div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-2"
            className="right-container z-10"
          >
            <h1>OUR PROJECTS</h1>
          </div>
        </div>
        <div data-scroll className="bottom-container showcase">
          <ProjectCard
            projectTitle={"OLGA PRUDKA"}
            projectImage={olga}
            projectDescription={"Logo Design,Website Design and Development"}
            projectDate={2023}
          />
          <ProjectCard
            projectTitle={"AIM"}
            projectImage={aim}
            projectDescription={"Logo Design,Website Design and Development"}
            projectDate={2023}
          />
          <Arrow justify={"end"} degree={"0"}/>
        </div>
      </div>
    </section>
  );
}

export default Section3;
