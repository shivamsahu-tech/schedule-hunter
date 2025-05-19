import React, { useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Trash2, Calendar } from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [allSchedules, setAllSchedules] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem("schedules")) || [];
  } catch (e) {
    return [];
  }
});



  const deleteSchedule = (index) => {
    const allSchedules = JSON.parse(localStorage.getItem('schedules') || '[]');
    allSchedules.splice(index, 1);
    localStorage.setItem('schedules', JSON.stringify(allSchedules));
    setAllSchedules(allSchedules);
  }



  const openSchedule = (index) => {
    const allSchedules = JSON.parse(localStorage.getItem('schedules') || '[]');
    localStorage.setItem('schedules', JSON.stringify(allSchedules));
    navigate('/schedule', {
      state: {
        schedule: allSchedules[index].schedule
      },
    });
  };

  return (
    <>
    <Header/>
    <div className="bg-[#f1f5f9] max-w-5xl mx-auto mt-20  border-2 border-gray-200 rounded-md" >

   
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-8 text-left w-full "><span className=" border-b-2 border-black   pr-2" >Your Past Schedules</span></h2>

      {allSchedules ? allSchedules.map((obj, index) => (
        <div
          key={index}
          onClick={() => openSchedule(index)}
          className="flex items-center justify-between p-4 mb-2 bg-white shadow rounded-xl hover:bg-gray-50 transition hover:cursor-pointer"
        >
          <div className="font-semibold">{obj.scheduleName  }</div>
          <div className="text-sm text-gray-500">{obj.date}</div>
          <button
            onClick={(e) => {
              e.stopPropagation(); // prevent triggering openSchedule when clicking delete
              deleteSchedule(index);
            }}
            className="text-red-500 hover:text-red-700"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      )) : (
        <button className=" mx-auto bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-200 font-medium flex items-center justify-center">
          <Calendar className="mr-2 h-5 w-5" />
          Create your first schedule
        </button>
      )}
    </div>

       </div>
    </>
  );
}
