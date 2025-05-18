

#  what it takes as input : 
#  subjects details with unitwise syllabus, unitwise strength, 


from backend.app.services.gemini import chat


def getTopicsWithPriority(subjectName, syllabus, unitwiseStrength, examPattern=""):
    
    instructions = """
    You are a syllabus expert.
    You are given a subject name, syllabus, unitwise strength for any student, And maybe exam pattern(how many questions are asked from each unit).
    You have to return the topics with priority, with unitwise.
    You have to return the topics with priority in the following format:
    {
        unit1: {
            topic1: priority,
            topic2: priority,
            ...
        },
        unit2: {
            topic1: priority,
            topic2: priority,
            ...
        },
    }
    The priority should be given in the following way:
    1. total priority sum should be 100 for whole subject.
    2. some units are already strong for student (unitwise strength), so those unit should be given less priority, but important topics should be mid priority.
    3. some units are weak for student (unitwise strength), so those unit should be given more priority, but important topics should be high priority.
    4. Try to focus on the topics that are most probable to be asked in the exam, using the exam pattern. (not the exam questions, but the pattern of topics)
    """

    prompt = f"""
    Subject Name: {subjectName}
    Syllabus: {syllabus}
    Unitwise Strength: {unitwiseStrength}
    Exam Pattern: {examPattern}
    Instructions: {instructions}
    """
    
    chat_response = chat(prompt)

    return chat_response