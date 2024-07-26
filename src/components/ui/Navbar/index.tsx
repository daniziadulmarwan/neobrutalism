import Brand from "@/assets/brand.png";
import NavbarMobile from "@/components/ui/NavbarMobile";
import { TextAlignRight } from "@phosphor-icons/react";
import { useState } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const location = useLocation();

  return (
    <div className="w-full border-2 border-[#262626] h-[77px] rounded-[12px] mt-[14px] overflow-hidden bg-white">
      <div className="w-full h-full flex justify-between">
        <div
          id="brand"
          className="bg-primary-600 h-full border-r-2 border-[#262626] flex items-center"
        >
          <a href="#" className="flex items-center px-5 xl:px-6 gap-3">
            <img
              src={Brand}
              alt="brand"
              className="w-[30px] h-[30px] xl:w-10 xl:h-10"
            />
            <span className="font-medium text-base xl:text-lg">
              Little Learners
            </span>
          </a>
        </div>

        <div className="flex items-center justify-between">
          <div className="block xl:hidden border-l-2 border-x-secondary-400 h-full px-7 bg-primary-200">
            <button
              className="grid place-items-center w-full h-full"
              onClick={() => setOpen(true)}
            >
              <TextAlignRight size={32} />
            </button>
            <NavbarMobile open={open} setOpen={setOpen} />
          </div>

          <div className="hidden xl:block">
            <a
              href="/"
              className={`text-[#262626] text-xl font-medium py-6 px-8 border-x-2 border-[#262626] border-y-0 h-full hover:bg-primary-200 cursor-pointer ${
                location.pathname == "/" ? "bg-primary-200" : ""
              }`}
            >
              Home
            </a>
            <a
              href="/about-us"
              className={`text-[#262626] text-xl font-medium py-6 px-8 border-r-2 border-[#262626] border-y-0 h-full hover:bg-primary-200 cursor-pointer ${
                location.pathname == "/about-us" ? "bg-primary-200" : ""
              }`}
            >
              About Us
            </a>
            <a
              href="/academic"
              className={`text-[#262626] text-xl font-medium py-6 px-8 border-r-2 border-[#262626] border-y-0 h-full hover:bg-primary-200 cursor-pointer ${
                location.pathname == "/academic" ? "bg-primary-200" : ""
              }`}
            >
              Academics
            </a>
            <a
              href="/admission"
              className={`text-[#262626] text-xl font-medium py-6 px-8 border-r-2 border-[#262626] border-y-0 h-full hover:bg-primary-200 cursor-pointer ${
                location.pathname == "/admission" ? "bg-primary-200" : ""
              }`}
            >
              Admissions
            </a>
            <a
              href="/student-life"
              className={`text-[#262626] text-xl font-medium py-6 px-8 border-r-2 border-[#262626] border-y-0 h-full hover:bg-primary-200 cursor-pointer ${
                location.pathname == "/student-life" ? "bg-primary-200" : ""
              }`}
            >
              Student Life
            </a>
            <a
              href="/contact"
              className={`text-[#262626] text-xl font-medium py-6 px-8 border-y-0 h-full ${
                location.pathname == "/contact"
                  ? "bg-primary-200"
                  : "bg-primary-500"
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
