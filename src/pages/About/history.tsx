import AbstractPersegiImage from "@/assets/abstract-persegi.png";
import Line from "@/components/atoms/Line";

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
        <div className="border-2 border-secondary-600 rounded-xl w-full bg-white p-[150px] custom-shadow-black">
          <div
            id="timeline-wrapper"
            className="flex flex-col gap-[100px] relative"
          >
            {/* First Template */}
            <div className="flex items-center gap-[50px]">
              <div className="flex">
                {/* Line */}
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
                  <div className="flex gap-1" style={{ margin: "0px -3px" }}>
                    <Line />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white"></div>
                </div>
                {/* Line */}

                {/* Card */}
                <div className="card inline-block bg-white py-[30px] px-[50px] w-[364px] relative -ml-3 -z-10">
                  <div className="flex items-center gap-5">
                    <img
                      src={AbstractPersegiImage}
                      alt="abstract persegi"
                      className="w-[87.31px] h-[87.31px] object-cover"
                    />
                    <h5 className="font-raleway font-bold text-[68px] text-secondary-500">
                      2023
                    </h5>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h5 className="title text-[28px]">
                  Resilience and Future Horizons
                </h5>
                <p className="subtitle text-xl mt-3">
                  Adapting to new challenges, we remained committed to our
                  mission of providing an exceptional early education. Looking
                  ahead with optimism, we envision a future filled with
                  boundless possibilities as we continue shaping the leaders and
                  thinkers of tomorrow.
                </p>
              </div>
            </div>

            {/* Second Template */}
            <div className="flex items-center gap-[50px]">
              <div className="flex">
                {/* Line */}
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
                  <div className="flex gap-1" style={{ margin: "0px -3px" }}>
                    <Line />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white"></div>
                </div>
                {/* Line */}

                {/* Card */}
                <div className="card inline-block bg-white py-[30px] px-[50px] w-[364px] relative -ml-3 -z-10">
                  <div className="flex items-center gap-5">
                    <img
                      src={AbstractPersegiImage}
                      alt="abstract persegi"
                      className="w-[87.31px] h-[87.31px] object-cover"
                    />
                    <h5 className="font-raleway font-bold text-[68px] text-secondary-500">
                      2017
                    </h5>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h5 className="title text-[28px]">Innovation and Technology</h5>
                <p className="subtitle text-xl mt-3">
                  Innovation became the driving force behind our kindergarten's
                  progress from 2016 to 2020. Embracing the latest educational
                  technologies, we crafted engaging and interactive learning
                  experiences for our students.
                </p>
              </div>
            </div>

            {/* Third Template */}
            <div className="flex items-center gap-[50px]">
              <div className="flex">
                {/* Line */}
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
                  <div className="flex gap-1" style={{ margin: "0px -3px" }}>
                    <Line />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white"></div>
                </div>
                {/* Line */}

                {/* Card */}
                <div className="card inline-block bg-white py-[30px] px-[50px] w-[364px] relative -ml-3 -z-10">
                  <div className="flex items-center gap-5">
                    <img
                      src={AbstractPersegiImage}
                      alt="abstract persegi"
                      className="w-[87.31px] h-[87.31px] object-cover"
                    />
                    <h5 className="font-raleway font-bold text-[68px] text-secondary-500">
                      2012
                    </h5>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h5 className="title text-[28px]">Expansion and Recognition</h5>
                <p className="subtitle text-xl mt-3">
                  These years marked as a period of expansion and recognition
                  for our school. As we extended our facilities and enhanced our
                  curriculum, we received accolades for our commitment to
                  quality education and innovative teaching methodologies.
                </p>
              </div>
            </div>

            {/* Fourth Template */}
            <div className="flex items-center gap-[50px]">
              <div className="flex">
                {/* Line */}
                <div className="flex items-center">
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
                  <div className="flex gap-1" style={{ margin: "0px -3px" }}>
                    <Line />
                  </div>
                  <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white"></div>
                </div>
                {/* Line */}

                {/* Card */}
                <div className="card inline-block bg-white py-[30px] px-[50px] w-[364px] relative -ml-3 -z-10">
                  <div className="flex items-center gap-5">
                    <img
                      src={AbstractPersegiImage}
                      alt="abstract persegi"
                      className="w-[87.31px] h-[87.31px] object-cover"
                    />
                    <h5 className="font-raleway font-bold text-[68px] text-secondary-500">
                      2005
                    </h5>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h5 className="title text-[28px]">Inception and Growth</h5>
                <p className="subtitle text-xl mt-3">
                  Established in 2005, our kindergarten school began its journey
                  with a vision to provide a nurturing space for young minds to
                  explore, learn, and grow. Over the next five years, we
                  witnessed significant growth.
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
