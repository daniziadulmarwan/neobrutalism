import { ReactElement } from "react";

type Props = {
  id: number;
  width?: string;
  height?: string;
  icon: ReactElement;
  title?: string;
  bgColor?: string;
};

const Card = (props: Props) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div
        className={`${props.width ?? "w-10"} ${
          props.height ?? "h-10"
        } border-2 border-secondary-600 rounded-md grid place-items-center ${
          props.bgColor ?? "bg-primary-100"
        }`}
      >
        {props.icon}
      </div>
      <p className="font-medium text-xl text-secondary-600">{props.title}</p>
    </div>
  );
};

export default Card;
