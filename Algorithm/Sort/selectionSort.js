function selectionSort(arr) {
  for (let i = 0; i < arr.length - 2; i++) {
    let smallestIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallestIndex] > arr[j]) {
        smallestIndex = j;
      }
    }
    arr[i] = arr[i] + arr[smallestIndex];
    arr[smallestIndex] = arr[i] - arr[smallestIndex];
    arr[i] = arr[i] - arr[smallestIndex];
  }
}

let arr = [4, 5, 2, 1, 3];
selectionSort(arr);
console.log(arr);

// Swap Logic

// a = 4 b = 9

// a = a+b = 4+9 = 13
// b = a-b = 13 - 9 = 4
// a = a-b = 13 - 4 = 9
