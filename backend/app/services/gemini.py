import google.generativeai as genai
import os

# client = genai.Client(api_key="AIzaSyDXCuIXEaVhXm6TBBHE3b4bWrUCoaPgHJQ")


# def chat(prompt):
#     return client.models.generate_content(
#     model="gemini-2.0-flash", contents=prompt
#     )

key = os.getenv("gemini_api_key")

genai.configure(api_key=key)

def chat(promt): 
  model = genai.GenerativeModel("gemini-1.5-flash")
  response = model.generate_content(promt)
  return response.text