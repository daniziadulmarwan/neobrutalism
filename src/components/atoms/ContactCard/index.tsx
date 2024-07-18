import Card from "../Card";
import { ReactElement } from "react";

type Props = {
  icon: ReactElement;
  title: string;
};

const ContactCard = (props: Props) => {
  return (
    <div className="border-2 border-secondary-600 rounded-xl p-4 xl:p-5 flex gap-1 items-center">
      <Card id={1} icon={props.icon} />
      <p className="text-base xl:text-xl font-medium">{props.title}</p>
    </div>
  );
};

export default ContactCard;
