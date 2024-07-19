import Testimonial from "@/components/elements/Testimonial";
import Testi1 from "@/assets/testi1.png";
import Testi2 from "@/assets/testi2.png";
import Testi3 from "@/assets/testi3.png";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MouseEventHandler, useRef } from "react";

type Props = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const NextArrow = (props: Props) => {
  const { onClick } = props;
  return (
    <div className="hidden xl:block">
      <button
        onClick={onClick}
        className={`left-arrow w-[58px] h-[58px] border-2 border-secondary-600 rounded-[8px] bg-white grid place-items-center cursor-pointer absolute -left-[58px] bottom-60`}
      >
        <ArrowLeft size={32} />
      </button>
    </div>
  );
};

const PrevArrow = (props: Props) => {
  const { onClick } = props;
  return (
    <div className="hidden xl:block">
      <button
        onClick={onClick}
        className={`left-arrow w-[58px] h-[58px] border-2 border-secondary-600 rounded-[8px] bg-white grid place-items-center cursor-pointer absolute -right-[60px] bottom-60`}
      >
        <ArrowRight size={32} />
      </button>
    </div>
  );
};

function Testimony() {
  const slider = useRef<any>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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
    <section id="testimony" className="mt-20 xl:mt-[200px]">
      <div className="text-center">
        <div className="border-2 border-secondary-600 rounded-[8px] bg-white inline-flex px-5 py-[10px]">
          Their Happy Words 🤗
        </div>

        <h3 className="mt-5 font-raleway font-bold text-[38px] xl:text-[58px]">
          Our Testimonials
        </h3>
        <div className="flex justify-center">
          <p className="mt-5 font-medium text-base xl:text-xl w-[992px] text-secondary-400">
            Our testimonials are heartfelt reflections of the nurturing
            environment we provide, where children flourish both academically
            and emotionally.
          </p>
        </div>
      </div>

      <div id="testimony-slider" className="mt-[50px] xl:mt-[100px]">
        <Slider {...settings} ref={slider}>
          <Testimonial
            id={1}
            image={Testi1}
            name="Jennifer B"
            description="Little Learners Academy has been a second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"
          />
          <Testimonial
            id={2}
            image={Testi2}
            name="David K"
            description="Choosing Little Learners Academy for my daughter was the best decision. She has thrived in their nurturing and stimulating environment."
          />
          <Testimonial
            id={3}
            image={Testi3}
            name="Emily L"
            description="My son's social and academic growth has been remarkable since joining Little Learners Academy. I am grateful for the supportive and dedicated teachers."
          />
        </Slider>
      </div>

      <div className="flex justify-center gap-5 mt-10">
        <button
          className="left-arrow w-12 h-12 border-2 border-secondary-600 rounded-[8px] bg-white grid place-items-center cursor-pointer xl:hidden"
          onClick={() => slider?.current?.slickPrev()}
        >
          <ArrowLeft size={18} className="stroke-2 stroke-secondary-600" />
        </button>
        <button
          className="left-arrow w-12 h-12 border-2 border-secondary-600 rounded-[8px] bg-white grid place-items-center cursor-pointer xl:hidden"
          onClick={() => slider?.current?.slickNext()}
        >
          <ArrowRight size={18} className="stroke-2 stroke-secondary-600" />
        </button>
      </div>
    </section>
  );
}

export default Testimony;
