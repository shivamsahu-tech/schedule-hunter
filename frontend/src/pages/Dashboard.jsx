import React, { useState } from "react";
import Header from "../components/Header";


const initialSchedules = [
  {
    id: "1",
    name: "Schedule 1",
    timestamp: "2025-05-18 10:00 AM",
    fileUrl: "/files/schedule1.pdf",
  },
  {
    id: "2",
    name: "Schedule 2",
    timestamp: "2025-05-19 2:30 PM",
    fileUrl: "/files/schedule2.pdf",
  },
];

export default function Dashboard() {
  const [plans, setPlans] = useState(initialSchedules);

  const deleteSchedule = (id) => {
    setPlans((prev) => prev.filter((s) => s.id !== id));
  };

  const openSchedule = (fileUrl) => {
    window.open(fileUrl, "_blank");
  };

  return (
    <>
    <Header/>
    <div className="bg-[#f1f5f9] max-w-5xl mx-auto mt-20  border-2 border-gray-200 rounded-md" >

   
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-8 text-left w-full  ">Your Past Schedules</h2>

      {plans.map((item) => (
        <div

          key={item.id}
          onClick={() => openSchedule(item.fileUrl)}
          className="flex items-center justify-between p-4 mb-2 bg-white shadow rounded-xl hover:bg-gray-50 transition"
        >
 
        <div className="font-semibold">{item.name}</div>
        <div className="text-sm text-gray-500">{item.timestamp}</div>
          <button
            onClick={() => deleteSchedule(item.id)}
            className="text-red-500 hover:text-red-700"
          >
            delete
          </button>
        </div>
      ))}
    </div>

       </div>
    </>
  );
}
