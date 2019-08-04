import requests

url = 'http://localhost:3001/friends'
print(requests.get(url).text)
url = 'http://localhost:3001/addfriend'
print(requests.post(url).text)
