<?php
// A constant named kelvin stores the temp in Kelvin
const KELVIN = 293;

// A var named celsius stores the temp in Celsius
$celsius = KELVIN - 273;

// a var named fahrenheit stores the temp in Fahrenheit
$fahrenheit = $celsius * (9/5) + 32;

// Rounds the temp in Fahrenheit down
$fahrenheit = floor($fahrenheit);

$newton = $celsius * (33/100);
$newton = floor($newton);

echo("The temperature is $fahrenheit degrees Fahrenheit");
echo("The temperature is $celsius degrees Celsius");
echo("The temperature is $KELVIN degrees Kelvin");
echo("The temperature is $newton degrees Newton");
>
