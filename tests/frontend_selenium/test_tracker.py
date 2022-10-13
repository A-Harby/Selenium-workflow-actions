import requests
import os

result = os.environ["PYTEST_RESULT"]

url = 'https://kglqy.mocklab.io/action'
myobj = {'somekey': result}

x = requests.post(url, json = myobj)

print(x.text)