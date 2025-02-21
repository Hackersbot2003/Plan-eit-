import React, { useState } from "react";
import Image from "../assets/yourImage2.png";

const Bike = [
  {
    Rental_Service_Name: "GoBikes",
    ID: 13,
    Location: "Shimla",
    Website: "https://gobikes.co.in/shimla/bike-rentals",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQp1X0YNQIuQ-1GSk_y33k52qhYlkGMgkx05w&s",
  },
  {
    Rental_Service_Name: "Mountaineer Riders",
    ID: 14,
    Location: "Shimla",
    Website: "https://mountaineerriders.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDD1qsGASydQQOeMXs8WZKuVl6jzXhe7VHmQ&s",
  },
  {
    Rental_Service_Name: "Gulliver Adventures",
    ID: 15,
    Location: "Manali",
    Website: "https://gulliveradventures.com/",
    image:
      "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/12/d5/5e/dd/bike-on-rent-manali.jpg?w=1200&h=-1&s=1",
  },
  {
    Rental_Service_Name: "Big Bike Rentals",
    ID: 16,
    Location: "Manali",
    Website: "https://www.bigbikerentals.com/",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPr8ld7GQAq2cX6sM1AwXG8Ps8rOFeynQRpQ&s",
  },
];

const Rent = () => {
  const [selectedLocation, setSelectedLocation] = useState("All");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
  };

  const filteredBikes =
    selectedLocation === "All"
      ? Bike
      : Bike.filter((rental) => rental.Location === selectedLocation);

  return (
    <div className="bg-[#e1e2dc] flex flex-row justify-center w-full">
      <div className="overflow-hidden w-[1536px] h-[1410px]">
        <div
          className="relative h-[1410px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${Image})`,
          }}
        >
          <p className="absolute w-[728px] top-[200px] left-[378px] [-webkit-text-stroke:1px_#000000] [font-family:'Source_Sans_Pro-Light',Helvetica] font-normal text-black text-[45px] tracking-[0] leading-[normal]">
            <span className="font-light ml-5">Ride Ready,</span>
            <span className="[font-family:'Source_Sans_Pro-Regular',Helvetica]">
              {" "}
              Anytime,  Anywhere
            </span>
          
          </p>

          <div className="absolute w-[785px] h-[143px] top-[300px] left-[382px]">
            <div className="w-[727px] h-[50px] left-6 absolute bg-[#d9d9d9] rounded-[10px] border border-gray-300 shadow-sm">
              <select
                value={selectedLocation}
                onChange={handleLocationChange}
                className="w-full h-full bg-transparent border-none p-2 text-black text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
              >
                <option value="All">All Locations</option>
                <option value="Shimla">Shimla</option>
                <option value="Manali">Manali</option>
              </select>
            </div>
           
          </div>

          <div className="absolute w-[785px] top-[400px] left-[382px] grid grid-cols-2 gap-8 rounded-xl backdrop-blur-lg bg-white/30 border border-white/20 shadow-lg p-6">
            {filteredBikes.map((rental) => (
              <a
                key={rental.ID}
                href={rental.Website}
                target="_blank"
                rel="noopener noreferrer"
                className="block overflow-hidden rounded-xl shadow-lg bg-white hover:shadow-2xl transition-all transform hover:scale-105"
              >
                <div className="w-full h-48">
                  <img
                    src={rental.image}
                    alt={rental.Rental_Service_Name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    {rental.Rental_Service_Name}
                  </h2>
                  <p className="text-gray-600">
                    <span className="font-medium text-gray-700">Location:</span>{" "}
                    {rental.Location}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {filteredBikes.length === 0 && (
            <p className="absolute w-full text-center text-gray-500 top-[900px] left-[382px]">
              No rentals available for the selected location.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Rent;
