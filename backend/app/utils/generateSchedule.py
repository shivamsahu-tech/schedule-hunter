

#  what it takes as input : 
#  topics details with priority list, daily study hours, exam date, subjectwise strength,


from backend.app.services.gemini import chat


def getTopicsWithPriority(priorityList, examDates, dailyStudyHours, subjectwiseStrength):
    
    instructions = """
    You are a Exam Schedule expert.
    You are given a priority list of topics for each subject, daily study hours, exam date, and subjectwise strength for any student.
    You have to return the schedule with topics and time to study each topic for daily basis.
    You have to return the schedule in the following format:
    {
        date1: {
            topic1: time,
            topic2: time,
            ...
        },
        date2: {
            topic1: time,
            topic2: time,
            ...
        },
    }
    The time should be given in the following way:
    1. Schedule times for each topics according to its priority.
    2. Schedule more times for the topics that are weak for student (subjectwise strength), so those topic should be given more time, but important topics should be high time.
    4. Try to focus on the topics that are most probable to be asked in the exam, using the priority list.
    5. Schdule the topics also between the exam dates, so that student can revise the topics before the exam.
    6. If there are much time between the exam dates, and student is strong in that subject, then schdule some other subject topics in that time, for the futher exams.

    """

    prompt = f"""
    Priority List: {priorityList}
    Exam Dates: {examDates}
    Daily Study Hours: {dailyStudyHours}
    Subjectwise Strength: {subjectwiseStrength}
    Instructions: {instructions}
    """

    chat_response = chat(prompt)

    return chat_response