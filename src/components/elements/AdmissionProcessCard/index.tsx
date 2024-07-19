type Props = {
  id: number;
  number: string;
};

const AdmissionProcessCard = (props: Props) => {
  return (
    <div className="relative">
      <div className="border-2 border-secondary-600 rounded-xl custom-shadow-black bg-white inline-block py-[14px] px-[30px]">
        <span className="font-raleway font-extrabold text-6xl text-secondary-500">
          {props.number}
        </span>
      </div>

      {/* <div className="absolute left-14 top-20">
        <div className="flex flex-col items-center">
          <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white relative"></div>
          <div className="flex gap-1" style={{ margin: "-3px 0px" }}>
            <VerticalLine />
          </div>
          <div className="w-5 h-5 rounded-full border border-secondary-600 bg-white"></div>
        </div>
      </div> */}

      <div className="border-2 border-secondary-600 rounded-xl custom-shadow-black mt-[70px] p-[50px] bg-white"></div>
    </div>
  );
};

export default AdmissionProcessCard;
