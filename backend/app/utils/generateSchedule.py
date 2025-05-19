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
                "ER diagrams": 1
            },
            Math1: {
                "Calculus": 2,
            }
        },
        "2025-05-21": {
            "Software Engineering": {
                "SDLC": 2.5,
                "Agile methodology": 2
            },
            "Math1": {
                "calculus(revision)": 0.5
            }
        },
        "2025-05-22": {
            "Software Engineering": {
                "SRS": 2,
                "SDLC(PYQ): 0.5
            },
            "Math1": {
                "Matrix Inversion(Practice)": 0.5
            },
            "DBMS": {
                "Transactions": 2,
            },
        }
    }
    Notes: Allocate daily study hours as per user demand (total allocate hours daily as user says their daily study hours).
    ***. Schedule topics between the exam dates, so that student can revise the topics before the exam.   
    1. Strictly follow the exam dates and allocate topics accordingly.
    2. Prioritize the topics based on the priority list provided, maybe you can avoid some low-priority topics if time is short.
    3. Ensure that the schedule is balanced and covers all subjects.
    4. You can allocate any number of subjects in a day, but also make sure to not overload the student.
    5. Don't miss any date before exam and at the exam date revise on that subject.
    6. if there is much time left for exam and the student is strong in that subject, then you can allocate time for further subjects.

    Best Researches: 
    Allocate more time to topics that are both important (exam weight) and difficult (user weakness).
            Use 80/20 rule: 80% time to weak/important topics, 20% to revision of strong ones.
            Prioritize foundational topics first, then medium, then hard ones.
            Schedule topic reviews using spaced intervals: 1, 3, 7, and 14 days after first study.
            Place weak/difficult topics during peak hours (morning); easier ones in low-energy times.
            Insert light review sessions in the 1–3 days before each exam.
            If there’s a large gap between exams, use it to study for later subjects.
            Group related topics within 2 days of each other (e.g., DSA concepts).
            Encourage mock tests for specific topics weekly, and twice a week in the final two weeks.
            Use adaptive review: schedule based on user performance (low → frequent, high → sparse).
            Try to focus on the topics that are most probable to be asked in the exam, using the priority list
            Schdule the topics also between the exam dates, so that student can revise the topics before the exam.
****IMP*****: return a string object that can be converted to JSON using json.loads() in python. 
    """

    prompt = f"""
    Instructions: {instructions}
    Priority List: {json.dumps(priorityList)}
    Exam Dates: {json.dumps(examDates)}
    Daily Study Hours: {dailyStudyHours}
    Subjectwise Strength: {json.dumps(subjectwiseStrength)}
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
