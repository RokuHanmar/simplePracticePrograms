def fibonacci(number):
    if number == 0 or number == 1:
        return number
    else:
        return (fibonacci(number - 1) + fibonacci(number - 2))
    
print(fibonacci(1))
print(fibonacci(2))
print(fibonacci(3))
print(fibonacci(4))
print(fibonacci(5))
print(fibonacci(6))
