def search(array, target):
  found = False
  numberOfTimesFound = []
  for i in range(len(array)):
    if array[i] == target:
      found = True
      print("Found at position "  +str(i))
      numberOfTimesFound.append(i)

  if found == False:
    print("Target not in array")
  
  return numberOfTimesFound

search([1,2,3,4,5], 1) # returns found at 0
search([1,2,3,4,5], 2) # returns found at 1
search([1,2,3,4,5], 6) # returns not found
search([1,2,3,4,5], 5) # returns found at 4
search([1,1,2,3,4,5], 1) # returns found at 0 and returns found at 1
