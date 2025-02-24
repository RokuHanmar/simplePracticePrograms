<?php

// While loop
$counter = 1;
while ($counter < 101) {
  if ($counter % 15 === 0) {
    echo "FizzBuzz!\n";
  } elseif ($counter % 3 === 0) {
    echo "Fizz!\n";
  } elseif ($counter % 5 === 0) {
    echo "Buzz!\n";
  } else {
    echo "$counter\n";
  }
  $counter++;
}

// For and For Each loops
$output = [];
for ($i = 1; $i < 101; $i++) {
  if ($i % 15 === 0) {
      array_push($output, "FizzBuzz!\n");
    } elseif ($i % 3 === 0) {
      array_push($output, "Fizz!\n");
    } elseif ($i % 5 === 0) {
      array_push($output, "Buzz!\n");
    } else {
      array_push($output, "$i\n");
    }
}

foreach ($output as $value) {
  echo "$value\n";
}

// Break and Continue
foreach ($output as $value) {
  if ($value === "Fizz") {
    continue;
  } elseif ($value === "FizzBuzz") {
    echo $value;
    break;
  }
  echo "$value\n";
}
