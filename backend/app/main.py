from app.utils.generateSchedule import generateSchedule
from app.utils.getTopicsWithPriority import getTopicsWithPriority

from fastapi import FastAPI
from .routes.api import router
from .middleware.logging import LoggingMiddleware
from fastapi.middleware.cors import CORSMiddleware
import os
from dotenv import load_dotenv




from pydantic import BaseModel
from typing import List

# Load environment variables
load_dotenv()

app = FastAPI(
    title=os.getenv("APP_NAME", "FastAPI Backend"),
    version=os.getenv("API_VERSION", "v1")
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allows all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allows all methods
    allow_headers=["*"],  # Allows all headers
)

# Add logging middleware
app.add_middleware(LoggingMiddleware)

# Include routes
app.include_router(router, prefix="/api")

@app.get("/")
def read_root():
    return {
        "message": "Hello World from FastAPI!",
        "app_name": os.getenv("APP_NAME", "FastAPI Backend"),
        "version": os.getenv("API_VERSION", "v1")
    } 



class Subject(BaseModel):
    name: str
    examDate: str
    syllabus: str
    unitStrengths: List[int]

class ScheduleInput(BaseModel):
    totalSubjects: int
    dailyStudyHours: str
    subjects: List[Subject]





@app.post("/generate-schedule")
async def generate_schedule(data: ScheduleInput):
    print("Received data:", data)
    all_priorities = []
    exam_dates = {}
    subjectwise_strength = {}

    for subject in data.subjects:
        subject_name = subject.name
        syllabus = subject.syllabus
        strengths = subject.unitStrengths
        exam_date = subject.examDate

        # Step 1: Generate topic priorities
        topic_priorities = getTopicsWithPriority(
            subject_name,
            syllabus,
            strengths
        )

        all_priorities.append({
            "subject": subject_name,
            "priorities": topic_priorities
        })

        # Step 2: Store exam dates
        exam_dates[subject_name] = exam_date

        # Optional: Store average subject strength
        avg_strength = sum(strengths) / len(strengths)
        subjectwise_strength[subject_name] = avg_strength

    # Step 3: Generate final schedule
    schedule = generateSchedule(
        all_priorities,
        exam_dates,
        int(data.dailyStudyHours),
        subjectwise_strength
    )

    return {
        "output": schedule,
        "message": "Schedule generated successfully"
    }