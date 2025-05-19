import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, Clock, BookOpen, GraduationCap } from 'lucide-react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Table from './view/Table';
import Cards from './view/Cards';
import Calender from './view/Calender';
import { useLocation } from 'react-router-dom';
import { exportScheduleAsPdf } from '../services/exportPdf';






export default function ScheduleView() {
  const [scheduleData, setScheduleData] = useState({});
  const [activeView, setActiveView] = useState('table'); 
  const [selectedEvent, setSelectedEvent] = useState(null);
  const location = useLocation();
  const { state } = location;


  
  console.log("ScheduleView state:", JSON.stringify(state, null, 2));


  useEffect(() => {
    if (state && state.schedule) {
      console.log("ScheduleView state.schedule:", JSON.stringify(state.schedule, null, 2));
      setScheduleData(state.schedule);
    }
  }
  , [state]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold flex items-center">
          <GraduationCap className="mr-2" size={24} />
          My Study Schedule
        </h1>
        <button 
        onClick={() => exportScheduleAsPdf(scheduleData)}
        className='text-md font-semibold rounded-md text-white bg-black py-2 px-3 hover:bg-[#444444] cursor-pointer' >Export As PDF</button>
      </div>
      
      <div className="flex mb-6 gap-4">
        <button 
          className={`px-4 py-2 rounded ${activeView === 'table' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveView('table')}
        >
          Detailed View
        </button>
        <button 
          className={`flex items-center gap-2 px-4 py-2 rounded ${activeView === 'cards' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveView('cards')}
        >
          <BookOpen size={16} />
          <span>Cards</span>
        </button>
        <button 
          className={`flex items-center gap-2 px-4 py-2 rounded ${activeView === 'calendar' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          onClick={() => setActiveView('calendar')}
        >
          <CalendarIcon size={16} />
          <span>Calendar</span>
        </button>
      </div>
      
      {/* Event details modal - simplified */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <h3 className="text-lg font-bold mb-2">{selectedEvent.title}</h3>
            
            <h4 className="font-medium mt-4 mb-2">Topics:</h4>
            <ul className="list-disc pl-5 mb-4">
              {selectedEvent.topics && selectedEvent.topics.map((topic, i) => (
                <li key={i}>{topic}</li>
              ))}
            </ul>
            
            <button 
              onClick={() => setSelectedEvent(null)}
              className="px-4 py-2 bg-blue-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
      
      {activeView === 'table' && (
         <Table scheduleData={scheduleData} />
      )}

      {activeView === 'cards' && (
        <Cards scheduleData={scheduleData} />
      )}
      
      {activeView === 'calendar' && (
        <Calender scheduleData={scheduleData} />
      )}
    </div>
  );
}