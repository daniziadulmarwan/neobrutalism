type Props = {
  id: number;
  image: string;
  imgWidth?: string;
  title: string;
  desc: string;
};

const VisionMisionCard = (props: Props) => {
  return (
    <div className="border-2 border-secondary-600 rounded-xl custom-shadow-button bg-white p-10 xl:p-[60px]">
      <div className="flex justify-between items-center">
        <h5 className="font-raleway font-bold text-[30px] xl:text-5xl text-secondary-500">
          {props.title}
        </h5>
        <img
          src={props.image}
          alt="mision image"
          className={`h-[50px] xl:h-20 ${props.imgWidth ?? "w-[50px] xl:w-20"}`}
        />
      </div>
      <p className="mt-10 xl:mt-[60px] text-base xl:text-xl font-medium text-secondary-400">
        {props.desc}
      </p>
    </div>
  );
};

export default VisionMisionCard;
