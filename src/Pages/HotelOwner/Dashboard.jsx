import React, { useState } from "react";
import Title from "../../components/Title";
import { assets, dashboardDummyData } from "../../assets/assets";

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState(dashboardDummyData);

  return (
    <div className="pb-20">
      <Title
        align="left"
        font="outfit"
        title="Dashboard"
        subTitle={`Monitor your room listings, 
track bookings and analyze revenue — all in one place. 
Stay updated with real-time insights to ensure smooth operations.`}
      />

      <div className="flex gap-4 my-8 flex-wrap">
        {/* Total Bookings */}
        <div className="flex items-center bg-primary/30 border border-primary/10 rounded p-4 gap-4 w-full sm:w-auto">
          <img
            src={assets.totalBookingIcon}
            alt="Total Bookings"
            className="max-sm:hidden h-10"
          />
          <div className="flex flex-col font-medium">
            <p className="text-blue-500 text-lg">Total Bookings</p>
            <p className="text-neutral-400 text-base">
              {dashboardData.totalBookings}
            </p>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="flex items-center bg-primary/30 border border-primary/10 rounded p-4 gap-4 w-full sm:w-auto">
          <img
            src={assets.totalRevenueIcon}
            alt="Total Revenue"
            className="max-sm:hidden h-10"
          />
          <div className="flex flex-col font-medium">
            <p className="text-blue-500 text-lg">Total Revenue</p>
            <p className="text-neutral-400 text-base">
              ${dashboardData.totalRevenue}
            </p>
          </div>
        </div>
      </div>

      {/* Recent Bookings */}
      <h2 className="text-xl text-blue-950/70 font-medium mb-5">Recent Bookings</h2>
      <div className="w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-auto bg-white shadow-sm">
        <table className="w-full table-auto">
          <thead className="bg-gray-50 sticky top-0 z-10">
            <tr>
              <th className="py-3 px-4 text-gray-800 font-medium text-left">
                User Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-left hidden sm:table-cell">
                Room Name
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Total Amount
              </th>
              <th className="py-3 px-4 text-gray-800 font-medium text-center">
                Payment Status
              </th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {dashboardData.bookings.map((item, index) => (
              <tr key={index}>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300">
                  {item.user.username}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 hidden sm:table-cell">
                  {item.room.roomType}
                </td>
                <td className="py-3 px-4 text-gray-700 border-t border-gray-300 text-center">
                  ${item.totalPrice}
                </td>
                <td className="py-3 px-4 border-t border-gray-300 text-center">
                  <button
                    className={`py-1 px-3 text-xs rounded-full font-medium ${
                      item.isPaid
                        ? "bg-green-200 text-green-700"
                        : "bg-amber-200 text-yellow-700"
                    }`}
                  >
                    {item.isPaid ? "Completed" : "Pending"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
