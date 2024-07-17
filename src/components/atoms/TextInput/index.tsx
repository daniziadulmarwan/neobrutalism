import { ChangeEventHandler } from "react";

type Props = {
  value?: string;
  placeholder: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const TextInput = (props: Props) => {
  return (
    <input
      className="border-2 border-secondary-600 rounded-lg bg-[#FFFCFA] w-full p-[30px] mt-4 placeholder:text-xl placeholder:text-[#59595A] placeholder:font-medium"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};

export default TextInput;
