
from typing import Dict, List, Optional
from pydantic import BaseModel
from datetime import date

class StudyInput(BaseModel):
  subjectName: str
  syllabus: Dict[str, List[str]]
  unitwiseStreangth: Dict[str, str]
  examPattern: Optional[str] = ""

class ScheduleInput(BaseModel):
  priorityList: Dict[str, Dict[str, float]]
  examDate: List[date]
  dailyStudyHours: float
  subjectWiseStreangth: Dict[str, str]
