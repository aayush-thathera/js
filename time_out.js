import signal

# Define a custom exception for timeout
class TimeoutException(Exception):
    pass

# Function to handle the timeout
def timeout_handler(signum, frame):
    raise TimeoutException("Time limit exceeded!")

# Set the signal handler for SIGALRM
signal.signal(signal.SIGALRM, timeout_handler)

# Set timeout limit (in seconds)
timeout_seconds = 5
signal.alarm(timeout_seconds)

try:
    # Your long-running code here
    print("Starting process...")
    while True:
        pass  # Simulating a long-running task
except TimeoutException as e:
    print(e)
finally:
    signal.alarm(0)  # Disable the alarm
