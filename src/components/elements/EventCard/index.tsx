import { EventType } from "@/datas/event-data";

const EventCard = (props: EventType) => {
  return (
    <div className="card bg-white p-[30px] xl:p-[50px] relative">
      <div className="border-y-2 border-secondary-600 bg-primary-200 h-[93px] absolute inset-x-0 top-20 xl:top-36 -z-10"></div>
      <div className="flex flex-col items-center">
        {/* Wrapper */}
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

export default EventCard;
