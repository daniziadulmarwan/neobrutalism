import AchivementCard from "@/components/elements/AchivementCard";
import {
  ArrowLeft,
  ArrowRight,
  ChartBar,
  ChartPieSlice,
  Lightning,
} from "@phosphor-icons/react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

function Achievement() {
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="achievements" className="mt-20 xl:mt-[200px]">
      {/* Header */}
      <div className="text-center">
        <div className="text-sm xl:text-lg border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Our Achievements
        </div>

        <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Our Awards and Recognitions
        </h3>
        <div className="flex justify-center">
          <p className="mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            Little Learners Academy takes pride in our commitment to delivering
            high-quality education and outstanding student experiences. We are
            honored to have received various awards and recognitions for our
            dedication to early childhood education. These accolades reflect our
            team's relentless efforts in creating an exceptional learning
            environment for our students.
          </p>
        </div>
      </div>

      {/* Body */}
      <div id="achievement-slider" className="mt-[50px] xl:mt-[100px]">
        <Slider {...settings} ref={slider} className="flex gap-10">
          <AchivementCard
            id={1}
            title="Outstanding Early Childhood Education Award"
            desc=" Presented by the National Association for the Education of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional early childhood education and fostering a nurturing learning environment."
            icon={<ChartPieSlice className="w-6 h-6 xl:w-[34px] xl:h-[34px]" />}
          />
          <AchivementCard
            id={2}
            title="Innovative STEAM Education Award"
            desc="Awarded by the Education Excellence Association for our pioneering efforts in introducing innovative STEAM (Science, Technology, Engineering, Arts, and Mathematics) programs that ignite creativity and critical thinking in young learners."
            icon={<ChartBar className="w-6 h-6 xl:w-[34px] xl:h-[34px]" />}
          />
          <AchivementCard
            id={3}
            title="Environmental Stewardship Award"
            desc="Received from the Green Earth Society for our dedication to environmental education, sustainable practices, and fostering a love for nature in our students."
            icon={<Lightning className="w-6 h-6 xl:w-[34px] xl:h-[34px]" />}
          />
        </Slider>

        <div className="mt-[30px] xl:mt-[50px] flex justify-between items-center">
          <Link
            to="#"
            className="font-raleway text-lg xl:text-[22px] font-bold text-secondary-500"
          >
            8 More Awards
          </Link>

          <div className="flex gap-5">
            <button
              type="button"
              className="w-12 xl:w-14 h-12 xl:h-14 border-2 border-secondary-600 rounded-[8px] bg-white grid place-items-center cursor-pointer"
              onClick={() => slider?.current?.slickPrev()}
            >
              <ArrowLeft className="w-5 h-5 xl:w-[30px] xl:h-[30px]" />
            </button>
            <button
              className="w-12 xl:w-14 h-12 xl:h-14 border-2 border-secondary-600 rounded-[8px] bg-white grid place-items-center cursor-pointer"
              onClick={() => slider?.current?.slickNext()}
            >
              <ArrowRight className="w-5 h-5 xl:w-[30px] xl:h-[30px]" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;
