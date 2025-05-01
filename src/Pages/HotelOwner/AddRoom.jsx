import React, { useState } from "react";
import Title from "../../components/Title";
import { assets } from "../../assets/assets";

const AllRooms = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: "",
    pricePerNight: 0,
    amenities: {
      "Free WIFI": false,
      "Free Breakfast": false,
      "Room Service": false,
      "Mountain View": false,
      "Pool Access": false,
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", inputs, images);
    // Submit handling logic here
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 max-w-4xl mx-auto">
      <Title
        align="left"
        font="outfit"
        title="Add Room"
        subTitle="Fill in the details carefully and provide accurate room details, pricing, and amenities to enhance the user booking experience."
      />

      {/* Images Upload */}
      <p className="text-gray-800 mt-10 font-semibold">Images</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 my-4">
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key} className="cursor-pointer">
            <img
              className="h-32 w-full object-cover border border-gray-300 rounded-md"
              src={
                images[key]
                  ? URL.createObjectURL(images[key])
                  : assets.uploadArea
              }
              alt={`Room ${key}`}
            />
            <input
              type="file"
              accept="image/*"
              id={`roomImage${key}`}
              hidden
              onChange={(e) =>
                setImages({ ...images, [key]: e.target.files[0] })
              }
            />
          </label>
        ))}
      </div>

      {/* Room Type & Price */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:gap-8 mt-6">
        <div className="flex-1">
          <label className="block text-gray-800 font-semibold mb-1">Room Type</label>
          <select
            value={inputs.roomType}
            onChange={(e) =>
              setInputs({ ...inputs, roomType: e.target.value })
            }
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Room">Luxury Room</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>

        <div className="mt-4 sm:mt-0">
          <label className="block text-gray-800 font-semibold mb-1">
            Price <span className="text-sm font-normal">/night</span>
          </label>
          <input
            type="number"
            min="0"
            placeholder="0"
            className="border border-gray-300 rounded p-2 w-32"
            value={inputs.pricePerNight}
            onChange={(e) =>
              setInputs({ ...inputs, pricePerNight: e.target.value })
            }
          />
        </div>
      </div>

      {/* Amenities */}
      <p className="text-gray-800 font-semibold mt-8 mb-2">Amenities</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-xl text-gray-700">
        {Object.keys(inputs.amenities).map((amenity, index) => (
          <label key={index} className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={inputs.amenities[amenity]}
              onChange={() =>
                setInputs({
                  ...inputs,
                  amenities: {
                    ...inputs.amenities,
                    [amenity]: !inputs.amenities[amenity],
                  },
                })
              }
            />
            {amenity}
          </label>
        ))}
      </div>

      {/* Submit Button */}
      <div className="mt-10">
        <button
          type="submit"
          className="bg-primary hover:bg-blue-600 text-white px-8 py-2 rounded transition-all duration-200"
        >
          Add Room
        </button>
      </div>
    </form>
  );
};

export default AllRooms;
