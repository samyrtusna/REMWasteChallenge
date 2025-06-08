import React from "react";
import SkipsSlider from "../components/SkipsSlider";

function SkipsPage() {
  return (
    <>
      <div className="absolute top-0  w-screen h-screen  transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">
        <div className="flex flex-col items-center mt-5 lg:mt-20">
          <h1 className="text-3xl font-bold ">Choose Your Skip Size</h1>
          <p>Select the skip size that best suits your needs</p>
        </div>
        <div className="flex justify-center items-center">
          <SkipsSlider />
        </div>
      </div>
    </>
  );
}

export default SkipsPage;
