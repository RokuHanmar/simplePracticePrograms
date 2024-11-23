def fizzBuzz(i):
	if (i % 3 == 0 and i % 5 == 0):
		return("FizzBuzz")
	elif i % 3 == 0:
		return("Fizz")
	elif i % 5 == 0:
		return("Buzz")
	else:
		return(i)

print(fizzBuzz(1)) # 1
print(fizzBuzz(3)) # Fizz
print(fizzBuzz(50)) # Buzz
print(fizzBuzz(150)) # FizzBuzz
