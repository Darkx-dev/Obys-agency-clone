function Section3() {
  return (
    <section data-scroll-container>
      <div className="flex flex-col justify-center text-[7rem] font-semibold leading-[6.8rem]">
        <div
          data-scroll
          className="top-container mt-32 mb-10 flex justify-center gap-20 "
        >
          <div className="left-container justify-self-end">
            <div className="order w-fit">03</div>
          </div>
          <div className="right-container z-10 border-b-2 pb-20">
            <h1>OUR PROJECTS</h1>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section3;
