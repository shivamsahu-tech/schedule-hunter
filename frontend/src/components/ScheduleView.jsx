import { useState } from 'react';
import { Calendar as CalendarIcon, Clock, BookOpen, GraduationCap } from 'lucide-react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Table from './view/Table';
import Cards from './view/Cards';
import Calender from './view/Calender';

// Set up the calendar localizer


// Simplified data structure as requested
const initialScheduleData = {
  "2025-05-20": {
    "Computer Science": {
      "Database Systems": "1hr",
      "Algorithms": "2hrs"
    }
  },
  "2025-05-21": {
    "Computer Science": {
      "Network Security": "1.5hrs"
    },
    "Mathematics": {
      "Calculus": "1hr"
    }
  },
  "2025-05-22": {
    "Computer Science": {
      "Machine Learning": "2hrs",
      "Web Development": "1hr"
    }
  },
  "2025-05-23": {
    "Software Engineering": {
      "Design Patterns": "1.5hrs"
    },
    "Computer Science": {
      "Mobile Development": "1hr"
    }
  },
  "2025-05-24": {
    "Computer Science": {
      "Artificial Intelligence": "2hrs",
      "Data Structures": "1.5hrs"
    }
  }
};

// Convert hours string to number




export default function ScheduleView() {
  const [scheduleData, setScheduleData] = useState(initialScheduleData);
  const [activeView, setActiveView] = useState('table'); // 'table', 'cards', or 'calendar'
  const [selectedEvent, setSelectedEvent] = useState(null);
  

 

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6 flex items-center">
        <GraduationCap className="mr-2" size={24} />
        My Study Schedule
      </h1>
      
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
      
      {/* Table View - with day partitions */}
      {activeView === 'table' && (
         <Table scheduleData={scheduleData} />
      )}

      {/* Card View - simplified */}
      {activeView === 'cards' && (
        // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        //   {Object.entries(scheduleData).map(([date, subjects]) => (
        //     <div key={date} className="border rounded-lg overflow-hidden shadow-sm">
        //       <div className="bg-blue-500 text-white px-4 py-2 font-semibold flex justify-between items-center">
        //         <span>{formatDate(date)}</span>
        //         <span className="text-sm">Total: {getTotalHours(subjects)} hrs</span>
        //       </div>
        //       <div className="p-4">
        //         {Object.entries(subjects).map(([subject, topics]) => (
        //           <div key={subject} className="mb-4">
        //             <h3 className="font-medium border-b pb-1 mb-2">
        //               {subject}
        //             </h3>
                    
        //             {Object.entries(topics).map(([topic, duration]) => (
        //               <div key={topic} className="mb-3 pl-3 border-l-2 border-gray-200">
        //                 <div className="flex justify-between items-center">
        //                   <div className="font-medium">{topic}</div>
        //                   <span className="text-sm text-gray-500 flex items-center">
        //                     <Clock size={14} className="mr-1" />
        //                     {duration}
        //                   </span>
        //                 </div>
        //               </div>
        //             ))}
        //           </div>
        //         ))}
        //       </div>
        //     </div>
        //   ))}
        // </div>
        <Cards scheduleData={scheduleData} />
      )}
      
      {/* Calendar View - month only */}
      {activeView === 'calendar' && (

        // <div className="bg-white rounded-lg shadow p-4" style={{ height: "600px" }}>
        //   <div className="mb-4">
        //     <h3 className="text-lg font-semibold">Monthly Study Plan</h3>
        //     <p className="text-sm text-gray-600">Click on a subject to see topics</p>
        //   </div>
          
        //   <div className="mb-3 flex flex-wrap gap-2">
        //     {Object.entries(Object.entries(scheduleData).reduce((acc, [_, subjects]) => {
        //       Object.keys(subjects).forEach(subject => {
        //         acc[subject] = true;
        //       });
        //       return acc;
        //     }, {})).map(([subject, _], index) => {
        //       const color = ['#4299e1', '#48bb78', '#ed8936', '#9f7aea', '#f56565', '#38b2ac', '#ecc94b'][index % 7];
        //       return (
        //         <div key={subject} className="flex items-center">
        //           <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: color }}></span>
        //           <span className="text-xs">{subject}</span>
        //         </div>
        //       );
        //     })}
        //   </div>
          
        //   <Calendar
        //     localizer={localizer}
        //     events={calendarEvents}
        //     startAccessor="start"
        //     endAccessor="end"
        //     style={{ height: 500 }}
        //     views={['month']}
        //     defaultView="month"
        //     components={{
        //       event: EventComponent
        //     }}
        //     onSelectEvent={handleSelectEvent}
        //   />
        // </div>
        <Calender scheduleData={scheduleData} />
      )}
    </div>
  );
}