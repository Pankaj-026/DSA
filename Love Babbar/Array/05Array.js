// TODO: An array contains both positive and negative numbers in random order. Rearrange the array elements so that all negative numbers appear before all positive numbers.

const arr = [-12, 11, -13, -5, 6, -7, 5, -3, -6,0];

function negativeFirst(arr) {
  let n = arr.length;
  let result = [];

  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
        result.push(arr[i]);
    }
  }
  for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
        result.push(arr[i]);
    }
  }
  return result;
}

console.log(negativeFirst(arr));

