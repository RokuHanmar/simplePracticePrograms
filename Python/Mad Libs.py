def generateStory(singularNoun, verb, colour, distanceUnit):
  story = "\nThe", singularNoun, "are lovely, ", colour, "and deep.\n"
  "But I have promises to keep,\n"
  "And", distanceUnit, "to go before I", verb + ",\n"
  "And", distanceUnit", to go before I", verb + ".\n"

  return story

print(generateStory("man", "run", "red", "metres"))
print(generateStory("woman", "jog", "blue", "furlongs"))
print(generateStory("child", "swim", "green", "inches"))
