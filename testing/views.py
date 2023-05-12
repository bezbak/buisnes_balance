from rest_framework import generics, status
from django.core.mail import EmailMessage
from rest_framework.response import Response
from .models import Test, Pochta
from testing.serializers import TestSerializer, PochtaSerializer
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
    return response

class Util:
	@staticmethod
	def send_email(data):
		email = EmailMessage(subject=data['email_subject'], body=data['email_body'], to=[data['to_email']])
		email.send()

class TestAPIView(generics.CreateAPIView):
    serializer_class = TestSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)
        question = request.data.get('question', '')
        answer = chat_ai(question)
        test = Test.objects.create(question = question, answer= answer)
        test.save()
        return Response({'success': f'{answer}'}, status=status.HTTP_200_OK) 
class PochtaAPIView(generics.CreateAPIView):
    serializer_class = PochtaSerializer
    def post(self, request):
        serializer = self.serializer_class(data=request.data)

        full_name = request.data.get('full_name', '')
        phone = request.data.get('phone', '')
        email = request.data.get('email', '')
        email_body = f"""
            Имя: {full_name},
            Номер телефона: {phone},
            Почта: {email}
        """
        data = {'email_body': email_body, 'to_email': 'bezbak0@gmail.com', 'email_subject': f'Сообщение от {full_name}'}
        Util.send_email(data)
        return Response({'success': 'Мы получили ваши данные и скоро с вами свяжемся'}, status=status.HTTP_200_OK) 
        
# Create your views here.
# def index(request):
#     answer = Test.objects.latest('id')
#     if request.method == 'POST':
#         text = request.POST.get("question")
#         question = chat_ai(text)
#         test = Test.objects.create(question = question)
#         test.save()
#         answer = Test.objects.latest('id')
        
#     context ={
#         'answer':answer
#     }
#     return render(request, 'index.html', context)