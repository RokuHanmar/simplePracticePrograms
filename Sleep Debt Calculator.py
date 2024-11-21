# Calculate sleep goal per day
def getSleepHours(day):
  day = day.lower()
  if day == "monday":
    return 8
  elif day == "tuesday":
    return 7
  elif day == "wednesday":
    return 6
  elif day == "thursday":
    return 5
  elif day == "friday":
    return 4
  elif day == "saturday":
    return 3
  elif day == "sunday":
    return 2
  else:
    return "Invalid input";

# Calculate how many hours were actually slept during each night
def getActualSleepHours():
  return getSleepHours("Monday") + getSleepHours("Tuesday") + getSleepHours("Wednesday") + getSleepHours("Thursday") + getSleepHours("Friday") + getSleepHours("Saturday") + getSleepHours("Sunday")
  
# Calculate the ideal number of hours slept per week
def getIdealSleepHours(idealHours):
  return idealHours * 7

# Compare ideal sleep and actual sleep
def calculateSleepDebt (ideal) :
  actualSleepHours = getActualSleepHours()
  idealSleepHours = getIdealSleepHours(ideal)
  if actualSleepHours == idealSleepHours:
    print("You get the perfect amount of sleep")
  elif actualSleepHours > idealSleepHours:
    totalDifference = actualSleepHours - idealSleepHours
    print("You get too much sleep")
    print("You are", str(totalDifference), "hours ahead of your schedule")
  else:
    totalDifference = idealSleepHours - actualSleepHours
    print("You don't get enough sleep")
    print("You are", str(totalDifference), "hours behind your schedule")
    
calculateSleepDebt(5);

