import { ReactElement } from "react";

type Props = {
  id: number;
  icon: ReactElement;
};

const FooterCard = (props: Props) => {
  return (
    <div className="flex items-center gap-[10px]">
      <div className="w-[44px] h-[44px] xl:w-14 xl:h-14 border-2 border-secondary-600 rounded-lg grid place-items-center bg-primary-300">
        {props.icon}
      </div>
    </div>
  );
};

export default FooterCard;
