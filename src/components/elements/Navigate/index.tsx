import Line from "@/components/atoms/Line";
import { NavigateType } from "@/types/home-type";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Navigate = (props: NavigateType) => {
  return (
    <div className="border-2 border-secondary-600 rounded-xl xl:h-[588px] bg-white custom-shadow-black">
      <div className="py-10 xl:py-20 px-10 xl:px-20">
        <div className="max-w-[500px] flex flex-col items-center">
          <h5 className="font-raleway text-secondary-500 text-[28px] xl:text-5xl font-bold">
            {props.title}
          </h5>

          {/* Start: Line */}
          <div className="flex items-center mt-5 xl:mt-[30px]">
            <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
            <div className="flex gap-1" style={{ margin: "0px -3px" }}>
              <Line />
              <Line />
              <Line />
              <Line />
              <Line />
              <Line />
            </div>
            <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white"></div>
          </div>
          {/* End: Line */}

          <p className="mt-7 xl:mt-[50px] text-center text-base xl:text-lg font-medium text-[#4C4C4D]">
            {props.description}
          </p>
        </div>

        <Link
          to="#"
          className="mt-10 xl:mt-20 w-full border-2 border-secondary-600 bg-primary-300 py-4 xl:py-[18px] rounded-[10px] flex items-center justify-center gap-[10px] custom-shadow-button"
        >
          <span className="text-base xl:text-xl font-medium text-secondary-400">
            Learn More
          </span>
          <ArrowRight
            color="#262626"
            className="w-5 h-5 xl:w-[30px] xl:h-[30px]"
          />
        </Link>
      </div>
    </div>
  );
};

export default Navigate;
