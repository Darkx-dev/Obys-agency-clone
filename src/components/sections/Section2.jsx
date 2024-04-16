import ProjectCard from "../ProjectCard";
import olga from "/src/assets/Olga_Prudka_1.png";
import aim from "/src/assets/AIM-1.png";
import Arrow from "../Arrow";
import ochi from "/src/assets/OCHI.png";
import laxer from "/src/assets/Laxer_1-2.png";
import eminente from "/src/assets/Eminente_First.png";
function Section2() {
  return (
    <section data-scroll-container>
      <div className="flex flex-col justify-center text-[7rem] font-semibold leading-[6.8rem]">
        <div data-scroll className="top-container grid grid-cols-4 gap-24">
          <div className="left-container justify-self-end">
            <div className="order w-fit">03</div>
          </div>
          <div className="right-container col-span-3 z-10 border-b-2 h-[200px]">
            <h1>OUR PROJECTS</h1>
          </div>
        </div>
        <div className="bottom-container showcase ">
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
          <Arrow justify={"end"} degree={90} />
          <ProjectCard
            projectTitle={"MAKHNO"}
            projectImage={eminente}
            projectDescription={"Logo Design, Website Design, Development"}
            projectDate={2023}
          />
        </div>
      </div>
      <div className="all-projects-btn-container w-full h-[650px] flex justify-center items-center">
        <button className="all-projects-btn hover:scale-90 transition-transform bg-orangePulp h-[320px] w-[320px] flex justify-center items-center rounded-full p-20">
          <div className="text-base font-semibold flex w-fit">
            <p>All Projects</p>(<span className="font-light italic">18</span>)
          </div>
        </button>
      </div>
    </section>
  );
}

export default Section2;
