const arr = [12, 32, 93, 4, 65, 11, -1, 100];
let k = 8;

function Solution(arr, k) {
  if (k < 1) return "k must be positive integer";
  if (k > arr.length) return "k is greater than the size of the array";

  let sortedArray = arr.sort((a, b) => a - b);

  return sortedArray[k - 1];
}

console.log(Solution(arr, k));
