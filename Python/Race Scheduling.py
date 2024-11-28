import random
raceNumber = random.randint(1, 10)

early = True
age = 20

if age > 18 and early == True:
  raceNumber += 1000

if age > 18 and early == True:
  print("Racer " + str(raceNumber) + " will race at 9:30 am")
elif age > 18 and early == False:
  print("Racer " + str(raceNumber) + " will race at 11:30 am")
elif age < 18:
  print("Racer" + str(raceNumber) + " will race at 12:30 pm")
else:
  print("All other racers see the registration desk")
