# Creates a variable called myAge and sets it to 20
myAge = 20

# Creates a variable called earlyYears and sets it to 2
earlyYears = 2

earlyYears *= 10.5

# Creates a variable called laterYears and sets it to 2 less than myAage
laterYears = myAge - 2

# Multiply laterYears by 4
laterYears *= 4

"""
print(earlyYears)
print(laterYears)
"""

# Creates a variable that combines early and later years
myAgeInDogYears = earlyYears + laterYears

# Saves a name as a lower case string
myName = "Rohan".lower()

# String interpolation
print("My name is", myName + ". I am", myAge, "years old in human years, which is", myAgeInDogYears, "years old in dog years.")
