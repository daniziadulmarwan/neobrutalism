import { TestiType } from "@/types/testi-type";
import { Star } from "@phosphor-icons/react";

const Testimonial = (props: TestiType) => {
  return (
    <div className="border-2 border-secondary-600 rounded-[12px] bg-white xl:h-[462px] custom-shadow-black flex flex-col items-center py-[30px] xl:py-0">
      <div className="w-[66px] xl:w-20 h-[66px] xl:h-20 rounded-full border border-secondary-600 xl:mt-[50px] bg-primary-100 grid place-items-center">
        <img
          src={props.image}
          alt="testi one"
          className="w=[50px] xl:w-[60px] h-[50px] xl:h-[60px]"
        />
      </div>
      <h5 className="mt-3 text-secondary-400 font-semibold text-2xl">
        {props.name}
      </h5>
      <div className="mt-5 xl:mt-[30px] flex gap-[5px]">
        <Star size={24} weight="fill" color="#FF8D4D" />
        <Star size={24} weight="fill" color="#FF8D4D" />
        <Star size={24} weight="fill" color="#FF8D4D" />
        <Star size={24} weight="fill" color="#FF8D4D" />
        <Star size={24} weight="fill" color="#FF8D4D" />
      </div>
      <p className="mt-5 xl:mt-[30px] w-full xl:w-[325px] text-center text-base xl:text-xl font-medium text-secondary-400 px-[30px]">
        {props.description}
      </p>
    </div>
  );
};

export default Testimonial;
