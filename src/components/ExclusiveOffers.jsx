import React from "react";
import Title from "./Title";
import { assets, exclusiveOffers } from "../assets/assets";

const ExclusiveOffers = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align="left"
          title="Exclusive Offers"
          subTitle="Take advantage of our limited-time offers and special packages to enhance your stay and create unforgettable memories."
        />
        <button className="group mt-4 md:mt-0 flex items-center gap-2 text-sm font-medium">
          View All Offers
          <img
            src={assets.arrowIcon}
            alt="arrow-icon"
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
        {exclusiveOffers.map((item) => (
          <div
            key={item._id}
            className="group relative flex flex-col justify-between gap-4 pt-12 px-4 pb-6 rounded-xl text-white bg-no-repeat bg-cover bg-center min-h-[300px]"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            {/* Offer Badge */}
            <p className="absolute top-4 left-4 text-[11px] bg-white/90 text-black px-2.5 py-0.5 rounded-full shadow-sm border border-gray-200">
              {item.price?.off || 0}% OFF
            </p>

            {/* Offer Content */}
            <div className="mt-auto">
              <p className="text-2xl font-medium font-playfair">{item.title}</p>
              <p className="mt-1">{item.description}</p>
              <p className="text-xs text-white/70 mt-3">Expires {item.expiryDate}</p>
            </div>

            {/* Offer Button */}
            <button className="mt-4 flex items-center gap-2 text-sm font-medium">
              View Offer
              <img
                className="invert group-hover:translate-x-1 transition-all"
                src={assets.arrowIcon}
                alt="arrow"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
