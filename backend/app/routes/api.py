from fastapi import APIRouter, HTTPException
from ..controllers.user_controller import UserController
from ..models.user import User
from .schemas import StudyInput, ScheduleInput
from ..utils.generateSchedule import generateScheduleFromPriorities
from ..utils.getTopicsWithPriority import getTopicsWithPriority

router = APIRouter()

@router.get("/users", response_model=list[User])
def get_users():
    return UserController.get_users()

@router.get("/users/{user_id}", response_model=User)
def get_user(user_id: int):
    user = UserController.get_user(user_id)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user

@router.post("/users", response_model=User)
def create_user(user: User):
    return UserController.create_user(user) 

@router.post("/generate-priority")
def generate_priority(data: StudyInput):
    result = getTopicsWithPriority(
        subjectName=data.subjectName,
        syllabus=data.syllabus,
        unitwiseStrength=data.unitwiseStreangth,
        examPattern=data.examPattern or ""
    )
    return { "priorityList": result }

@router.post("/generate-schedule")
def generate_schedule(data: ScheduleInput):
    result = generateScheduleFromPriorities(
        priorityList=data.priorityList,
        examDates=data.examDate,
        dailyStudyHours=data.dailyStudyHours,
        subjectwiseStrength=data.subjectWiseStreangth
    )
    return { "schedule": result }