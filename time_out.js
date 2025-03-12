import threading  

threading.Timer(5, lambda: print("Time out!")).start()  # Runs after 5 seconds  
input("Enter something quickly: ")  
