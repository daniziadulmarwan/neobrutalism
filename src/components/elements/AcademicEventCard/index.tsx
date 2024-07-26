type Props = {
  id: number | string;
  image: string;
  title: string;
  desc: string;
};

const AcademicEventCard = (props: Props) => {
  return (
    <div className="card bg-white p-[30px] xl:p-13 relative">
      <div className="border-x-2 border-b-2 rounded-br-xl rounded-bl-xl border-secondary-600 bg-primary-200 w-[125px] absolute inset-y-0 -z-10 h-[384px] left-44"></div>
      <div className="flex flex-col items-center">
        <div className="w-full xl:w-[398.67px] h-[227px] xl:h-[304px] border-2 border-secondary-600 rounded-xl overflow-hidden">
          <img
            src={props.image}
            alt="event image 1"
            className="w-full h-full object-cover"
          />
        </div>
        <h5 className="mt-[30px] xl:mt-[50px] text-[22px] xl:text-[28px] font-raleway font-bold text-secondary-500 text-center">
          {props.title}
        </h5>
        <p className="mt-3 xl:mt-5 text-base xl:text-xl font-medium text-[#4C4C4D] text-center">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default AcademicEventCard;
