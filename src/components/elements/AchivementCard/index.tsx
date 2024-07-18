import { ChartPieSlice } from "@phosphor-icons/react";
import { ReactElement } from "react";

type Props = {
  id: number;
  title: string;
  desc: string;
  icon: ReactElement;
};

const AchivementCard = (props: Props) => {
  return (
    <div className="relative">
      <div className="border-2 border-secondary-600 bg-white rounded-[10px] xl:rounded-[12px] flex flex-col xl:items-center custom-shadow-black py-[50px] min-h-[402px]">
        <h5 className="text-secondary-500 font-raleway text-[22px] xl:text-[28px] font-bold xl:w-[404px] mt-[30px]">
          {props.title}
        </h5>
        <p className="text-[#4C4C4D] text-base xl:text-xl font-medium xl:w-[404px] mt-4 xl:mt-5">
          {props.desc}
        </p>
      </div>
      {/* Icon */}
      <div
        id="benefit-icon"
        className="border-2 border-secondary-600 rounded-[12px] p-5 bg-primary-300 grid place-items-center absolute -top-8 left-7"
      >
        {props.icon}
      </div>
    </div>
  );
};

export default AchivementCard;
