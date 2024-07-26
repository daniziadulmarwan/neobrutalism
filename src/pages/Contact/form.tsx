import SelectInput from "@/components/atoms/SelectInput";
import TextInput from "@/components/atoms/TextInput";

function Form() {
  return (
    <div className="border-2 border-secondary-600 rounded-xl bg-white -mt-10">
      <form className="pt-20 xl:pt-[120px] pb-10 xl:pb-[100px] px-[30px] xl:px-[100px] flex flex-col gap-[30px] xl:gap-[50px]">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] xl:gap-[50px]">
          <div>
            <label
              htmlFor="parent_name"
              className="text-[#4C4C4C] font-semibold text-[22px]"
            >
              Parent Name
            </label>
            <TextInput placeholder="Enter Parent Name" />
          </div>
          <div>
            <label
              htmlFor="parent_name"
              className="text-[#4C4C4C] font-semibold text-[22px]"
            >
              Email Address
            </label>
            <TextInput placeholder="Enter Email Address" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] xl:gap-[50px]">
          <div>
            <label
              htmlFor="parent_name"
              className="text-[#4C4C4C] font-semibold text-[22px]"
            >
              Phone Number
            </label>
            <TextInput placeholder="Enter Phone Number" />
          </div>
          <div>
            <label
              htmlFor="parent_name"
              className="text-[#4C4C4C] font-semibold text-[22px]"
            >
              Student Name
            </label>
            <TextInput placeholder="Enter Student Name" />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px] xl:gap-[50px]">
          <div>
            <label
              htmlFor="parent_name"
              className="text-[#4C4C4C] font-semibold text-[22px]"
            >
              Student Age
            </label>
            <TextInput placeholder="Enter Student Age" />
          </div>
          <div>
            <label
              htmlFor="parent_name"
              className="text-[#4C4C4C] font-semibold text-[22px]"
            >
              Program of Intrest
            </label>
            <SelectInput />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[50px]">
          <div>
            <label
              htmlFor="parent_name"
              className="text-[#4C4C4C] font-semibold text-[22px]"
            >
              Student Age
            </label>
            <textarea
              className="border-2 border-secondary-600 rounded-lg bg-[#FFFCFA] w-full p-[30px] mt-4 placeholder:text-xl placeholder:text-[#59595A] placeholder:font-medium"
              placeholder="Enter Your Message"
              rows={8}
            ></textarea>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-[50px]">
          <button
            type="submit"
            className="bg-primary-500 border-2 border-secondary-600 rounded-xl py-[30px] font-medium text-2xl text-secondary-600"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
