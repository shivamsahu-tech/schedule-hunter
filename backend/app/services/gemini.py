import google.generativeai as genai

# client = genai.Client(api_key="AIzaSyDXCuIXEaVhXm6TBBHE3b4bWrUCoaPgHJQ")


# def chat(prompt):
#     return client.models.generate_content(
#     model="gemini-2.0-flash", contents=prompt
#     )

genai.configure(api_key="AIzaSyDXCuIXEaVhXm6TBBHE3b4bWrUCoaPgHJQ")

def chat(promt): 
  model = genai.GenerativeModel("gemini-1.5-flash")
  response = model.generate_content(promt)
  return response.text