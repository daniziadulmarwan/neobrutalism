import AbstractPersegiImage from "@/assets/abstract-persegi.png";

function History() {
  return (
    <section id="achievements" className="mt-10 xl:mt-[200px]">
      {/* Header */}
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Our Progressive Journey
        </div>

        <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Our History
        </h3>
        <div className="flex justify-center">
          <p className="mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            Founded with a passion for early education in 2005, our kindergarten
            school boasts a rich history of empowering young learners to reach
            their potential through innovative teaching methods and a supportive
            learning environment.
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mt-[100px]">
        <div className="border-2 border-secondary-600 rounded-xl w-full bg-white py-[50px] xl:py-[150px] px-2 xl:px-[150px] custom-shadow-black">
          <div
            id="timeline-wrapper"
            className="flex flex-col gap-[50px] xl:gap-[100px] relative"
          >
            {/* First Template */}
            <div className="flex flex-col xl:flex-row items-center gap-[30px] xl:gap-[50px]">
              <div className="flex -ml-6 xl:-ml-0">
                {/* Line */}
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
                  <div className="flex gap-1" style={{ margin: "0px -3px" }}>
                    <div className="bg-primary-400 h-2 xl:h-3 flex items-center w-[22px] xl:w-16">
                      <div className="bg-secondary-600 h-0.5 w-full line-shadow"></div>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white"></div>
                </div>
                {/* Line */}

                {/* Card */}
                <div className="card inline-block bg-white py-4 xl:py-[30px] px-6 xl:px-[50px] w-auto xl:w-[364px] relative -ml-3 -z-10">
                  <div className="flex items-center gap-5">
                    <img
                      src={AbstractPersegiImage}
                      alt="abstract persegi"
                      className="w-[50px] xl:w-[87.31px] h-[50px] xl:h-[87.31px] object-cover"
                    />
                    <h5 className="font-raleway font-bold text-[38px] xl:text-[68px] text-secondary-500">
                      2023
                    </h5>
                  </div>
                </div>
              </div>

              <div className="flex-1 ml-14">
                <h5 className="title text-[22px] xl:text-[28px]">
                  Resilience and Future Horizons
                </h5>
                <p className="subtitle text-base xl:text-xl mt-3 pr-4">
                  Adapting to new challenges, we remained committed to our
                  mission of providing an exceptional early education. Looking
                  ahead with optimism, we envision a future filled with
                  boundless possibilities as we continue shaping the leaders and
                  thinkers of tomorrow.
                </p>
              </div>
            </div>

            {/* Second Template */}
            <div className="flex flex-col xl:flex-row items-center gap-[30px] xl:gap-[50px]">
              <div className="flex -ml-6 xl:-ml-0">
                {/* Line */}
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
                  <div className="flex gap-1" style={{ margin: "0px -3px" }}>
                    <div className="bg-primary-400 h-2 xl:h-3 flex items-center w-[22px] xl:w-16">
                      <div className="bg-secondary-600 h-0.5 w-full line-shadow"></div>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white"></div>
                </div>
                {/* Line */}

                {/* Card */}
                <div className="card inline-block bg-white py-4 xl:py-[30px] px-6 xl:px-[50px] w-auto xl:w-[364px] relative -ml-3 -z-10">
                  <div className="flex items-center gap-5">
                    <img
                      src={AbstractPersegiImage}
                      alt="abstract persegi"
                      className="w-[50px] xl:w-[87.31px] h-[50px] xl:h-[87.31px] object-cover"
                    />
                    <h5 className="font-raleway font-bold text-[38px] xl:text-[68px] text-secondary-500">
                      2023
                    </h5>
                  </div>
                </div>
              </div>

              <div className="flex-1 ml-14">
                <h5 className="title text-[22px] xl:text-[28px]">
                  Resilience and Future Horizons
                </h5>
                <p className="subtitle text-base xl:text-xl mt-3 pr-4">
                  Adapting to new challenges, we remained committed to our
                  mission of providing an exceptional early education. Looking
                  ahead with optimism, we envision a future filled with
                  boundless possibilities as we continue shaping the leaders and
                  thinkers of tomorrow.
                </p>
              </div>
            </div>

            {/* Third Template */}
            <div className="flex flex-col xl:flex-row items-center gap-[30px] xl:gap-[50px]">
              <div className="flex -ml-6 xl:-ml-0">
                {/* Line */}
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
                  <div className="flex gap-1" style={{ margin: "0px -3px" }}>
                    <div className="bg-primary-400 h-2 xl:h-3 flex items-center w-[22px] xl:w-16">
                      <div className="bg-secondary-600 h-0.5 w-full line-shadow"></div>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white"></div>
                </div>
                {/* Line */}

                {/* Card */}
                <div className="card inline-block bg-white py-4 xl:py-[30px] px-6 xl:px-[50px] w-auto xl:w-[364px] relative -ml-3 -z-10">
                  <div className="flex items-center gap-5">
                    <img
                      src={AbstractPersegiImage}
                      alt="abstract persegi"
                      className="w-[50px] xl:w-[87.31px] h-[50px] xl:h-[87.31px] object-cover"
                    />
                    <h5 className="font-raleway font-bold text-[38px] xl:text-[68px] text-secondary-500">
                      2023
                    </h5>
                  </div>
                </div>
              </div>

              <div className="flex-1 ml-14">
                <h5 className="title text-[22px] xl:text-[28px]">
                  Resilience and Future Horizons
                </h5>
                <p className="subtitle text-base xl:text-xl mt-3 pr-4">
                  Adapting to new challenges, we remained committed to our
                  mission of providing an exceptional early education. Looking
                  ahead with optimism, we envision a future filled with
                  boundless possibilities as we continue shaping the leaders and
                  thinkers of tomorrow.
                </p>
              </div>
            </div>

            {/* Fourth Template */}
            <div className="flex flex-col xl:flex-row items-center gap-[30px] xl:gap-[50px]">
              <div className="flex -ml-6 xl:-ml-0">
                {/* Line */}
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
                  <div className="flex gap-1" style={{ margin: "0px -3px" }}>
                    <div className="bg-primary-400 h-2 xl:h-3 flex items-center w-[22px] xl:w-16">
                      <div className="bg-secondary-600 h-0.5 w-full line-shadow"></div>
                    </div>
                  </div>
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white"></div>
                </div>
                {/* Line */}

                {/* Card */}
                <div className="card inline-block bg-white py-4 xl:py-[30px] px-6 xl:px-[50px] w-auto xl:w-[364px] relative -ml-3 -z-10">
                  <div className="flex items-center gap-5">
                    <img
                      src={AbstractPersegiImage}
                      alt="abstract persegi"
                      className="w-[50px] xl:w-[87.31px] h-[50px] xl:h-[87.31px] object-cover"
                    />
                    <h5 className="font-raleway font-bold text-[38px] xl:text-[68px] text-secondary-500">
                      2023
                    </h5>
                  </div>
                </div>
              </div>

              <div className="flex-1 ml-14">
                <h5 className="title text-[22px] xl:text-[28px]">
                  Resilience and Future Horizons
                </h5>
                <p className="subtitle text-base xl:text-xl mt-3 pr-4">
                  Adapting to new challenges, we remained committed to our
                  mission of providing an exceptional early education. Looking
                  ahead with optimism, we envision a future filled with
                  boundless possibilities as we continue shaping the leaders and
                  thinkers of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default History;
