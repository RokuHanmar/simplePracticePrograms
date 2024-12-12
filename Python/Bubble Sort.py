def sort(array):
  for i in range(len(array)):
    swapped = False
    for j in range(len(array) - i - 1):
      if array[j] > array[j+1]:
        temp = array[j]
        array[j] = array[j+1]
        array[j+1] = temp
        swapped = True
        
    if not swapped:
        break

  return array

print(sort([1, 2, 3, 5, 4]))
print(sort([5, 4, 3, 2, 1]))
print(sort([1, 5, 2, 8, 3, 10, 9, 6, 7, 4]))
