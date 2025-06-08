import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkipsList } from "../features/skips/skipsSlice";
import {
  ArrowLeft,
  ArrowRight,
  TriangleAlert,
  LoaderCircle,
} from "lucide-react";
import getRandomNumber from "../helper/getRandomNumber";
import ConfirmationBar from "./ConfirmationBar";

function SkipsSlider() {
  const { skips, loading, error } = useSelector((state) => state.skips);
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState({});

  useEffect(() => {
    dispatch(fetchSkipsList());
  }, []);

  const skipsWithImages = skips.map((skip) => ({
    ...skip,
    image: "/images/skip.webp",
  }));

  const handleSelectSkip = (skip) => {
    if (selected?.id === skip.id) {
      setSelected({});
    } else {
      setSelected(skip);
    }
  };

  return (
    <>
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-white">
          <LoaderCircle
            size={60}
            className="animate-spin text-green-600"
          />
        </div>
      )}
      {error && <p>Error: {error}</p>}

      <div className="relative mt-20">
        <div className="relative flex flex-col items-center gap-x-24 lg:items-start  lg:flex-row ">
          <div className="sm:w-[400px] sm:h-[400px] w-[300px] h-[300px] relative">
            {skipsWithImages.map((skip, i) => (
              <img
                key={i}
                src={skip.image}
                alt="skip"
                className={`w-full h-full absolute object-cover rounded-3xl transition-all duration-300 ${
                  i === index ? "activeImage" : "inactiveImage"
                }`}
                style={{
                  transform: `rotate(${
                    index === i ? 0 : getRandomNumber()
                  }deg)`,
                }}
              />
            ))}
          </div>
          <div className="relative  sm:w-[400px] lg:h-[400px] w-[320px] h-[120px] mt-10 lg:mt-5 lg:ml-22 flex ">
            {skipsWithImages.map((skip, i) => (
              <div
                key={i}
                className={`absolute w-full h-fit lg:h-full p-5 flex flex-col justify-between items-center transition-all duration-300 ${
                  i === index ? "activeDesc delay-200" : "inactiveDesc"
                }`}
              >
                <p className="text-xl font-bold text-gray-800 mb-2">
                  {skip.size} Yard Skip
                </p>
                <p className="text-sm text-gray-500 mb-1">
                  {skip.hire_period_days} day hire period
                </p>

                {!skip.allowed_on_road && (
                  <div className="flex  text-sm text-yellow-700 bg-yellow-100 px-2 py-1 rounded w-fit mt-1">
                    <TriangleAlert size={20} />
                    <p className="ml-2">Not Allowed On The Road</p>
                  </div>
                )}

                <h1 className="text-3xl font-extrabold text-green-700 mb-4">
                  £ {skip.price_before_vat}
                </h1>

                <button
                  onClick={() => handleSelectSkip(skip)}
                  className={`w-full py-2 px-4 rounded font-semibold transition-colors cursor-pointer ${
                    selected?.id === skip.id
                      ? "bg-green-800 text-white"
                      : "bg-green-600 hover:bg-green-700 text-white"
                  }`}
                >
                  {selected?.id === skip.id ? "Selected" : "Select"}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -bottom-30  lg:-bottom-30 left-1/2 -translate-1/2 flex gap-x-5 mb-4 ">
          <button
            onClick={() =>
              setIndex((prev) =>
                prev === 0 ? skipsWithImages.length - 1 : prev - 1
              )
            }
            disabled={!!selected.id}
            className={`p-1.5 rounded-full transition-colors
    ${
      selected.id
        ? "bg-gray-200 text-gray-400 cursor-not-allowed"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
    }`}
          >
            <ArrowLeft size={18} />
          </button>

          <button
            onClick={() =>
              setIndex((prev) =>
                prev === skipsWithImages.length - 1 ? 0 : prev + 1
              )
            }
            disabled={!!selected.id}
            className={`p-1.5 rounded-full transition-colors
              ${
                selected.id
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200 cursor-pointer"
              }`}
          >
            <ArrowRight size={18} />
          </button>
        </div>
        <div
          className={`fixed bottom-0 left-0 right-0 z-40 transform transition-transform duration-500 ease-out ${
            selected.id
              ? "translate-y-0"
              : "translate-y-full pointer-events-none"
          }`}
        >
          <ConfirmationBar
            size={selected.size}
            price={selected.price_before_vat}
            hireDays={selected.hire_period_days}
          />
        </div>
      </div>
    </>
  );
}

export default SkipsSlider;
