import google.generativeai as genai
import os


key = os.getenv("gemini_api_key")

genai.configure(api_key="AIzaSyDXCuIXEaVhXm6TBBHE3b4bWrUCoaPgHJQ")

def chat(promt): 
  model = genai.GenerativeModel("gemini-1.5-flash")
  response = model.generate_content(promt)
  return response.text