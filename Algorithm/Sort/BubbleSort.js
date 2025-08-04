function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let isSwap = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        arr[j] = arr[j] + arr[j + 1];
        arr[j + 1] = arr[j] - arr[j + 1];
        arr[j] = arr[j] - arr[j + 1];
        isSwap = true;
      }
      if (!isSwap) {
        return;
      }
    }
  }
}

let arr = [4, 2, 1, 5, 3];

bubbleSort(arr);
console.log(arr);