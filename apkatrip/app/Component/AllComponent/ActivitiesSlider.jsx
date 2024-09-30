"user client";
import React from "react";
import Link from "next/link";

const ActivitiesSlider = () => {
  return (
    <div className="relative pt-6 lg:pt-0">
      <div className="relative">
          <img
            src="/Images/australia-banner-home.webp"
            alt="Kashmir Tour Packages"
            layout="fill"
            objectFit="cover"
            className="w-full h-[350px]"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center p-4 text-white bg-[#a6a4a433] bg-opacity-20"></div>
          <h2 className="absolute left-0 right-0  flex items-center justify-center mx-auto z-10  text-white text-xl lg:text-2xl top-28 md:top-24 font-bold">
            Kashmir Tour Packages
          </h2>
      </div>

      <div className="absolute bottom-16 left-0 right-0 text-center pb-6">
        <h1 className="text-white text-2xl lg:text-4xl font-bold">
          Where Every Experience Counts!
        </h1>
        <div className="flex justify-between mt-5 items-center border rounded-full  w-full md:w-[600px] bg-white mx-auto ">
          <div className="relative flex p-2 px-4 w-full items-center">
            <img
              src="/Images/search.svg"
              alt="Search Icon"
              width={24}
              height={24}
            />
            <input
              type="text"
              id="txtDesCity"
              className="ml-2 flex-grow border-none p-2 w-full rounded-lg placeholder-gray-500 focus:outline-none"
              placeholder="Enter Your Dream Destination!"
            />
          </div>
          <button
            className="ml-2 bg-[#EF6614] text-white px-8 py-2 h-14  rounded-full hover:bg-[#ef6414ed]"
            type="button"
            // onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default ActivitiesSlider;