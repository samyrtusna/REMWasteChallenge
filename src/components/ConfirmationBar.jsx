import React from "react";

function ConfirmationBar(props) {
  const { size, price, hireDays } = props;
  return (
    <div className="w-screen bg-orange-100 rounded-xl lg:py-2">
      <p className="hidden sm:block text-sm mx-5 ">
        Imagery and information shown throughout this website may not reflect
        the exact shape or size specification, colours may vary, options and/or
        accessories may be featured at additional cost.
      </p>
      <div className="flex flex-col lg:flex-row lg:justify-between mx-5 mb-5">
        <div className="flex justify-between items-end lg:justify-items-start">
          <p className="p-2">{size} Yard Skip </p>
          <div className="flex items-end pr-2">
            <h2 className="text-3xl font-bold p-2">£{price}</h2>
            <p className="p-2">{hireDays} day hire</p>
          </div>
        </div>
        <div className="flex ">
          <button className="w-full mx-1 py-2 text-center lg:my-2 bg-gray-700 hover:bg-gray-800 text-white rounded-lg lg:px-5 cursor-pointer ">
            Back
          </button>
          <button className="w-full mx-1 py-2 text-center lg:my-2 bg-green-600 hover:bg-green-700 text-white rounded-lg lg:px-5 cursor-pointer">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationBar;
