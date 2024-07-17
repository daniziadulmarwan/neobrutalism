const SelectInput = () => {
  return (
    <select
      className="border-2 border-secondary-600 rounded-lg bg-[#FFFCFA] w-full p-[30px] mt-4 placeholder:text-xl placeholder:text-[#59595A] placeholder:font-medium"
      aria-placeholder="Select Program"
    >
      <option hidden>Select Program</option>
      <option value="MIPA">Madrasah Aliyah - MIPA</option>
    </select>
  );
};

export default SelectInput;
