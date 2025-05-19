import json
from ..services.gemini import chat

def getTopicsWithPriority(
            subject_name,
            syllabus,
            unitwiseStrength,
            subject_strength,
            other_details,
            exam_pattern
    ):


    instructions = """
    You are a syllabus expert.
    You are given a subject name, syllabus, unitwise strength for any student (unit prepared in %), Subject Strength (subject prepared in %), other details , exam_pattern.
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
        }
    }
    Priorities:
    The priority should be given in the following way:
    1. Make Prority for each topic in the range of 1 - 30
    2. some units are already strong for student (unitwise strength), so those unit should be given less priority, but important topics should be mid priority and vice versa.
    4. Try to focus on the topics that are most probable to be asked in the exam, using the exam pattern. (not the exam questions, but the pattern of topics : big questions probable topics contribure more marks)
    5. Your Prority should be research based according the topics details (you have wast knowledge) and not random.
    IMP: return a string object that can be converted to JSON using json.loads() in python.
    """

    prompt = f"""
        Instructions: {instructions}
        Subject Name: {subject_name}
        Syllabus: {syllabus}
        Unitwise Strength: {unitwiseStrength}
        Subject Strength: {subject_strength}
        Other Details: {other_details}
        Exam Pattern: {exam_pattern}
        """

    chat_response = chat(prompt)

    response = chat_response.strip()

    # Remove markdown code block syntax if present
    if response.startswith("```"):
        response = response.strip("`").strip()
        if response.lower().startswith("json"):
            response = response[4:].strip()  # Remove "json" prefix

    print("Chat response:", response)

    try:
        parsed = json.loads(response)
        return parsed
    except Exception as e:
        print("Failed to parse response:", response)
        return {"error": "Invalid response format", "raw": response}
