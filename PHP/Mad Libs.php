<?php

function generateStory($singular_noun, $verb, $colour, $distance_unit) {
  $story = "\nThe ". $singular_noun . " are lovely, ". $colour. ", and deep.\n
But I have promises to keep,\n
And ". $distance_unit. " to go before I ". $verb. ",\n
And ". $distance_unit. " to go before I ". $verb. ".\n
";

  return $story;
}

echo generateStory("man", "run", "red", "metres");
echo generateStory("woman", "jog", "blue", "furlongs");
echo generateStory("child", "swim", "green", "inches");
