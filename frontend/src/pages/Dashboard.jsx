import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { Trash2, Calendar } from "lucide-react";

const dummyData = [
  {
    scheduleName: "Demo Schedule ",
    date: "2023-10-01",
    schedule:  {
    "2025-05-20": {
      "Software Engineering": {
        "Agile development": 1.5,
        "Software process models": 1
      },
      "DBMS": {
        "ER diagrams": 1,
        "Relational databases": 1
      }
    },
    "2025-05-21": {
      "Software Engineering": {
        "Requirements engineering": 1.5,
        "Use case modeling": 1
      },
      "DBMS": {
        "SQL queries": 1.5,
        "Joins": 1
      }
    },
    "2025-05-22": {
      "Software Engineering": {
        "Software architecture": 1.5,
        "Design concepts": 1
      },
      "Operating Systems": {
        "Introduction to OS": 1,
        "System calls": 0.5,
        "Process management": 1
      }
    },
    "2025-05-23": {
      "Software Engineering": {
        "Black-box and White-box testing": 1.5,
        "Testing strategies": 1
      },
      "Operating Systems": {
        "CPU scheduling algorithms": 1.5,
        "Multithreading": 1
      }
    },
    "2025-05-24": {
      "Software Engineering": {
        "Software project management": 1.5,
        "Estimation": 1
      },
      "DBMS": {
        "Transactions": 1.5,
        "Concurrency control": 1
      }
    },
    "2025-05-25": {
      "Operating Systems": {
        "Memory management": 1.5,
        "Paging": 1
      },
      "DBMS": {
        "NoSQL databases": 1.5,
        "MongoDB": 1
      }
    },
    "2025-05-26": {
      "Operating Systems": {
        "Segmentation": 1.5,
        "File systems": 1
      },
      "DBMS": {
        "Distributed databases": 1,
        "Indexing": 0.5
      },
      "Software Engineering": {
        "Risk analysis": 0.5
      }
    },
    "2025-05-27": {
      "Software Engineering": {
        "Agile development": 0.5,
        "Software process models": 0.5
      },
      "Operating Systems": {
        "Disk scheduling": 1,
        "I/O systems": 0.5
      },
      "DBMS": {
        "SQL queries": 0.5
      }
    },
    "2025-05-28": {
      "Software Engineering": {
        "Requirements engineering": 0.5,
        "Use case modeling": 0.5
      },
      "DBMS": {
        "ER diagrams": 0.5
      },
      "Operating Systems": {
        "Process management": 0.5
      }
    },
    "2025-05-29": {
      "Software Engineering": {
        "Software architecture": 0.5,
        "Design concepts": 0.5
      },
      "DBMS": {
        "Transactions": 0.5
      },
      "Operating Systems": {
        "CPU scheduling algorithms": 0.5
      }
    },
    "2025-05-30": {
      "Software Engineering": {
        "Black-box and White-box testing": 0.5,
        "Testing strategies": 0.5
      },
      "DBMS": {
        "NoSQL databases": 0.5
      },
      "Operating Systems": {
        "Memory management": 0.5
      }
    },
    "2025-05-31": {
      "Software Engineering": {
        "Software project management": 0.5,
        "Estimation": 0.5
      },
      "DBMS": {
        "Normalization": 0.5
      },
      "Operating Systems": {
        "File systems": 0.5
      }
    },
    "2025-06-05": {
      "Software Engineering": {
        "Revision": 5
      }
    },
    "2025-06-06": {
      "Software Engineering": {
        "Revision": 5
      }
    },
    "2025-06-07": {
      "DBMS": {
        "Revision": 2
      },
      "Operating Systems": {
        "Revision": 3
      }
    },
    "2025-06-08": {
      "DBMS": {
        "Revision": 3
      },
      "Operating Systems": {
        "Revision": 2
      }
    },
    "2025-06-09": {
      "DBMS": {
        "Revision": 5
      }
    },
    "2025-06-10": {
      "Operating Systems": {
        "Revision": 3
      },
      "Software Engineering": {
        "Revision": 2
      }
    },
    "2025-06-11": {
      "Operating Systems": {
        "Revision": 2
      },
      "Software Engineering": {
        "Revision": 3
      }
    },
    "2025-06-12": {
      "Operating Systems": {
        "Revision": 5
      }
    },
    "2025-06-13": {
      "Operating Systems": {
        "Revision": 5
      }
    }
  }
  }
];

export default function Dashboard() {

  useEffect(() => {
    const allSchedules = JSON.parse(localStorage.getItem('schedules') || '[]');
    if (allSchedules.length === 0) {
      localStorage.setItem('schedules', JSON.stringify(dummyData));
    }
  }, []);
  

  const navigate = useNavigate();
  const [allSchedules, setAllSchedules] = useState(() => {
  try {
    return JSON.parse(localStorage.getItem('schedules') || dummyData);
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
