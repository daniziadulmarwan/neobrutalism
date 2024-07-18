import { CollapseType } from "@/types/collapse-type";
import { Minus, Plus } from "@phosphor-icons/react";
import { useLayoutEffect, useRef, useState } from "react";

const Collapse = (props: CollapseType) => {
  const [isOpen, setIsOpen] = useState(false);

  const domRef = useRef<any>(null);

  useLayoutEffect(() => {
    const bodyRef = domRef?.current?.querySelector(".body");
    if (isOpen) {
      bodyRef.style.maxHeight = bodyRef.scrollHeight + "px";
    } else {
      bodyRef.style.maxHeight = "0px";
    }

    bodyRef.style.overflow = "hidden";
  }, [isOpen]);

  return (
    <div id="accordion" ref={domRef}>
      <div
        className={`border-2 border-secondary-600 rounded-xl ${
          isOpen ? "bg-white" : "bg-primary-200"
        }`}
      >
        <div
          id="header"
          className="flex justify-between items-center py-5 xl:py-[38px] px-6 xl:px-10 cursor-pointer gap-5 xl:gap-0"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            id="title"
            className="font-semibold text-lg xl:text-[22px] text-secondary-600"
          >
            {props.title}
          </div>

          {/* Start: Icon */}
          <div
            id="icon"
            className="border-2 border-secondary-600 min-w-10 min-h-10 rounded-md grid place-items-center bg-primary-100"
          >
            {isOpen ? (
              <Minus className="w-5 h-5 xl:w-6 xl:h-6" />
            ) : (
              <Plus className="w-5 h-5 xl:w-6 xl:h-6" />
            )}
          </div>
          {/* End: Icon */}
        </div>

        {isOpen && (
          <div className="px-6 xl:pl-10 pr-28 -mt-2">
            <hr className="border border-secondary-600 w-full" />
          </div>
        )}

        {/* Body */}
        <div className="body overflow-hidden transition-all duration-300 ease-in-out">
          <p className="font-medium text-base xl:text-xl text-secondary-400 px-6 xl:px-10 pb-5 mt-6">
            {props.children}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Collapse;
