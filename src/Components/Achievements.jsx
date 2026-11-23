import React from "react";

const Achievements = () => {
  return (
    <div className="hidden sm:flex py-6 flex-row  justify-center  items-center bg-[#DAC5A7]">
      <div className="flex flex-row  gap-20 2xl:gap-80">
        <div className="flex flex-col text-black items-center">
          <h1 className="text-xl font-bold">05+</h1>
          <h1 className="text-sm font-semibold">Projects Built</h1>
        </div>
        <div className="flex flex-col text-black items-center">
          <h1 className="text-xl font-bold">05+</h1>
          <h1 className="text-sm font-semibold">Responsive Designs</h1>
        </div>
        <div className="flex flex-col text-black items-center">
          <h1 className="text-xl font-bold">06+</h1>
          <h1 className="text-sm font-semibold">Technical Skills</h1>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
