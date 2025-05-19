import { Calendar, Clock } from 'lucide-react';

export default function Cards({ scheduleData }) {
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
        total += parseInt(duration);
      }
    }
    return total.toFixed(1);
  }

  // Simple accent colors for subjects
  const accentColors = [
    '#3B82F6', // blue
    '#10B981', // emerald
    '#F59E0B', // amber
    '#8B5CF6', // violet
    '#EC4899', // pink
    '#06B6D4', // cyan
  ];

  function getSubjectColor(index) {
    return accentColors[index % accentColors.length];
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Object.entries(scheduleData).map(([date, subjects], dateIndex) => (
        <div 
          key={date} 
          className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
        >
          <div className="bg-[#2563EB] text-white p-3 flex justify-between items-center">
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{formatDate(date)}</span>
            </div>
            <span className="text-sm flex items-center">
              <Clock size={14} className="mr-1" />
              {getTotalHours(subjects)} hrs
            </span>
          </div>
          <div className="p-4">
            {Object.entries(subjects).map(([subject, topics], subjectIndex) => {
              const color = getSubjectColor(subjectIndex);
              return (
                <div key={subject} className="mb-10  last:mb-0">
                  <h3 
                    className="font-medium mb-2 text-left"
                    style={{ color }}
                  >
                    {subject}
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(topics).map(([topic, duration], topicIndex) => (
                      <div 
                        key={topic} 
                        className="pl-3"
                        style={{ borderLeft: `2px solid ${color}` }}
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-gray-800">{topic}</div>
                          <span className="text-gray-500 text-sm flex items-center">
                            <Clock size={12} className="mr-1" style={{ color }} />
                            {duration}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}