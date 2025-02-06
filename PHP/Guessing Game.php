<?php
$play_count = 0;
$correct_guesses = 0;
$guess_high = 0;
$guess_low = 0;

echo "This is a simple guessing game. I will generate a number from 1 to 10 inclusive and you will try to guess it.";

function guessNumber() {
  global $play_count, $correct_guesses, $guess_high, $guess_low;
  $play_count++;

  $target = rand(1, 10);

  echo "\nGuess the number\n";

  $guess = readline(">> ");
  $guess = intval($guess);
  if ($guess > 10) {
    echo "Guess too high\n";
    $guess = readline(">> ");
    $guess = intval($guess);
  } else if ($guess < 1){
    echo "Guess too low\n";
    $guess = readline(">> ");
    $guess = intval($guess);
  }

  echo "This is round $play_count\nThe number was $target\nYou guessed $guess\n";

  if ($guess === $target) {
    $correct_guesses++;
  } else if ($guess > $target) {
    $guess_high++;
  } else {
    $guess_low++;
  }

  $percentage_correct = $correct_guesses / $play_count * 100;

  echo "You have a success rate of $percentage_correct%\n";

  if ($guess_high > $guess_low) {
    echo "When you guessed wrong, you tended to guess high.";
  } else if ($guess_low > $guess_high) {
    echo "When you guessed wrong, you tended to guess low.";
  }
}

guessNumber();
guessNumber();
guessNumber();
