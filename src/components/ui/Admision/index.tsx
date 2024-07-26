import AdmisionImage from "@/assets/admision.png";
import MobileAdmisionImage from "@/assets/mobile-admision.png";
import { ArrowRight } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

const Admision = () => {
  return (
    <Link
      to={"/ppdb"}
      className="h-[45px] xl:h-[58px] w-full mt-10 xl:mt-[18px] grid place-items-center relative"
    >
      <img
        src={AdmisionImage}
        alt="admision image"
        className="w-full object-cover hidden xl:block"
      />
      <img
        src={MobileAdmisionImage}
        alt="mobile admision image"
        className="block xl:hidden"
      />
      <div className="flex items-center gap-2 xl:gap-[14px] absolute">
        <p className="text-sm xl:text-xl font-medium">
          Admission is Open, Grab your seat now
        </p>
        <ArrowRight
          className="w-5 h-5 xl:w-7 xl:h-7"
          color="#262626"
          weight="regular"
        />
      </div>
    </Link>
  );
};

export default Admision;
