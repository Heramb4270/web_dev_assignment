from flask import Flask, request , jsonify
import google.generativeai as genai
import os
from dotenv import load_dotenv
from flask_cors import CORS
load_dotenv()
genai.configure(api_key=os.getenv("GOOGLE_API_KEY"))
from ai_content import generateDescription
app = Flask(__name__) 
CORS(app)

@app.route('/test', methods=['GET'])
def test():
    return "Hello, World!"

@app.route('/generate-ai', methods=['POST'])
def generateUsingAi():
    data = request.get_json()
    title = data['title']
    print(title)
    desc = generateDescription(title)
    ap = desc.content

    return {'description':ap}


if __name__ == '__main__':
    app.run(debug=True, port=5000)