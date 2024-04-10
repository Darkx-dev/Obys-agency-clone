function Section1() {
  return (
    <div className="absolute w-full translate-y-1/2" id="sec1">
      <div className="flex justify-center gap-20  text-[7rem] font-semibold leading-[6.8rem]">
        <div className="left-container justify-self-end">
          <div className="order w-fit">01</div>
        </div>
        <div className="right-container z-10">
          <div id="line__!">
            <h1>WE DESIGN</h1>
          </div>
          <div id="line__2">
            <h1>UNIQUE</h1>
          </div>
          <div className="flex relative gap-5 pb-4" id="line__3">
            <h1 className="underline underline-offset-[15px]">WEB</h1>
            <span>/</span>
            <h1 className="underline underline-offset-[15px]">GRAPHIC</h1>
            <img
              className="absolute -z-10 bottom-0 hidden"
              src="https://obys.agency/wp-content/uploads/2022/03/Flag.jpg"
              alt="flag"
              height={200}
              width={300}
            />
          </div>
          <div id="line__4">
            <h1>EXPERIENCE</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
