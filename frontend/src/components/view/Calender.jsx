import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';



const localizer = momentLocalizer(moment);

// Convert our data format to events for calendar
function convertToCalendarEvents(scheduleData) {
  const events = [];
  // Map to track colors for subjects
  const subjectColors = {};
  let colorIndex = 0;
  const colors = [
    '#4299e1', // blue
    '#48bb78', // green
    '#ed8936', // orange
    '#9f7aea', // purple
    '#f56565', // red
    '#38b2ac', // teal
    '#ecc94b'  // yellow
  ];
  
  for (const [dateStr, subjects] of Object.entries(scheduleData)) {
    // Group by subject for this date
    for (const [subject, topics] of Object.entries(subjects)) {
      // Assign color to subject if not already assigned
      if (!subjectColors[subject]) {
        subjectColors[subject] = colors[colorIndex % colors.length];
        colorIndex++;
      }
      
      // Calculate total hours for this subject on this day
      let totalHours = 0;
      const topicsList = [];
      
      for (const [topic, duration] of Object.entries(topics)) {
        totalHours += parseHours(duration);
        topicsList.push(`${topic} (${duration})`);
      }
      
      // Create one all-day event per subject
      events.push({
        title: `${subject}: ${totalHours}hrs`,
        start: new Date(dateStr),
        end: new Date(dateStr),
        allDay: true,
        subject: subject,
        color: subjectColors[subject],
        topics: topicsList
      });
    }
  }
  
  return events;
}


 function handleSelectEvent(event) {
    setSelectedEvent(event);
  }

  function parseHours(durationStr) {
  return parseFloat(durationStr.replace('hrs', '').replace('hr', ''));
}



export default function Calender({ scheduleData }) {



      const calendarEvents = convertToCalendarEvents(scheduleData);

      const EventComponent = ({ event }) => (
            <div 
            className="text-xs p-1 overflow-hidden text-ellipsis whitespace-nowrap text-white rounded"
            style={{ backgroundColor: event.color }}
            >
            {event.title}
            </div>
        );






    return (
        


        <div className="bg-white rounded-lg shadow p-4" style={{ height: "600px" }}>
                  <div className="mb-4">
                    <h3 className="text-lg font-semibold">Monthly Study Plan</h3>
                    <p className="text-sm text-gray-600">Click on a subject to see topics</p>
                  </div>
                  
                  <div className="mb-3 flex flex-wrap gap-2">
                    {Object.entries(Object.entries(scheduleData).reduce((acc, [_, subjects]) => {
                      Object.keys(subjects).forEach(subject => {
                        acc[subject] = true;
                      });
                      return acc;
                    }, {})).map(([subject, _], index) => {
                      const color = ['#4299e1', '#48bb78', '#ed8936', '#9f7aea', '#f56565', '#38b2ac', '#ecc94b'][index % 7];
                      return (
                        <div key={subject} className="flex items-center">
                          <span className="w-3 h-3 rounded-full mr-1" style={{ backgroundColor: color }}></span>
                          <span className="text-xs">{subject}</span>
                        </div>
                      );
                    })}
                  </div>
                  
                  <Calendar
                    localizer={localizer}
                    events={calendarEvents}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                    views={['month']}
                    defaultView="month"
                    components={{
                      event: EventComponent
                    }}
                    onSelectEvent={handleSelectEvent}
                  />
                </div>

    );
    }