"use client";
import React, { useEffect, useRef, useState } from "react";
import { FaCalendarWeek, FaChevronDown } from "react-icons/fa";
import AutoSearch from "./AutoSearch";
import TravellerDropdown from "./TravellerDropdown";
import Link from "next/link";
import { DayPicker } from "react-day-picker";
import "react-day-picker/style.css";

const Header = () => {
  const [selected, setSelected] = useState();

  const [activeTab, setActiveTab] = useState(1);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const handleCheckboxChange = (event) => {};

  const [fromCity, setFromCity] = useState({
    code: "DEL",
    name: "Delhi",
    airport: "Indira Gandhi International Airport",
  });
  const [toCity, setToCity] = useState({
    code: "MUM",
    name: "Mumbai",
    airport: "Chhatrapati Shivaji Maharaj International Airport",
  });

  const handleCitySelect = (city) => {
    if (selectedOption === "from") {
      setFromCity(city);
    } else if (selectedOption === "to") {
      setToCity(city);
    }
    setIsVisible(false);
  };

  const handleVisibilityChange = (value) => {
    setIsVisible(value);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Array of day names
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getDateComponents = (date) => {
    return {
      year: date.getFullYear(),
      month: date.getMonth(),
      day: String(date.getDate()).padStart(2, "0"),
      dayOfWeek: daysOfWeek[date.getDay()],
    };
  };

  const currentDate = new Date();
  const futureDate = new Date();
  futureDate.setDate(currentDate.getDate() + 3);

  const currentDateComponents = getDateComponents(currentDate);
  const futureDateComponents = getDateComponents(futureDate);
  const [isVisible, setIsVisible] = useState(false);

  const [selectedOption, setSelectedOption] = useState("");
  const handleClick = (option) => {
    setSelectedOption(option);
    setIsVisible(true);

    switch (option) {
      case "from":
        handleFromClick();
        break;
      case "to":
        handleToClick();
        break;
      case "traveller":
        handleToClick(); // Add the appropriate handler for traveller
        break;
      default:
        console.log("Unknown option:", option);
    }
  };

  const dropdownRef = useRef(null);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleFromClick = () => {
    // Your logic for 'From' click
    console.log("From clicked");
  };

  const handleToClick = () => {
    // Your logic for 'To' click
    console.log("To clicked");
  };

  return (
    <>
      <div className="flex flex-col hidden lg:block custom-color text-white md:px-10 lg:px-52  py-10">
        <div>
          <div className="tabs flex gap-2 pb-2">
            <button
              className={`px-4 py-1 text-xs font-bold rounded-3xl ${
                activeTab === 1 ? "bg-white text-[#1853a2]" : ""
              } transition-colors duration-300 ease-in-out`}
              onClick={() => handleTabClick(1)}
            >
              One Way
            </button>
            <button
              className={`px-4 py-1 text-xs font-bold rounded-3xl ${
                activeTab === 2 ? "bg-white text-[#1853a2]" : ""
              } transition-colors duration-300 ease-in-out`}
              onClick={() => handleTabClick(2)}
            >
              Round Trip
            </button>
            <button
              className={`px-4 py-1 text-xs font-bold rounded-3xl ${
                activeTab === 3 ? "bg-white text-[#1853a2]" : ""
              } transition-colors duration-300 ease-in-out`}
              onClick={() => handleTabClick(3)}
            >
              Multicity
            </button>
          </div>
          <div className="tab-content">
            {activeTab === 1 && (
              <>
                <div className="bg-white custom-shadow grid grid-cols-6 gap-0 border-gray-300">
                  <div
                    className="flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                    onClick={() => handleClick("from")}
                  >
                    <p className="text-sm text-[#7E7979] font-medium">From</p>
                    <span className="text-3xl py-1 text-black font-bold">
                      {fromCity.name}
                    </span>
                    <p className="text-black text-xs truncate">
                      [{fromCity.code}] {fromCity.airport}
                    </p>
                    {isVisible && selectedOption === "from" && (
                      <div ref={dropdownRef}>
                        <AutoSearch
                          value="From"
                          handleClosed={handleVisibilityChange}
                          onSelect={handleCitySelect}
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className="flex flex-col px-4 py-2 relative bg-white border-r hover:bg-[#ECF5FE]"
                    onClick={() => handleClick("to")}
                  >
                    <label className="text-sm text-[#7E7979] font-medium">
                      To
                    </label>
                    <span className="text-3xl py-1 text-black font-bold">
                      {toCity.name}
                    </span>
                    <p className="text-black text-xs truncate">
                      [{toCity.code}] {toCity.airport}
                    </p>
                    {isVisible && selectedOption === "to" && (
                      <div ref={dropdownRef}>
                        <AutoSearch
                          value="To"
                          handleClosed={handleVisibilityChange}
                          onSelect={handleCitySelect}
                        />
                      </div>
                    )}
                  </div>

                  <div
                    className="flex flex-col relative px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]"
                    onClick={() => handleClick("date")}
                  >
                    <label className="text-sm text-[#7E7979] font-medium">
                      Departure Date
                    </label>
                    <div className="flex  items-baseline text-black">
                      <span className="text-3xl py-1 pr-1 text-black font-bold">
                        {" "}
                        {currentDateComponents.day}
                      </span>
                      <span className="text-sm font-semibold">
                        {months[currentDateComponents.month]}'
                      </span>
                      <span className="text-sm font-semibold">
                        {" "}
                        {currentDateComponents.year}
                      </span>
                      <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                    </div>
                    <p className="text-black text-xs">
                      {currentDateComponents.dayOfWeek}
                    </p>

                    {isVisible && selectedOption === "date" && (
                      <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                        <DayPicker
                          mode="single"
                          selected={selected}
                          onSelect={setSelected}
                        />
                      </div>
                    )}
                  </div>
                  <div className="flex flex-col relative  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]"
                   onClick={() => handleClick("return")}>
                    <label className="text-sm text-[#7E7979] font-medium">
                      Return Date
                    </label>
                    <div className="flex items-baseline text-black">
                      <span className="text-3xl py-1 pr-1 text-black font-bold">
                        {" "}
                        {futureDateComponents.day}
                      </span>
                      <span className="text-sm font-semibold">
                        {" "}
                        {months[futureDateComponents.month]}'
                      </span>
                      <span className="text-sm font-semibold">
                        {futureDateComponents.year}
                      </span>
                      <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                    </div>
                    <p className="text-black text-xs">
                      {futureDateComponents.dayOfWeek}
                    </p>

                    {isVisible && selectedOption === "return" && (
                      <div className="bg-white text-black p-5 shadow-2xl absolute top-full left-0 mt-2 z-10">
                        <DayPicker
                          mode="single"
                          selected={selected}
                          onSelect={setSelected}
                        />
                      </div>
                    )}
                  </div>
                  <div
                    className="flex flex-col relative  px-4 py-2 bg-white border-r hover:bg-[#ECF5FE]"
                    onClick={() => handleClick("traveller")}
                  >
                    <label className="text-sm text-[#7E7979] font-medium">
                      Travelers
                    </label>
                    <div className="flex items-center text-black">
                      <span className="text-3xl py-1 pr-1 text-black font-bold">
                        1
                      </span>
                      <span className="text-sm font-semibold flex items-center gap-1">
                        Traveller(s) <FaChevronDown />
                      </span>
                    </div>
                    <p className="text-black text-xs">Economy</p>

                    {isVisible && selectedOption === "traveller" && (
                      <div ref={dropdownRef}>
                        <TravellerDropdown value="From" />
                      </div>
                    )}
                  </div>
                  <Link
                    href="/flightSearch"
                    className="text-white flex items-center justify-center text-2xl font-bold p-4 bg-[#ef6614] rounded-br-lg rounded-tr-lg"
                  >
                    Search
                  </Link>
                </div>
              </>
            )}
          </div>

          <div className="tab-content">
            {activeTab === 2 && (
              <div className="bg-white custom-shadow grid grid-cols-6 gap-0 border-gray-300">
                <div
                  className="flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                  onClick={() => handleClick("from")}
                >
                  <p className="text-sm text-[#7E7979] font-medium">From</p>
                  <span className="text-3xl py-1 text-black font-bold">
                    {fromCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{fromCity.code}] {fromCity.airport}
                  </p>
                  {isVisible && selectedOption === "from" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        value="From"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>

                <div
                  className="flex flex-col px-4 py-2 relative bg-white border-r hover:bg-[#ECF5FE]"
                  onClick={() => handleClick("to")}
                >
                  <label className="text-sm text-[#7E7979] font-medium">
                    To
                  </label>
                  <span className="text-3xl py-1 text-black font-bold">
                    {toCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{toCity.code}] {toCity.airport}
                  </p>
                  {isVisible && selectedOption === "to" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        value="To"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>

                <div className="flex flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Departure Date
                  </label>
                  <div className="flex items-baseline text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">
                      {" "}
                      {currentDateComponents.day}
                    </span>
                    <span className="text-sm font-semibold">
                      {months[currentDateComponents.month]}'
                    </span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {currentDateComponents.year}
                    </span>
                    <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                  </div>
                  <p className="text-black text-xs">
                    {currentDateComponents.dayOfWeek}
                  </p>
                </div>
                <div className="flex flex-col  px-4 py-2 bg-white  border-r hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Return Date
                  </label>
                  <div className="flex items-baseline text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">
                      {" "}
                      {futureDateComponents.day}
                    </span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {months[futureDateComponents.month]}'
                    </span>
                    <span className="text-sm font-semibold">
                      {futureDateComponents.year}
                    </span>
                    <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                  </div>
                  <p className="text-black text-xs">
                    {futureDateComponents.dayOfWeek}
                  </p>
                </div>
                <div
                  className="flex flex-col relative  px-4 py-2 bg-white border-r hover:bg-[#ECF5FE]"
                  onClick={() => handleClick("traveller")}
                >
                  <label className="text-sm text-[#7E7979] font-medium">
                    Travelers
                  </label>
                  <div className="flex items-center text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">
                      1
                    </span>
                    <span className="text-sm font-semibold flex items-center gap-1">
                      Traveller(s) <FaChevronDown />
                    </span>
                  </div>
                  <p className="text-black text-xs">Economy</p>

                  {isVisible && selectedOption === "traveller" && (
                    <div ref={dropdownRef}>
                      <TravellerDropdown value="From" />
                    </div>
                  )}
                </div>
                <Link
                  href=""
                  className="text-white flex items-center justify-center text-2xl font-bold p-4 bg-[#ef6614]  rounded-br-lg rounded-tr-lg"
                >
                  Search
                </Link>
              </div>
            )}
          </div>

          <div className="tab-content">
            {activeTab === 3 && (
              <div className="bg-white custom-shadow grid grid-cols-4 gap-0 border-gray-300">
                <div
                  className="flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r border-b hover:bg-[#ECF5FE] cursor-pointer"
                  onClick={() => handleClick("from")}
                >
                  <p className="text-sm text-[#7E7979] font-medium">From</p>
                  <span className="text-3xl py-1 text-black font-bold">
                    {fromCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{fromCity.code}] {fromCity.airport}
                  </p>
                  {isVisible && selectedOption === "from" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        value="From"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>
                <div
                  className="flex flex-col px-4 py-2 border-b relative bg-white border-r hover:bg-[#ECF5FE]"
                  onClick={() => handleClick("to")}
                >
                  <label className="text-sm text-[#7E7979] font-medium">
                    To
                  </label>
                  <span className="text-3xl py-1 text-black font-bold">
                    {toCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{toCity.code}] {toCity.airport}
                  </p>
                  {isVisible && selectedOption === "to" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        value="To"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col  px-4 py-2 bg-white  border-r border-b hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Departure Date
                  </label>
                  <div className="flex items-baseline text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">
                      {" "}
                      {currentDateComponents.day}
                    </span>
                    <span className="text-sm font-semibold">
                      {months[currentDateComponents.month]}'
                    </span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {currentDateComponents.year}
                    </span>
                    <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                  </div>
                  <p className="text-black text-xs">
                    {currentDateComponents.dayOfWeek}
                  </p>
                </div>
                <div className="flex flex-col  px-4 py-2 bg-white border-b rounded-tr-lg hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Travelers
                  </label>
                  <div className="flex items-center text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">
                      1
                    </span>
                    <span className="text-sm font-semibold flex items-center gap-1">
                      Traveller(s) <FaChevronDown />
                    </span>
                  </div>
                  <p className="text-black text-xs">Economy</p>
                </div>

                <div
                  className="flex flex-col bg-white relative px-4 py-2 rounded-tl-lg rounded-bl-lg border-r hover:bg-[#ECF5FE] cursor-pointer"
                  onClick={() => handleClick("from")}
                >
                  <p className="text-sm text-[#7E7979] font-medium">From</p>
                  <span className="text-3xl py-1 text-black font-bold">
                    {fromCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{fromCity.code}] {fromCity.airport}
                  </p>
                  {isVisible && selectedOption === "from" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        value="From"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>

                <div
                  className="flex flex-col px-4 py-2 relative bg-white border-r hover:bg-[#ECF5FE]"
                  onClick={() => handleClick("to")}
                >
                  <label className="text-sm text-[#7E7979] font-medium">
                    To
                  </label>
                  <span className="text-3xl py-1 text-black font-bold">
                    {toCity.name}
                  </span>
                  <p className="text-black text-xs truncate">
                    [{toCity.code}] {toCity.airport}
                  </p>
                  {isVisible && selectedOption === "to" && (
                    <div ref={dropdownRef}>
                      <AutoSearch
                        value="To"
                        handleClosed={handleVisibilityChange}
                        onSelect={handleCitySelect}
                      />
                    </div>
                  )}
                </div>
                <div className="flex flex-col  px-4 py-2 bg-white  border-r border-b hover:bg-[#ECF5FE]">
                  <label className="text-sm text-[#7E7979] font-medium">
                    Departure Date
                  </label>
                  <div className="flex items-baseline text-black">
                    <span className="text-3xl py-1 pr-1 text-black font-bold">
                      {" "}
                      {currentDateComponents.day}
                    </span>
                    <span className="text-sm font-semibold">
                      {months[currentDateComponents.month]}'
                    </span>
                    <span className="text-sm font-semibold">
                      {" "}
                      {currentDateComponents.year}
                    </span>
                    <FaCalendarWeek className="text-[#d3cfcf] ml-5 text-xl" />
                  </div>
                  <p className="text-black text-xs">
                    {currentDateComponents.dayOfWeek}
                  </p>
                </div>
                <div className="flex items-center justify-center p-4 bg-white rounded-lg">
                  <div className="flex items-center justify-center  bg-white rounded-lg col-span-4 gap-3">
                    <button className="bg-[#ef6614] border border-[#ef6614] p-3 rounded-full text-white font-semibold">
                      Search
                    </button>
                    <button className="bg-white p-3  border rounded-full border-blue-500 text-blue-500 font-semibold">
                      + Add City
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex  mt-3 justify-between items-center">
            <nav className="defenceColm" id="divFamilyFare">
              <ul className="flex list-none p-0 m-0">
                <li className="mr-5">
                  <label className="container_df corp-hidden cscshw flex items-center">
                    {/* Defence Forces */}
                    Defence Forces
                    <input
                      name="FF"
                      id="chkArmy"
                      type="checkbox"
                      value=""
                      onChange={handleCheckboxChange}
                      className="ml-2"
                    />
                    <span className="checkmark_df"></span>
                  </label>
                </li>
                <li className="mr-5">
                  <label className="container_df corp-hidden cscshw flex items-center">
                    {/* Defence Forces */}
                    Students
                    <input
                      name="FF"
                      id="chkArmy"
                      type="checkbox"
                      value=""
                      onChange={handleCheckboxChange}
                      className="ml-2"
                    />
                    <span className="checkmark_df"></span>
                  </label>
                </li>
                <li className="mr-5">
                  <label className="container_df corp-hidden cscshw flex items-center">
                    {/* Defence Forces */}
                    Senior Citizens
                    <input
                      name="FF"
                      id="chkArmy"
                      type="checkbox"
                      value=""
                      onChange={handleCheckboxChange}
                      className="ml-2"
                    />
                    <span className="checkmark_df"></span>
                  </label>
                </li>
                <li className="mr-5">
                  <label className="container_df corp-hidden cscshw flex items-center">
                    {/* Defence Forces */}
                    Doctors Nurses
                    <input
                      name="FF"
                      id="chkArmy"
                      type="checkbox"
                      value=""
                      onChange={handleCheckboxChange}
                      className="ml-2"
                    />
                    <span className="checkmark_df"></span>
                  </label>
                </li>
              </ul>
            </nav>
            <Link
              href="/web-check"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 p-2 border border-white bg-[blue-500] text-white rounded hover:bg-[#49b2f0] transition"
            >
              <img
                src="/Images/Routes/web-checkin-icon-v1.svg"
                className="w-5"
                alt="Copy Code"
              />
              <span className="text-sm font-bold">Web Check-In</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;