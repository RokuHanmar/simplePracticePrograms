import math

# A constant named kelvin stores the temp in Kelvin
KELVIN = 293

# A var named celsius stores the temp in Celsius
celsius = kelvin - 273

# a var named fahrenheit stores the temp in Fahrenheit
fahrenheit = celsius * (9/5) + 32;

# Rounds the temp in Fahrenheit down
fahrenheit = math.floor(fahrenheit);

newton = celsius * (33/100);
newton = math.floor(newton);

print("The temperature is ", str(fahrenheit), "degrees Fahrenheit")
print("The temperature is ", str(celsius), "degrees Celsius")
print("The temperature is ", str(KELVIN), "degrees Kelvin")
print("The temperature is ", str(newton), "degrees Newton")
