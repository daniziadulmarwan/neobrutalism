import VerticalLine from "@/components/atoms/VerticalLine";

type Props = {
  id: number;
  number: string;
  title: string;
  desc: string;
  last: boolean;
};

const AdmissionProcessCard = (props: Props) => {
  return (
    <div>
      <div className="flex flex-col items-center xl:items-start">
        <div className="border-2 border-secondary-600 rounded-xl custom-shadow-black bg-white inline-block py-[14px] px-[30px]">
          <span className="font-raleway font-extrabold text-[26px] xl:text-6xl text-secondary-500">
            {props.number}
          </span>
        </div>

        <div className="inline-block xl:ml-14 -mt-3">
          <div className="flex flex-col items-center">
            <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
            <div className="flex gap-1" style={{ margin: "-3px 0px" }}>
              <VerticalLine />
            </div>
          </div>
        </div>
      </div>

      <div className="border-2 border-secondary-600 rounded-xl custom-shadow-black px-[30px] xl:px-8 py-[30px] xl:py-[50px] bg-white xl:h-[322px]">
        <h5 className="font-raleway text-[40px] font-bold text-secondary-500">
          {props.title}
        </h5>
        <p className="text-base xl:text-xl font-medium text-[#4C4C4D] mt-[14px] xl:mt-5">
          {props.desc}
        </p>
      </div>

      {/* Mobile Version Vertical Line */}
      {props.last !== true ? (
        <div className="flex flex-col items-center xl:hidden">
          <VerticalLine />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AdmissionProcessCard;
