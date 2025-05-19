import { useNavigate } from "react-router-dom";
import Header from "../components/Header"
import ScheduleView from "../components/ScheduleView";

export default function Schedule() {
  
    const navigate = useNavigate();


    return (
            <>
            <Header/>
            <div className="bg-[#f1f5f9] max-w-5xl mx-auto mt-20  border-2 border-gray-200 rounded-md" >
        
           
            <div className="p-6 ">
              <div className="flex justify-between items-center mb-8" >
                <div className="text-3xl font-bold "  >Detailed Schedule</div>

                <button onClick={() => navigate ('/no-calender')} className="flex items-center py-2 px-3 rounded-md border-2 border-gray-300 bg-slate-300 hover:bg-slate-200" >
                  <img src="https://res.cloudinary.com/dfl8h4on4/image/upload/v1747615307/icons8-google-calendar-48_bsgaqd.png" alt="" />
                  <span>Add to Google Calender</span>
                </button>
              </div>


              <ScheduleView/>

            </div>
        
               </div>
            </>
    );


}



