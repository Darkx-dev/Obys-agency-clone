import olga from "/src/assets/Olga_Prudka_1.png";
function Section3() {
  return (
    <section data-scroll-section>
      <div className="flex flex-col justify-center text-[7rem] font-semibold leading-[6.8rem]">
        <div className="top-container flex justify-center gap-20">
          <div
            data-scroll
            data-scroll-speed="-1"
            className="left-container justify-self-end"
          >
            <div className="order w-fit">01</div>
          </div>
          <div
            data-scroll
            data-scroll-speed="-1"
            className="right-container z-10"
          >
            <h1>OUR PROJECTS</h1>
          </div>
        </div>
        <div className="bottom-container showcase">
          <img src={olga} alt="Olga.png" />
          <img src={olga} alt="Olga.png" />
          <img src={olga} alt="Olga.png" />
          <img src={olga} alt="Olga.png" />
          <img src={olga} alt="Olga.png" />
          <img src={olga} alt="Olga.png" />
        </div>
      </div>
    </section>
  );
}

export default Section3;
