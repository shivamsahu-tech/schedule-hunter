import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



const dummyInput = {
  "totalSubjects": 2,
  "dailyStudyHours": "5",
  "subjects": [
    {
      "name": "Software Engineering",
      "examDate": "2025-06-06",
      "syllabus": "Unit 1: Software process models, Agile development\nUnit 2: Requirements engineering, Use case modeling\nUnit 3: Design concepts, Software architecture\nUnit 4: Testing strategies, Black-box and White-box testing\nUnit 5: Software project management, Estimation, Risk analysis",
      "unitStrengths": [80, 60, 70, 50, 40]
    },
    {
      "name": "DBMS",
      "examDate": "2025-06-09",
      "syllabus": "Unit 1: Relational databases, ER diagrams, normalization\nUnit 2: SQL queries, joins, subqueries, indexing\nUnit 3: Transactions, concurrency control, recovery\nUnit 4: NoSQL databases, MongoDB, distributed databases",
      "unitStrengths": [65, 70, 55, 45]
    }
  ]
}



export default function InputForm() {
  const [totalSubjects, setTotalSubjects] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [subjects, setSubjects] = useState([
    { name: '', examDate: '', syllabus: '', unitStrengths: [50, 50] },
  ]);

  const [dailyStudyHours, setDailyStudyHours] = useState('');


  useEffect(() => {
    const newSubjects = [...subjects];
    
    if (totalSubjects > subjects.length) {
      for (let i = subjects.length; i < totalSubjects; i++) {
        newSubjects.push({ 
          name: '', 
          syllabusDescription: '', 
          totalUnits: 2, 
          unitStrengths: [50, 50] 
        });
      }
    }
    else if (totalSubjects < subjects.length) {
      newSubjects.splice(totalSubjects);
    }
    
    setSubjects(newSubjects);
  }, [totalSubjects]);







// done
  const changeUnitCounts = (subjectIndex, newUnitCount) => {
    const newSubjects = [...subjects];
    const subject = newSubjects[subjectIndex];

    const arr = new Array(newUnitCount).fill(50);    
    subject.unitStrengths = arr;
    setSubjects(newSubjects);

  };



  const handleUnitStrengthChange = (subjectIndex, unitIndex, value) => {
    const newSubjects = [...subjects];
    newSubjects[subjectIndex].unitStrengths[unitIndex] = value;
    setSubjects(newSubjects);
  };



  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const userData = {
        totalSubjects,
        dailyStudyHours,
        subjects,
    }

    const result = await fetch('http://localhost:3001/generate-schedule', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dummyInput),
    })

    const response = await result.json();
    console.log(response);
    setLoading(false);
    navigate('/schedule', {
      state: {
        schedule: response,
      },
    });
  };





  return (






   <div className="bg-[#f1f5f9] border-2 mx-auto max-w-5xl mt-[100px] rounded-2xl p-8 shadow-md">

  <div className="text-3xl font-bold text-left mb-12">📘 Enclose Subject Details</div>



  <div className="mb-8 flex items-center">
    <label className="text-xl font-semibold mr-6">Daily Study Hours:</label>
    <input
      type="number"
      className="border border-[#94a3b8]  flex-1 px-4 py-2 rounded-lg shadow-sm focus:outline-none focus:border-blue-400"
      onChange={(e) => setDailyStudyHours(e.target.value)}
    />
  </div>




  <div className="text-2xl font-semibold text-left mb-6">📚 Subject Details</div>

  {subjects.map((subject, subjectIndex) => (
    <div key={subjectIndex} className="mb-10 border border-black text-[#0f172a] rounded-2xl p-6 shadow-sm">
      
      <div className="mb-5 flex items-center">
        <label className="mr-4 font-medium">Subject Name:</label>
        <input
          type="text"
          value={subject.name}
          onChange={(e) => {
            const newSubjects = [...subjects];
            newSubjects[subjectIndex].name = e.target.value;
            setSubjects(newSubjects);
          }}
          className="border border-[#94a3b8] rounded-lg flex-1 px-3 py-2 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="mb-5 flex items-center">
        <label className="mr-4 font-medium">Exam Date:</label>
        <input
          type="date"
          value={subject.examDate}
          onChange={(e) => {
            const newSubjects = [...subjects];
            newSubjects[subjectIndex].examDate = e.target.value;
            setSubjects(newSubjects);
          }}
          className="border border-[#94a3b8] rounded-lg flex-1 px-3 py-2 focus:outline-none focus:border-blue-400"
        />
      </div>

      <div className="flex mb-5">
        <div className="font-medium mr-3 text-[#1e293b]">Syllabus:</div>
        <textarea
          placeholder="Paste or write your syllabus here..."
          className="flex-1 border border-[#94a3b8] bg-[#f8fafc] rounded-lg p-3 focus:outline-none focus:border-[#2563eb]"
          onChange={(e) => {
            const newSubjects = [...subjects];
            newSubjects[subjectIndex].syllabus = e.target.value;
            setSubjects(newSubjects);
          }}
        />
      </div>

      <div className="font-medium mb-3 text-left text-lg">📈 Your Unit-wise Strength</div>

      <div className="border border-[#94a3b8] bg-[#f8fafc] rounded-xl p-5">
        <div className="mb-6 flex items-center">
          <label className="mr-4 font-medium text-[#1e293b]">Total Units:</label>
          <input
            type="number"
            value={subject.unitStrengths.length}
            onChange={(e) => changeUnitCounts(subjectIndex, parseInt(e.target.value) || 1)}
            min={1}
            className="border border-[#94a3b8] rounded-lg flex-1 px-3 py-2 focus:outline-none focus:border-[#2563eb]"
          />
        </div>

        {subject.unitStrengths.map((strength, unitIndex) => (
          <div key={unitIndex} className="mb-4 flex items-center justify-between">
            <label className="w-[140px] text-[#1e293b]">Unit {unitIndex + 1} — {strength}%</label>
            <input
              type="range"
              min="0"
              max="100"
              value={strength}
              onChange={(e) => handleUnitStrengthChange(subjectIndex, unitIndex, parseInt(e.target.value))}
              className="w-[200px] h-2 bg-[#cbd5e1] rounded-lg appearance-none cursor-pointer accent-[#2563eb]"
            />
          </div>
        ))}
      </div>
    </div>
  ))}

  <div className="flex justify-between items-center mb-10">
    <button
      onClick={() => setTotalSubjects(totalSubjects + 1)}
      className="px-5 py-2 border-2 border-[#0f172a] rounded-lg"
    >
      ➕ Add Subject
    </button>

    <button
      onClick={() => setTotalSubjects(totalSubjects - 1)}
      className="px-5 py-2 border-2 border-[#0f172a] rounded-lg "
    >
      <span className='text-xl text-red-600 font-semibold' >❌</span> Remove Last Subject
    </button>
  </div>

  <button
    onClick={handleSubmit}
    className="w-full bg-[#2563eb] hover:bg-[#1d4ed8] text-white py-4 rounded-xl font-bold text-lg shadow-sm transition"
  >
    🎯 Generate Schedule
  </button>
</div>

  );
}