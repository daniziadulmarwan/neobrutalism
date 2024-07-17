import { ReactElement } from "react";

type Props = {
  id: number;
  icon: ReactElement;
};

const ContactIconCard = (props: Props) => {
  return (
    <div className="border-2 border-secondary-600 rounded-lg inline-block bg-primary-300 py-4 xl:py-5 px-6 xl:px-[60px]">
      {props.icon}
    </div>
  );
};

export default ContactIconCard;
