from django.shortcuts import render
from .models import Test
import requests
import json
# Напиши в переменную что будешь искать 
def chat_ai(find_text):
    url = "https://api.openai.com/v1/chat/completions"

    payload = json.dumps({
    "model": "gpt-3.5-turbo",
    "messages": [
        {
        "role": "user",
        "content": find_text
        }
    ],
    "temperature": 0.7
    })
    headers = {
    'Authorization': 'Bearer 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',
    'Content-Type': 'application/json'
    }
    response = requests.request("POST", url, headers=headers, data=payload)
    response = response.json()
    return response['choices'][0]['message']['content']
# Create your views here.
def index(request):
    answer = Test.objects.latest('id')
    if request.method == 'POST':
        text = request.POST.get("question")
        question = chat_ai(text)
        test = Test.objects.create(question = question)
        test.save()
        answer = Test.objects.latest('id')
        
    context ={
        'answer':answer
    }
    return render(request, 'index.html', context)