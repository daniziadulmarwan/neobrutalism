import HeroImage from "@/assets/hero.png";

function Hero() {
  return (
    <section
      id="hero"
      className="mt-10 xl:mt-[80px] flex flex-col xl:flex-row gap-10 xl:gap-[60px] items-center w-full"
    >
      <div className="w-full">
        <img src={HeroImage} alt="hero image" className="w-full h-full" />
      </div>

      <div className="w-full">
        <div className="text-center xl:text-start">
          <p className="font-medium text-base xl:text-[22px] text-[#262626] border-b-2 border-[#262626] inline-block xl:inline-flex">
            Welcome to Little Learners Academy
          </p>
        </div>

        <h3 className="font-raleway text-center xl:text-start text-[30px] xl:text-[54px] text-[#1A1A1A] font-extrabold w-full xl:w-[765px]">
          Where Young Minds Blossom and{" "}
          <span className="text-primary-600">Dreams Take Flight.</span>
        </h3>

        <p className="text-[#333333] mt-[18px] text-center xl:text-start xl:mt-[30px] font-medium text-base xl:text-[20px]">
          Our kinder garden school provides a nurturing and stimulating
          environment, fostering a love for learning that lasts a lifetime. Join
          us as we embark on an exciting educational journey together!
        </p>

        <div className="mt-10 xl:mt-[60px] border-2 border-[#262626] rounded-[12px] py-10 xl:py-0 xl:h-[141px] bg-primary-200 custom-shadow flex flex-col xl:flex-row items-center px-[50px] justify-between gap-5 xl:gap-0">
          <div>
            <h5 className="font-extrabold text-[44px] text-secondary-600 text-center xl:text-start">
              +7000
            </h5>
            <p className="font-medium text-[18px] text-secondary-600">
              Students Passed Out
            </p>
          </div>

          <div className="w-full h-[2px] bg-secondary-600 xl:hidden"></div>

          <div>
            <h5 className="font-extrabold text-[44px] text-secondary-600 text-center xl:text-start">
              +37
            </h5>
            <p className="font-medium text-[18px] text-secondary-600">
              Awards & Recognitions
            </p>
          </div>

          <div className="w-full h-[2px] bg-secondary-600 xl:hidden"></div>

          <div>
            <h5 className="font-extrabold text-[44px] text-secondary-600 text-center xl:text-start">
              +15
            </h5>
            <p className="font-medium text-[18px] text-secondary-600">
              Experience Educators
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
