import requests
import json
# Напиши в переменную что будешь искать 
find_text = 'what is api'

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

print(response['choices'][0]['message']['content'])