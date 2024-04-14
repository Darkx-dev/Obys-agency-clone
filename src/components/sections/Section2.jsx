import ProjectCard from "../ProjectCard";
import olga from "/src/assets/Olga_Prudka_1.png";
import aim from "/src/assets/AIM-1.png";
import Arrow from "../Arrow";
import ochi from "/src/assets/OCHI.png";
import laxer from "/src/assets/Laxer_1-2.png";
import eminente from "/src/assets/Eminente_First.png";
function Section3() {
  return (
    <section data-scroll-section>
      <div className="flex flex-col justify-center text-[7rem] font-semibold leading-[6.8rem]">
        <div className="top-container mt-32 mb-10 flex justify-center gap-20 ">
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
            className="right-container z-10 border-b-2 pb-20"
          >
            <h1>OUR PROJECTS</h1>
          </div>
        </div>
        <div data-scroll className="bottom-container showcase">
          <ProjectCard
            projectTitle={"OLGA PRUDKA"}
            projectImage={olga}
            projectDescription={"Logo Design, Website Design, Development"}
            projectDate={2023}
          />
          <ProjectCard
            projectTitle={"AIM"}
            projectImage={aim}
            projectDescription={"Logo Design, Website Design, Development"}
            projectDate={2024}
          />
          <Arrow justify={"end"} degree={0} />
          <Arrow justify={"end"} degree={45} />
          <ProjectCard
            projectTitle={"OCHI"}
            projectImage={ochi}
            projectDescription={"Website Design, Development"}
            projectDate={2022}
            ytranslate={20}
          />
          <ProjectCard
            projectTitle={"David Laxer"}
            projectImage={laxer}
            projectDescription={"Website Design, Development"}
            projectDate={2023}
          />
          <ProjectCard
            projectTitle={"ÉMINENTE"}
            projectImage={eminente}
            projectDescription={"Logo Design, Website Design, Development"}
            projectDate={2023}
          />
          <Arrow justify={"end"} degree={45} />
          <ProjectCard
            projectTitle={"MAKHNO"}
            projectImage={eminente}
            projectDescription={"Logo Design, Website Design, Development"}
            projectDate={2023}
          />
        </div>
        <div data-scroll className="all-projects-btn-container w-full bg-red-500">
          <button className="all-projects-brn bg-orangePulp h-[330px] w-[330px] rounded-full p-20">
            <div className="text">
              All Projects
            </div>
          </button>
        </div>

      </div>
    </section>
  );
}

export default Section3;
