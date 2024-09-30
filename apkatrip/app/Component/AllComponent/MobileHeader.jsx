"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowLeft, FaSearch, FaTimes } from "react-icons/fa";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const MobileHeader = () => {
  const [selectedTab, setSelectedTab] = useState("oneWay");
  const [selected, setSelected] = useState();
  const [isPopupOpen, setIsPopupOpen] = useState(null);
  const [rooms, setRooms] = useState(1);
  const [nights, setNights] = useState(1);

  const handleRoomsChange = (amount) => {
    setRooms((prev) => Math.max(prev + amount, 1));
  };

  const handleNightsChange = (amount) => {
    setNights((prev) => Math.max(prev + amount, 1));
  };
  const openPopup = (type) => {
    setIsPopupOpen(type);
  };
  const closePopup = () => {
    setIsPopupOpen(false);
  };
  const [selectedClass, setSelectedClass] = useState("Economy");

  const handleSelection = (e) => {
    setSelectedClass(e.target.value);
  };

  const handleDone = () => {
    document.getElementById("popup").style.display = "none";
  };
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);
  const [infantCount, setInfantCount] = useState(0);

  const handleSelect = (type, value) => {
    if (type === "adult") {
      setAdultCount(value);
    } else if (type === "child") {
      setChildCount(value);
    } else if (type === "infant") {
      setInfantCount(value);
    }
  };
  const airports = [
    {
      city: "New Delhi",
      country: "India",
      name: "Indira Gandhi International Airport",
      code: "DEL",
    },
    {
      city: "Bangalore",
      country: "India",
      name: "Kempegowda International Airport",
      code: "BLR",
    },
  ];
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="block md:hidden p-3 ">
        <div className="flex space-x-4">
          <button
            className={`h-8 font-semibold text-sm px-4 rounded ${
              selectedTab === "oneWay"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedTab("oneWay")}
          >
            One Way
          </button>

          <button
            className={`h-8 font-semibold text-sm px-4 rounded ${
              selectedTab === "roundTrip"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
            onClick={() => setSelectedTab("roundTrip")}
          >
            Round Trip
          </button>
        </div>

        {selectedTab === "oneWay" && (
          <div className="my-4">
            <div className="flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 my-3">
              <div className="mr-3">
                <Image
                  src="/Images/location.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <div
                className="flex-1 w-5/6 relative cursor-pointer"
                onClick={() => openPopup("from")}
              >
                <div className="text-sm font-light">From</div>
                <span className="text-xl py-1 text-black font-bold">Delhi</span>
                <p id="fromCity" className="text-sm">
                  [DEL] Indira Gandhi International Airport
                </p>
              </div>

              {isPopupOpen === "from" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999]">
                  <div className="bg-white w-full h-full ">
                    <div className=" bg-blue-500 p-4">
                      <div className="flex  items-center ">
                        <button
                          className=" py-2 pr-2  text-white rounded"
                          onClick={closePopup}
                        >
                          <FaArrowLeft />
                        </button>
                        <h2 className="text-xl text-white leading-none font-bold">
                          Select Origin City
                        </h2>
                      </div>
                      <div className=" relative">
                        <input
                          type="text"
                          className=" h-10 mt-3 pl-8 rounded w-full"
                          placeholder="Search your city"
                        />
                        <FaSearch className="absolute top-6 left-2  text-gray-400" />
                      </div>
                    </div>

                    <ul className="h-[85vh] overflow-hidden overflow-y-auto">
                      <li className="bg-[#ecf5fe] py-2 px-5 text-gray-600 text-sm uppercase">
                        Popular Cities
                      </li>
                      {airports.map((airport, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center py-2 px-5"
                        >
                          <div>
                            <span className="font-bold">
                              {airport.city}, {airport.country}
                            </span>
                            <p className="text-sm">{airport.name}</p>
                          </div>
                          <span className="bg-[#737579] py-1 text-white font-bold rounded w-16 text-center px-3 uppercase">
                            {airport.code}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 my-3">
              <div className="mr-3">
                <Image
                  src="/Images/apka-takeoff.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <div
                className="flex-1 w-5/6 relative cursor-pointer"
                onClick={() => openPopup("to")}
              >
                <div className="text-sm font-light">To</div>
                <span className="text-xl py-1 text-black font-bold">Delhi</span>
                <p id="toCity" className="text-sm">
                  [BOM] Chhatrapati Shivaji International Airport
                </p>
              </div>

              {isPopupOpen === "to" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999]">
                  <div className="bg-white w-full h-full ">
                    <div className=" bg-blue-500 p-4">
                      <div className="flex  items-center ">
                        <button
                          className=" py-2 pr-2  text-white rounded"
                          onClick={closePopup}
                        >
                          <FaArrowLeft />
                        </button>
                        <h2 className="text-xl text-white leading-none font-bold">
                          Select Destination City
                        </h2>
                      </div>
                      <div className=" relative">
                        <input
                          type="text"
                          className=" h-10 mt-3 pl-8 rounded w-full"
                          placeholder="Search your city"
                        />
                        <FaSearch className="absolute top-6 left-2  text-gray-400" />
                      </div>
                    </div>

                    <ul className="h-[85vh] overflow-hidden overflow-y-auto">
                      <li className="bg-[#ecf5fe] py-2 px-5 text-gray-600 text-sm uppercase">
                        Popular Cities
                      </li>
                      {airports.map((airport, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center py-2 px-5"
                        >
                          <div>
                            <span className="font-bold">
                              {airport.city}, {airport.country}
                            </span>
                            <p className="text-sm">{airport.name}</p>
                          </div>
                          <span className="bg-[#737579] py-1 text-white font-bold rounded w-16 text-center px-3 uppercase">
                            {airport.code}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2 my-3 ">
              <div
                className="relative flex items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 w-1/2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="mr-3">
                  <Image
                    src="/Images/calender.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-sm font-light">Travel Date</div>
                  <span className="text-sm py-1 text-black font-bold">
                    {selected ? selected.toLocaleDateString() : "29/11/2003"}
                  </span>
                </div>

                {isHovered && (
                  <div className="bg-white p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                    <DayPicker
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                    />
                  </div>
                )}
              </div>

              <div className="flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 w-1/2">
                <div className="mr-3">
                  <Image
                    src="/Images/evening.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                <div onClick={() => openPopup("room")}>
                  <div className="text-sm font-light">Room & Night</div>
                  <span className="text-sm py-1 text-black font-bold">
                    1 Room, 1 Night(s)
                  </span>
                </div>
                {isPopupOpen === "room" && (
                  <div className="fixed inset-0 bg-[#0009] bottom-0   z-[9999]">
                    <div className=" w-full  absolute bottom-0 ">
                      <div className=" bg-white p-4">
                        <div className="flex justify-between items-center ">
                          <h2 className="text-xl  leading-none font-bold">
                            Select Nights
                          </h2>
                          <button
                            className=" text-2xl  rounded"
                            onClick={closePopup}
                          >
                            <FaTimes />
                          </button>
                        </div>
                      </div>

                      <div className="bg-white p-4">
                        <div className="flex flex-col space-y-4">
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">No of Rooms</p>
                            <div className="flex items-center">
                              <button
                                type="button"
                                onClick={() => handleRoomsChange(-1)}
                                className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                              >
                                -
                              </button>

                              <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-[fffbf3] ">
                                {rooms}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleRoomsChange(1)}
                                className=" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">
                              No of Nights
                            </p>
                            <div className="flex items-center">
                              <button
                                type="button"
                                onClick={() => handleNightsChange(-1)}
                                className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                              >
                                -
                              </button>

                              <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-[fffbf3] ">
                                {nights}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleNightsChange(1)}
                                className=" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-2 my-3 ">
              <div
                className="flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 w-1/2 relative cursor-pointer"
                onClick={() => openPopup("passenger")}
              >
                <div className="mr-3">
                  <Image src="/Images/user.svg" width={24} height={24} alt="" />
                </div>
                <div>
                  <div className="text-sm font-light">Passenger</div>
                  <div className="font-semibold">1 Traveller</div>
                </div>
              </div>

              {isPopupOpen === "passenger" && (
                <div className="fixed flex justify-end inset-0 bg-[#0009] bottom-0   z-[9999]">
                  <div className=" w-full  absolute bottom-0 ">
                    <div className="border-b bg-white p-4">
                      <div className="flex justify-between items-center ">
                        <h2 className="text-xl  leading-none font-bold">
                          No. of Travellers
                        </h2>
                        <button
                          className=" text-xl text-blue-600 leading-none font-normal"
                          onClick={closePopup}
                        >
                          Done
                        </button>
                      </div>
                    </div>

                    <div className="p-4  bg-white">
                      <div className="mb-6">
                        <div className="font-semibold">Adults (12+ yrs)</div>
                        <ul className="flex justify-between gap-1 mt-2">
                          {[...Array(9).keys()].map((i) => (
                            <li
                              key={i + 1}
                              className={`cursor-pointer font-semibold py-2 px-3 ${
                                adultCount === i + 1
                                  ? "bg-blue-500 text-white"
                                  : "border bg-white"
                              } `}
                              onClick={() => handleSelect("adult", i + 1)}
                            >
                              {i + 1}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <div className="font-semibold">Children (2-12 yrs)</div>
                        <ul className="flex justify-between gap-1 mt-2">
                          {[...Array(9).keys()].map((i) => (
                            <li
                              key={i}
                              className={`cursor-pointer font-semibold py-2 px-3 ${
                                childCount === i
                                  ? "bg-blue-500 text-white"
                                  : "border bg-white"
                              } `}
                              onClick={() => handleSelect("child", i)}
                            >
                              {i}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Infants Section */}
                      <div className="mb-6">
                        <div className="font-semibold">Infant (0-2 yrs)</div>
                        <ul className="flex  gap-2 mt-2">
                          {[...Array(5).keys()].map((i) => (
                            <li
                              key={i}
                              className={`cursor-pointer font-semibold py-2 px-3 ${
                                infantCount === i
                                  ? "bg-blue-500 text-white"
                                  : "border bg-white"
                              } `}
                              onClick={() => handleSelect("infant", i)}
                            >
                              {i}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Error Messages */}
                      <div id="errorfrm" className="mt-4">
                        {/* Replace the style with Tailwind CSS utility classes if needed */}
                        <div
                          id="alertdiv_maxTraveler"
                          className="hidden bg-red-500 text-white p-2 rounded"
                        >
                          Currently, booking can only be made for up to 9
                          travellers. You can make multiple bookings to
                          accommodate your entire party.
                        </div>
                        <div
                          id="alertdiv_maxInfant"
                          className="hidden bg-red-500 text-white p-2 rounded"
                        >
                          Infant cannot travel more than the adult.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="flex  items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 w-1/2 relative cursor-pointer"
                onClick={() => openPopup("seat")}
              >
                <div className="mr-3">
                  <Image src="/Images/seat.svg" width={24} height={24} alt="" />
                </div>
                <div>
                  <div className="text-sm font-light">Seat Class</div>
                  <div className="font-semibold">Economy</div>
                </div>
              </div>

              {isPopupOpen === "seat" && (
                <div className="fixed inset-0 bg-[#0009] bottom-0   z-[9999]">
                  <div className=" w-full  absolute bottom-0 ">
                    <div className=" bg-white p-4">
                      <div className="flex justify-between items-center ">
                        <h2 className="text-xl  leading-none font-bold">
                          Select Class
                        </h2>
                        <button
                          className=" text-2xl  rounded"
                          onClick={closePopup}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4">
                      <label className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="class"
                          value="Economy"
                          checked={selectedClass === "Economy"}
                          onChange={handleSelection}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Economy</span>
                      </label>
                      <label className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="class"
                          value="Premium Economy"
                          checked={selectedClass === "Premium Economy"}
                          onChange={handleSelection}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Premium Economy</span>
                      </label>
                      <label className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="class"
                          value="Business"
                          checked={selectedClass === "Business"}
                          onChange={handleSelection}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Business</span>
                      </label>
                      <label className="flex items-center mb-4">
                        <input
                          type="radio"
                          name="class"
                          value="First Class"
                          checked={selectedClass === "First Class"}
                          onChange={handleSelection}
                          className="mr-2"
                        />
                        <span className="text-gray-700">First Class</span>
                      </label>
                      <button
                        onClick={handleDone}
                        className="bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <input
                type="submit"
                value="Search"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full"
              />
            </div>
          </div>
        )}
        {selectedTab === "roundTrip" && (
          <div className="my-4">
            <div className="flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 my-3">
              <div className="mr-3">
                <Image
                  src="/Images/location.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <div
                className="flex-1 w-5/6 relative cursor-pointer"
                onClick={() => openPopup("from")}
              >
                <div className="text-sm font-light">From</div>
                <span className="text-xl py-1 text-black font-bold">Delhi</span>
                <p id="fromCity" className="text-sm">
                  [DEL] Indira Gandhi International Airport
                </p>
              </div>

              {isPopupOpen === "from" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999]">
                  <div className="bg-white w-full h-full ">
                    <div className=" bg-blue-500 p-4">
                      <div className="flex  items-center ">
                        <button
                          className=" py-2 pr-2  text-white rounded"
                          onClick={closePopup}
                        >
                          <FaArrowLeft />
                        </button>
                        <h2 className="text-xl text-white leading-none font-bold">
                          Select Origin City
                        </h2>
                      </div>
                      <div className=" relative">
                        <input
                          type="text"
                          className=" h-10 mt-3 pl-8 rounded w-full"
                          placeholder="Search your city"
                        />
                        <FaSearch className="absolute top-6 left-2  text-gray-400" />
                      </div>
                    </div>

                    <ul className="h-[85vh] overflow-hidden overflow-y-auto">
                      <li className="bg-[#ecf5fe] py-2 px-5 text-gray-600 text-sm uppercase">
                        Popular Cities
                      </li>
                      {airports.map((airport, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center py-2 px-5"
                        >
                          <div>
                            <span className="font-bold">
                              {airport.city}, {airport.country}
                            </span>
                            <p className="text-sm">{airport.name}</p>
                          </div>
                          <span className="bg-[#737579] py-1 text-white font-bold rounded w-16 text-center px-3 uppercase">
                            {airport.code}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 my-3">
              <div className="mr-3">
                <Image
                  src="/Images/apka-takeoff.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </div>
              <div
                className="flex-1 w-5/6 relative cursor-pointer"
                onClick={() => openPopup("to")}
              >
                <div className="text-sm font-light">To</div>
                <span className="text-xl py-1 text-black font-bold">Delhi</span>
                <p id="toCity" className="text-sm">
                  [BOM] Chhatrapati Shivaji International Airport
                </p>
              </div>

              {isPopupOpen === "to" && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-[9999]">
                  <div className="bg-white w-full h-full ">
                    <div className=" bg-blue-500 p-4">
                      <div className="flex  items-center ">
                        <button
                          className=" py-2 pr-2  text-white rounded"
                          onClick={closePopup}
                        >
                          <FaArrowLeft />
                        </button>
                        <h2 className="text-xl text-white leading-none font-bold">
                          Select Destination City
                        </h2>
                      </div>
                      <div className=" relative">
                        <input
                          type="text"
                          className=" h-10 mt-3 pl-8 rounded w-full"
                          placeholder="Search your city"
                        />
                        <FaSearch className="absolute top-6 left-2  text-gray-400" />
                      </div>
                    </div>

                    <ul className="h-[85vh] overflow-hidden overflow-y-auto">
                      <li className="bg-[#ecf5fe] py-2 px-5 text-gray-600 text-sm uppercase">
                        Popular Cities
                      </li>
                      {airports.map((airport, index) => (
                        <li
                          key={index}
                          className="flex justify-between items-center py-2 px-5"
                        >
                          <div>
                            <span className="font-bold">
                              {airport.city}, {airport.country}
                            </span>
                            <p className="text-sm">{airport.name}</p>
                          </div>
                          <span className="bg-[#737579] py-1 text-white font-bold rounded w-16 text-center px-3 uppercase">
                            {airport.code}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2 my-3 ">
              <div
                className="relative flex items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 w-1/2"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="mr-3">
                  <Image
                    src="/Images/calender.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                <div>
                  <div className="text-sm font-light">Travel Date</div>
                  <span className="text-sm py-1 text-black font-bold">
                    {selected ? selected.toLocaleDateString() : "29/11/2003"}
                  </span>
                </div>

                {isHovered && (
                  <div className="bg-white p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                    <DayPicker
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                    />
                  </div>
                )}
              </div>

              <div className="flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 w-1/2">
                <div className="mr-3">
                  <Image
                    src="/Images/evening.svg"
                    width={24}
                    height={24}
                    alt=""
                  />
                </div>
                <div onClick={() => openPopup("room")}>
                  <div className="text-sm font-light">Room & Night</div>
                  <span className="text-sm py-1 text-black font-bold">
                    1 Room, 1 Night(s)
                  </span>
                </div>
                {isPopupOpen === "room" && (
                  <div className="fixed inset-0 bg-[#0009] bottom-0   z-[9999]">
                    <div className=" w-full  absolute bottom-0 ">
                      <div className=" bg-white p-4">
                        <div className="flex justify-between items-center ">
                          <h2 className="text-xl  leading-none font-bold">
                            Select Nights
                          </h2>
                          <button
                            className=" text-2xl  rounded"
                            onClick={closePopup}
                          >
                            <FaTimes />
                          </button>
                        </div>
                      </div>

                      <div className="bg-white p-4">
                        <div className="flex flex-col space-y-4">
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">No of Rooms</p>
                            <div className="flex items-center">
                              <button
                                type="button"
                                onClick={() => handleRoomsChange(-1)}
                                className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                              >
                                -
                              </button>

                              <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-[fffbf3] ">
                                {rooms}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleRoomsChange(1)}
                                className=" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                              >
                                +
                              </button>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-lg font-semibold">
                              No of Nights
                            </p>
                            <div className="flex items-center">
                              <button
                                type="button"
                                onClick={() => handleNightsChange(-1)}
                                className="text-gray-600 px-2 border border-r-0 py-1 rounded-tl rounded-bl"
                              >
                                -
                              </button>

                              <span className="px-3 py-1 text-center border text-black bg-[#fffbf3] border-[fffbf3] ">
                                {nights}
                              </span>
                              <button
                                type="button"
                                onClick={() => handleNightsChange(1)}
                                className=" text-gray-600 border border-l-0 px-2 py-1  rounded-tr rounded-br"
                              >
                                +
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex gap-2 my-3 ">
              <div
                className="flex  items-center bg-[#ecf5fe]  rounded-lg border border-[#2196f3] p-2 w-1/2 relative cursor-pointer"
                onClick={() => openPopup("passenger")}
              >
                <div className="mr-3">
                  <Image src="/Images/user.svg" width={24} height={24} alt="" />
                </div>
                <div>
                  <div className="text-sm font-light">Passenger</div>
                  <div className="font-semibold">1 Traveller</div>
                </div>
              </div>

              {isPopupOpen === "passenger" && (
                <div className="fixed flex justify-end inset-0 bg-[#0009] bottom-0   z-[9999]">
                  <div className=" w-full  absolute bottom-0 ">
                    <div className="border-b bg-white p-4">
                      <div className="flex justify-between items-center ">
                        <h2 className="text-xl  leading-none font-bold">
                          No. of Travellers
                        </h2>
                        <button
                          className=" text-xl text-blue-600 leading-none font-normal"
                          onClick={closePopup}
                        >
                          Done
                        </button>
                      </div>
                    </div>

                    <div className="p-4  bg-white">
                      <div className="mb-6">
                        <div className="font-semibold">Adults (12+ yrs)</div>
                        <ul className="flex justify-between gap-1 mt-2">
                          {[...Array(9).keys()].map((i) => (
                            <li
                              key={i + 1}
                              className={`cursor-pointer font-semibold py-2 px-3 ${
                                adultCount === i + 1
                                  ? "bg-blue-500 text-white"
                                  : "border bg-white"
                              } `}
                              onClick={() => handleSelect("adult", i + 1)}
                            >
                              {i + 1}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mb-6">
                        <div className="font-semibold">Children (2-12 yrs)</div>
                        <ul className="flex justify-between gap-1 mt-2">
                          {[...Array(9).keys()].map((i) => (
                            <li
                              key={i}
                              className={`cursor-pointer font-semibold py-2 px-3 ${
                                childCount === i
                                  ? "bg-blue-500 text-white"
                                  : "border bg-white"
                              } `}
                              onClick={() => handleSelect("child", i)}
                            >
                              {i}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Infants Section */}
                      <div className="mb-6">
                        <div className="font-semibold">Infant (0-2 yrs)</div>
                        <ul className="flex  gap-2 mt-2">
                          {[...Array(5).keys()].map((i) => (
                            <li
                              key={i}
                              className={`cursor-pointer font-semibold py-2 px-3 ${
                                infantCount === i
                                  ? "bg-blue-500 text-white"
                                  : "border bg-white"
                              } `}
                              onClick={() => handleSelect("infant", i)}
                            >
                              {i}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Error Messages */}
                      <div id="errorfrm" className="mt-4">
                        {/* Replace the style with Tailwind CSS utility classes if needed */}
                        <div
                          id="alertdiv_maxTraveler"
                          className="hidden bg-red-500 text-white p-2 rounded"
                        >
                          Currently, booking can only be made for up to 9
                          travellers. You can make multiple bookings to
                          accommodate your entire party.
                        </div>
                        <div
                          id="alertdiv_maxInfant"
                          className="hidden bg-red-500 text-white p-2 rounded"
                        >
                          Infant cannot travel more than the adult.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div
                className="flex  items-center bg-[#ecf5fe] rounded-lg border border-[#2196f3] p-2 w-1/2 relative cursor-pointer"
                onClick={() => openPopup("seat")}
              >
                <div className="mr-3">
                  <Image src="/Images/seat.svg" width={24} height={24} alt="" />
                </div>
                <div>
                  <div className="text-sm font-light">Seat Class</div>
                  <div className="font-semibold">Economy</div>
                </div>
              </div>

              {isPopupOpen === "seat" && (
                <div className="fixed inset-0 bg-[#0009] bottom-0   z-[9999]">
                  <div className=" w-full  absolute bottom-0 ">
                    <div className=" bg-white p-4">
                      <div className="flex justify-between items-center ">
                        <h2 className="text-xl  leading-none font-bold">
                          Select Class
                        </h2>
                        <button
                          className=" text-2xl  rounded"
                          onClick={closePopup}
                        >
                          <FaTimes />
                        </button>
                      </div>
                    </div>

                    <div className="bg-white p-4">
                      <label className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="class"
                          value="Economy"
                          checked={selectedClass === "Economy"}
                          onChange={handleSelection}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Economy</span>
                      </label>
                      <label className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="class"
                          value="Premium Economy"
                          checked={selectedClass === "Premium Economy"}
                          onChange={handleSelection}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Premium Economy</span>
                      </label>
                      <label className="flex items-center mb-2">
                        <input
                          type="radio"
                          name="class"
                          value="Business"
                          checked={selectedClass === "Business"}
                          onChange={handleSelection}
                          className="mr-2"
                        />
                        <span className="text-gray-700">Business</span>
                      </label>
                      <label className="flex items-center mb-4">
                        <input
                          type="radio"
                          name="class"
                          value="First Class"
                          checked={selectedClass === "First Class"}
                          onChange={handleSelection}
                          className="mr-2"
                        />
                        <span className="text-gray-700">First Class</span>
                      </label>
                      <button
                        onClick={handleDone}
                        className="bg-blue-500 text-white w-full py-2 px-4 rounded hover:bg-blue-600"
                      >
                        Done
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-4">
              <input
                type="submit"
                value="Search"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-full"
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default MobileHeader;