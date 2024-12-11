const generateStory = (singularNoun, verb, colour, distanceUnit) => {
  let story = `\nThe ${singularNoun} are lovely, ${colour}, and deep.\n
  But I have promises to keep,\n
  And ${distanceUnit} to go before I ${verb},\n
  And ${distanceUnit} to go before I ${verb}.\n
`;

  return story;
}

console.log(generateStory("man", "run", "red", "metres"));
console.log(generateStory("woman", "jog", "blue", "furlongs"));
console.log(generateStory("child", "swim", "green", "inches"));
