import google.generativeai as genai
import os
from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_core.prompts import PromptTemplate
from dotenv import load_dotenv
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))

def generateDescription(title):
    llm = ChatGoogleGenerativeAI(model="gemini-pro");
    prompt_template = PromptTemplate(
    input_variables=["title"],

    template="Generate a paragraph detailed description for a college student's to-do list based on the title: {title} College Student To-Do List. just define random tasks only 1 para answer just make it a single paragraph and dont include * Remember The Content Should be Related to the Tile like give me what we can learn concepts of the title , dont include * , **, use numbers instead give title and '/n\n' after every point",
)
    result = llm.invoke(prompt_template.format(title=title))
    print(result.content)
    ai_content = result
    return ai_content