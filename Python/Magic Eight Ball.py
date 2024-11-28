import random
userName = input("What is your name? ")

if userName != "":
    print("Hello, " + userName)
else:
    print("Hello!")

userQuestion = input("Ask a question: ")

print(userQuestion + ", " + userName + "?")

randomNumber = random.randint(0, 7)
eightBall = ""

if randomNumber == 0:
    eightBall = 'It is certain'
elif randomNumber == 1:
    eightBall = 'It is decidedly so'
elif randomNumber == 2:
    eightBall = 'Reply hazy try again'
elif randomNumber == 3:
    eightBall = 'Cannot predict now'
elif randomNumber == 4:
    eightBall = 'Do not count on it'
elif 5:
    eightBall = 'My sources say no'
elif randomNumber == 6:
    eightBall = 'Outlook not so good'
elif randomNumber == 7:
    eightBall = 'Signs point to yes'
  
print(eightBall)

