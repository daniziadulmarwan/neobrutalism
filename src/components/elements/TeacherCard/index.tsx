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
    <div className="card bg-white p-[50px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="border-2 border-secondary-600 rounded-xl w-[100px] h-[100px] bg-primary-100 flex items-end justify-center">
            <img
              src={props.image}
              alt="teacher member"
              className="w-[80px] h-[90px]"
            />
          </div>
          <h5 className="font-raleway font-extrabold text-secondary-500 text-[30px]">
            {props.name}
          </h5>
        </div>
        <Card
          id={1}
          icon={<Envelope size={24} />}
          width="w-[56px]"
          height="h-[56px]"
          bgColor="bg-primary-300"
        />
      </div>
      <div className="mt-[30px] border-2 border-secondary-600 rounded-xl bg-primary-100 p-[30px]">
        <h5 className="text-2xl font-semibold text-secondary-400">
          Qualification: {props.qualification}
        </h5>
        <p className="text-xl font-medium text-secondary-400 mt-5">
          {props.desc}
        </p>
      </div>
    </div>
  );
};

export default TeacherCard;
