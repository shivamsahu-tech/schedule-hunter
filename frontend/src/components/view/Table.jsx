import { Calendar, Clock } from 'lucide-react';
import 'react-big-calendar/lib/css/react-big-calendar.css';

export default function Table({ scheduleData }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      month: 'short',
      day: 'numeric'
    });
  }


  function getTotalHours(subjects) {
    let total = 0;
    for (const subject of Object.values(subjects)) {
      for (const duration of Object.values(subject)) {
        total += parseInt(duration)
      }
    }
    return total.toFixed(1);
  }

  // Function to get alternating row colors
  function getRowColor(index) {
    return index % 2 === 0 ? 'bg-white' : 'bg-gray-50';
  }

  return (
    <div className="border rounded-lg shadow-md overflow-hidden border-gray-200 max-w-4xl mx-auto">
      {Object.entries(scheduleData).map(([date, subjects], dateIndex) => (
        <div
          key={date}
          className="mb-8 overflow-hidden border border-gray-300 rounded-lg shadow-sm last:mb-0"
        >
          <div className="p-4 font-semibold text-left flex items-center justify-between bg-gradient-to-r from-blue-600 to-blue-500 text-white">
            <div className="flex items-center">
              <Calendar size={18} className="mr-2" />
              {formatDate(date)}
            </div>
            <div className="flex items-center text-sm bg-blue-700 py-1 px-3 rounded-full">
              <Clock size={16} className="mr-1" />
              {getTotalHours(subjects)} hrs
            </div>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="px-4 py-3 text-left text-gray-700 font-medium text-sm">Subject</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium text-sm">Topic</th>
                <th className="px-4 py-3 text-left text-gray-700 font-medium text-sm">Duration</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(subjects).flatMap(([subject, topics], subjectIndex) =>
                Object.entries(topics).map(([topic, duration], topicIndex, topicArr) => (
                  <tr 
                    key={`${subject}-${topic}`} 
                    className={`${getRowColor(subjectIndex + topicIndex)} hover:bg-blue-50 transition-colors duration-150`}
                  >
                    {topicIndex === 0 ? (
                      <td
                        rowSpan={Object.keys(topics).length}
                        className="px-4 py-3 font-medium border-r border-gray-200 text-left text-blue-700"
                      >
                        {subject}
                      </td>
                    ) : null}
                    <td className="px-4 py-3 text-left text-gray-800">{topic}</td>
                    <td className="px-4 py-3 flex items-center">
                      <Clock size={16} className="mr-2 text-blue-500" />
                      <span className="text-gray-700">{duration}</span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  )
}