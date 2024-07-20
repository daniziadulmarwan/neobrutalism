import { ReactElement } from "react";

type Props = {
  id: number;
  icon: ReactElement;
  title: string;
  description: string;
};

const SupportCard = (props: Props) => {
  return (
    <div className="relative">
      <div className="border-2 border-secondary-600 bg-white rounded-[10px] xl:rounded-[12px] xl:h-[306px] flex flex-col justify-center xl:items-center custom-shadow-black py-[50px] px-[30px] xl:px-0">
        <h5 className="text-secondary-500 font-raleway text-[22px] xl:text-[28px] font-bold xl:w-[404px]">
          {props.title}
        </h5>
        <p className="text-[#4C4C4D] text-base xl:text-xl font-medium xl:w-[404px] mt-4 xl:mt-5">
          {props.description}
        </p>
      </div>
      <div
        id="benefit-icon"
        className="border-2 border-secondary-600 rounded-[12px] w-14 h-14 xl:h-[74px] xl:w-[74px] bg-primary-300 grid place-items-center absolute -top-8 left-7"
      >
        {props.icon}
      </div>
    </div>
  );
};

export default SupportCard;
