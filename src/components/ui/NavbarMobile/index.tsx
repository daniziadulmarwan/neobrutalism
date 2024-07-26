import { X } from "@phosphor-icons/react";

type Props = {
  open: boolean;
  setOpen: Function;
};

export default function NavbarMobile(props: Props) {
  return (
    <div
      className={`fixed bg-primary-400/90 z-50 w-screen h-screen overflow-hidden transition-all duration-300 ease-in-out ${
        props.open ? "inset-0" : "hidden"
      }`}
    >
      <button
        className="absolute top-3 right-3 border-2 border-secondary-600 rounded-md p-1 bg-primary-100"
        onClick={() => props.setOpen(false)}
      >
        <X size={18} />
      </button>

      <div className="flex flex-col justify-center items-center pt-10">
        <a
          href="/"
          className={`text-[#262626] text-base font-medium py-6 px-8 h-full cursor-pointer`}
        >
          Home
        </a>
        <a
          href="/about-us"
          className={`text-[#262626] text-base font-medium py-6 px-8 h-full cursor-pointer`}
        >
          About Us
        </a>
        <a
          href="/academic"
          className={`text-[#262626] text-base font-medium py-6 px-8 h-full cursor-pointer`}
        >
          Academics
        </a>
        <a
          href="/admission"
          className="text-[#262626] text-base font-medium py-6 px-8 h-full cursor-pointer"
        >
          Admissions
        </a>
        <a
          href="/student-life"
          className="text-[#262626] text-base font-medium py-6 px-8 h-full cursor-pointer"
        >
          Student Life
        </a>
        <a
          href="/contact"
          className={`text-[#262626] text-base font-medium py-6 px-8 h-full`}
        >
          Contact
        </a>
      </div>
    </div>
  );
}
