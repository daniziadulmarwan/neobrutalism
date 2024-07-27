import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from "react";

type Props = {
  images?: string[];
};

const AcademicGalleryCard = (props: Props) => {
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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
    <div className="relative">
      <div className="border-2 border-secondary-600 custom-shadow-black rounded-xl bg-white h-[414px]"></div>
      <div className="absolute inset-x-0 mx-13 -top-40 overflow-hidden">
        {props.images?.length ? (
          <div id="academic-gallery-image-carousel">
            <Slider {...settings} ref={slider}>
              {props.images?.map((img) => (
                <div className="border-2 border-secondary-600 rounded-xl w-[344px] h-[304px] overflow-hidden">
                  <img
                    src={img}
                    alt="classroom-image"
                    className="object-cover h-full w-full"
                  />
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          <div
            id="academic-gallery-image-carousel"
            className="flex justify-between gap-10"
          >
            <div className="border-2 border-secondary-600 rounded-xl w-[344px] h-[304px] overflow-hidden bg-white"></div>
            <div className="border-2 border-secondary-600 rounded-xl w-[344px] h-[304px] overflow-hidden bg-white"></div>
            <div className="border-2 border-secondary-600 rounded-xl w-[344px] h-[304px] overflow-hidden bg-white"></div>
            <div className="border-2 border-secondary-600 rounded-xl w-[344px] h-[304px] overflow-hidden bg-white"></div>
          </div>
        )}

        <div className="mt-[41px]">
          <div className="flex justify-between items-center">
            <h5 className="text-[40px] font-raleway font-bold text-secondary-500">
              Classrooms
            </h5>
            <div className="flex gap-5 items-center">
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

          <div className="mt-10">
            <p className="text-[22px] font-medium text-[#4C4C4D]">
              Our well-equipped classrooms are designed to provide a nurturing
              and stimulating learning environment. Each classroom is
              thoughtfully arranged to inspire creativity, curiosity, and
              engagement.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicGalleryCard;
