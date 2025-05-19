import json
from ..services.gemini import chat

def generateSchedule(priorityList, examDates, dailyStudyHours, subjectwiseStrength= ""):
    instructions = """
    You are a Exam Schedule expert.
    You are given a priority list of topics for each subject, daily study hours, exam dates, and subjectwise strength.
    You must return JSON in this format:
    {
        "2025-05-20": {
            "DBMS": {
                "SQL Joins": 2,
                "ER diagrams": 1.5
            }
        },
        "2025-05-21": {
            "Software Engineering": {
                "UML diagrams": 3
            }
        }
    }
    Notes:
    The time should be given in the following way:
    1. Schedule times for each topics according to its priority.
    2. Schedule more times for the topics that are weak for student (subjectwise strength), so those topic should be given more time, but important topics should be high time.
    4. Try to focus on the topics that are most probable to be asked in the exam, using the priority list.
    5. Schdule the topics also between the exam dates, so that student can revise the topics before the exam.
    6. If there are much time between the exam dates, and student is strong in that subject, then schdule some other subject topics in that time, for the futher exams.
    Note Important: don't write json tag in the output, just return the string output in JSON format only, no extra text or explanation, so it can converted using json.loads() in python.
    """

    prompt = f"""
    Priority List: {json.dumps(priorityList)}
    Exam Dates: {json.dumps(examDates)}
    Daily Study Hours: {dailyStudyHours}
    Subjectwise Strength: {json.dumps(subjectwiseStrength)}
    Instructions: {instructions}
    """

    chat_response = chat(prompt)
    # print("Chat response:", chat_response)
    # return chat_response
    response = chat_response.strip()

    # Remove markdown code block syntax if present
    if response.startswith("```"):
        response = response.strip("`").strip()
        if response.lower().startswith("json"):
            response = response[4:].strip()  # Remove "json" prefix

    try:
        parsed = json.loads(response)
        return parsed
    except Exception as e:
        print("Failed to parse response:", response)
        return {"error": "Invalid response format", "raw": response}
