from google import genai




client = genai.Client(api_key="AIzaSyDXCuIXEaVhXm6TBBHE3b4bWrUCoaPgHJQ")


def chat(prompt):
    return client.models.generate_content(
    model="gemini-2.0-flash", contents=prompt
    )

