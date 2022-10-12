import os

def send_report():
    result = os.environ["TEST_RESULT"]
    print(result)
    