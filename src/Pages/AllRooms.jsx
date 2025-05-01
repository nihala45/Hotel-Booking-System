import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";

const CheckBox = ({ lable, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="checkbox"
        checked={selected}
        onChange={(e) => onChange(e.target.checked, lable)}
      />
      <span className="font-light select-none">{lable}</span>
    </label>
  );
};

const RadioButton = ({ lable, selected = false, onChange = () => {} }) => {
  return (
    <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm">
      <input
        type="radio"
        name="sortOption"
        checked={selected}
        onChange={() => onChange(lable)}
      />
      <span className="font-light select-none">{lable}</span>
    </label>
  );
};

const Allrooms = () => {
  const navigate = useNavigate();
  const [openFilters, setOpenFilters] = useState(false);

  const roomTypes = ["Single Bed", "Double Bed", "Luxury Bed", "Family Bed"];

  const priceRanges = ["0 to 500", "500 to 1000", "1000 to 2000", "2000 to 3000"];

  const sortOptions = ["Price (low to high)", "Price (high to low)", "Rating", "Popularity"];

  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-35 px-4 md:px-16 lg:px-24 xl:px-32">
      <div>
        <div className="flex flex-col items-start text-left">
          <h1 className="font-playfair font-bold text-4xl md:text-[40px] text-gray-800 leading-tight">
            Hotel Rooms
          </h1>
          <p className="text-sm md:text-base text-gray-600 mt-3 max-w-xl leading-relaxed">
            Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories.
          </p>
        </div>

        {roomsDummyData.map((room) => (
          <div
            key={room._id}
            className="flex flex-col md:flex-row items-start py-10 gap-6 border-b border-gray-300 last:pb-30 last:border-0"
          >
            <img
              onClick={() => {
                navigate(`/rooms/${room._id}`);
                scrollTo(0, 0);
              }}
              src={room.images[0]}
              alt="hotel-img"
              title="View Room Details"
              className="max-h-65 md:w-1/2 rounded-xl shadow-lg object-cover cursor-pointer"
            />
            <div className="md:w-1/2 flex flex-col gap-2 mt-4">
              <p className="text-gray-500">{room.hotel.city}</p>
              <p
                className="text-gray-800 text-3xl font-playfair cursor-pointer"
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
              >
                {room.hotel.name}
              </p>
              <div className="flex items-center">
                <StarRating />
                <p className="ml-2">200+ reviews</p>
              </div>
              <div className="flex items-center gap-1 text-gray-500 mt-2 text-sm">
                <img src={assets.locationIcon} alt="location-icon" />
                <span>{room.hotel.address}</span>
              </div>
              <div className="flex flex-wrap items-center mt-3 mb-6 gap-3">
                {room.amenities.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#F5F5FF] shadow-sm border border-gray-200"
                  >
                    <img
                      src={facilityIcons[item]}
                      alt={item}
                      className="w-4 h-4 object-contain"
                    />
                    <p className="text-xs text-gray-700 capitalize">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl font-medium text-gray-700">
                ${room.pricePerNight} /night
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Filters */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 lg:mt-16">
        <div className="flex items-center justify-between px-5 py-2.5 border-b border-gray-300">
          <p className="text-base font-medium text-gray-800">FILTERS</p>
          <div className="text-xs cursor-pointer">
            <span className="lg:hidden" onClick={() => setOpenFilters(!openFilters)}>
              {openFilters ? "HIDE" : "SHOW"}
            </span>
            <span className="hidden lg:block">CLEAR</span>
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-700 ${openFilters ? "h-auto" : "h-0 lg:h-auto"}`}>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Popular filters</p>
            {roomTypes.map((room, index) => (
              <CheckBox key={index} lable={room} />
            ))}
          </div>
          <div className="px-5 pt-5">
            <p className="font-medium text-gray-800 pb-2">Price Range</p>
            {priceRanges.map((range, index) => (
              <CheckBox key={index} lable={`$ ${range}`} />
            ))}
          </div>
          <div className="px-5 pt-5 pb-6">
            <p className="font-medium text-gray-800 pb-2">Sort By</p>
            {sortOptions.map((option, index) => (
              <RadioButton key={index} lable={option} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allrooms;
