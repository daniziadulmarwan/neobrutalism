import Card from "@/components/atoms/Card";
import { Envelope } from "@phosphor-icons/react";

type Props = {
  id: number;
  image: string;
  name: string;
  qualification: string;
  desc: string;
};

const TeacherCard = (props: Props) => {
  return (
    <div className="card bg-white p-[20px] xl:p-[50px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[10px] xl:gap-4">
          <div className="border-2 border-secondary-600 rounded-xl min-w-[60px] max-w-[60px] xl:w-[100px] min-h-[60px] max-h-[60px] xl:h-[100px] bg-primary-100 flex items-end justify-center overflow-hidden">
            <img
              src={props.image}
              alt="teacher member"
              className="object-cover"
            />
          </div>
          <h5 className="font-raleway font-extrabold text-secondary-500 text-xl xl:text-[30px]">
            {props.name}
          </h5>
        </div>
        <Card
          id={1}
          icon={<Envelope className="w-5 xl:w-6 h-5 xl:h-6" />}
          width="w-[48px] xl:w-[56px]"
          height="h-[48px] xl:h-[56px]"
          bgColor="bg-primary-300"
        />
      </div>
      <div className="mt-[30px] border-2 border-secondary-600 rounded-xl bg-primary-100 p-4 xl:p-[30px]">
        <h5 className="text-xl xl:text-2xl font-semibold text-secondary-400">
          Qualification: {props.qualification}
        </h5>
        <p className="text-base xl:text-xl font-medium text-secondary-400 mt-5">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default TeacherCard;
