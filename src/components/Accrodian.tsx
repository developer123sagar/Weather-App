import React, { useState } from "react";

const Accordian = ({
  title,
  value,
}: {
  title: React.ReactNode | string;
  value: React.ReactNode | string;
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className="h-auto">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full"
      >
        {title}
        <svg
          className="fill-indigo-500 shrink-0 ml-8 mt-2"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out text-slate-600 text-sm ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden border-t-[2px] border-white">{value}</div>
      </div>
    </div>
  );
};

export default Accordian;
