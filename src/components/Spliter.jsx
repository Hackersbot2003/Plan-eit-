import React, { useState } from "react";
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import Image from '../assets/yourImage2.png'; 

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#845EC2", "#D65DB1"];
//used colur pallets for spliter

const Frame = () => {
  const [entries, setEntries] = useState([]);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [group, setGroup] = useState("friends");
  const [number, setNumber] = useState("");

  const handleAddEntry = () => {
    if (title && price) {
      setEntries([...entries, { title, price: parseFloat(price) }]);
      setTitle("");
      setPrice("");
    }
  };

  const calculateEachPays = () => {
    const total =  entries.reduce((sum, entry) => sum + entry.price, 0);
    const friends =   parseInt(number);
    return friends > 0 ? (total / friends).toFixed(2) : "0.00"; 
  };

  return (
    <div className="flex flex-row justify-center w-full bg-cover bg-center">
      <div className="bg-[#e1e2dc] w-[1536px] h-[1410px]">
        <div
          className="relative h-[1410px] bg-cover bg-center"
          style={{
            backgroundImage: `url(${Image})`,
          }}
        >
          <div className="flex">
            <p      className="absolute w-[800px] top-[95px] left-[453px] font-sans font-normal text-black text-5xl tracking-[0] leading-[normal]">
              <span className="font-normal text-black">Trip </span>
              <span    className="font-bold">Expense Splitter</span>
            </p>
          </div>

          <div className="absolute w-[1229px] h-[1039px] top-[273px] left-[154px] bg-[#d9d9d961] rounded-xl backdrop-blur-[70px]">
            <div className="absolute w-[302px] h-[93px] top-[43px] left-[49px]">
              <input
                type="text"
                placeholder="Expense Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="absolute w-[300px] h-[50px] top-[43px] bg-[#d9d9d9] rounded-[10px] p-2"
              />
              <p className="absolute w-[150px] top-0 font-light text-black text-xl">Expense Type</p>
            </div>

            <div className="absolute top-[174px] left-[49px] w-[302px] h-[93px]">
              <select
                value={group}
                onChange={(e) => setGroup(e.target.value)}
                className="absolute w-[300px] h-[50px] top-[43px] bg-[#d9d9d9] rounded-[10px] p-2"
              >
                <option value="friends">Friends</option>
                <option value="family">Family</option>
              </select>
              <p className="absolute w-[135px] top-0 font-light text-black text-xl">Group</p>
            </div>

            <div className="absolute top-[39px] left-[446px] w-[302px] h-[93px]">
              <input
                type="number"
                placeholder="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="absolute w-[300px] h-[50px] top-[43px] bg-[#d9d9d9] rounded-[10px] p-2"
              />
              <p className="absolute w-[135px] top-0 font-light text-black text-xl">Price</p>
            </div>

            <div className="absolute top-[174px] left-[446px] w-[302px] h-[93px]">
              <input
                type="number"
                placeholder="Number of People"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="absolute w-[300px] h-[50px] top-[43px] bg-[#d9d9d9] rounded-[10px] p-2"
              />
              <p className="absolute w-[150px] top-0 font-light text-black text-xl">No. Of People</p>
            </div>

            <div className="absolute w-[186px] h-[65px] top-[133px] left-[923px]">
              <button
                onClick={handleAddEntry}
                className="w-full h-full bg-[#1a2f32] rounded-xl text-[#e1e2dc] font-bold text-xl"
              >
                ADD ENTRY
              </button>
            </div>

            <div className="absolute w-[1105px] h-[636px] top-[343px] left-[62px] bg-[#d9d9d9] rounded-xl">
              <p className="absolute top-[33px] left-8 text-2xl font-normal text-black">Entries:</p>
              <ul className="absolute top-[80px] left-8 w-[600px] h-[500px] overflow-y-auto">
                {entries.map((entry, index) => (
                  <li key={index} className="border-b py-2 text-xl">
                    {entry.title}: ₹{entry.price.toFixed(2)}
                  </li>
                ))}
              </ul>
              <p className="absolute top-[39px] left-[684px] text-2xl font-normal text-black">
                Total Expense: ₹{entries.reduce((sum, entry) => sum + entry.price, 0).toFixed(2)}
              </p>
              <p className="absolute top-[91px] left-[686px] text-2xl font-normal text-black">
                Each Pays: ₹{calculateEachPays()}
              </p>

              <div className="absolute top-[200px] left-[50px] w-[500px] h-[400px]">
                {entries.length > 0 && (
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={entries} margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="title" />
                      <YAxis />
                      <Tooltip />
                      <Bar dataKey="price" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                )}
              </div>

              <div className="absolute top-[200px] left-[580px] w-[500px] h-[400px]">
                {entries.length > 0 && (
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={entries}
                        dataKey="price"
                        nameKey="title"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        fill="#8884d8"
                        label
                      >
                        {entries.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;
