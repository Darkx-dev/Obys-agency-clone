import InfiniteText from "../InfiniteText";
import image1 from "/src/assets/content-image01.jpg";

function Section3() {
  return (
    <section data-scroll-container>
      <div className="flex flex-col justify-center text-[7rem] font-semibold leading-[6.8rem]">
        <div className="top-container grid grid-cols-4 gap-24">
          <div className="left-container justify-self-end">
            <div data-scroll className="order w-fit">
              03
            </div>
          </div>
          <div
            data-scroll-container
            className="right-container space-y-10 col-span-3 z-10 border-b-2 h-[230vh]"
          >
            <h1 data-scroll className="border-b-2 h-[200px]">
              ABOUT OBYS
            </h1>
            <p data-scroll className="text-4xl font-normal w-1/2">
              Our agency is about people who love creating, designing and
              developing wow projects. In the same time we are a boutique agency
              that is more than the collective. We learn and grow, win and
              celebrate together.
            </p>
            <div className="about-section-visual relative grid grid-rows-1 grid-cols-6 gap-10">
              <div className="about-image col-span-3">
                <img className="" src={image1} alt="image01" />
              </div>
              <div className="text-base col-span-3 w-3/6 space-y-5 font-normal">
                <p>
                  We are happy to present our new website and updated version of
                  Obys agency. As before we are open for new projects worldwide!
                </p>

                <p>
                  Would you like to have award winning site or unique branding
                  style, please say hi to our manager —info@obys.agency. And we
                  will help you with the pleasure.
                </p>
              </div>
              <div className="about-awards pb-20 absolute -bottom-[425px] right-24 z-20 bg-awardsBlue p-12 w-[650px] font-normal text-3xl">
                <div className="rewards-block grid grid-rows-5">
                  <div className="rewards-block-row border-b-2 h-28 grid grid-cols-2 items-center gap-5">
                    <div className="rewards-block-title">Awwwards x16</div>
                    <div className="rewards-block-description justify-self-start text-base font-normal">
                      SOTM, SOTD and Honrable Mentions
                    </div>
                  </div>

                  <div className="rewards-block-row border-b-2 h-28 grid grid-cols-2 items-center gap-5">
                    <div className="rewards-block-title">Red Dot Award x1</div>
                    <div className="rewards-block-description justify-self-start text-base font-normal">
                      Best of the Best{" "}
                    </div>
                  </div>

                  <div className="rewards-block-row border-b-2 h-28 grid grid-cols-2 items-center gap-5">
                    <div className="rewards-block-title">FWA x11</div>
                    <div className="rewards-block-description justify-self-start text-base font-normal">
                      FWA of The Day
                    </div>
                  </div>

                  <div className="rewards-block-row border-b-2 h-28 grid grid-cols-2 items-center gap-5">
                    <div className="rewards-block-title">CSSDA x23</div>
                    <div className="rewards-block-description justify-self-start text-base font-normal">
                      WOTM, WOTD and UI, UX, Innovation
                    </div>
                  </div>

                  <div className="rewards-block-row border-b-2 h-28 grid grid-cols-2 items-center gap-5">
                    <div className="rewards-block-title">Behance x25</div>
                    <div className="rewards-block-description justify-self-start text-base font-normal">
                      Interaction, Graphic Design
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-base">We work with</p>
          </div>
        </div>
        <div className="bottom-container h-screen flex flex-col items-center justify-center">
          <InfiniteText />
        </div>
      </div>
    </section>
  );
}

export default Section3;
