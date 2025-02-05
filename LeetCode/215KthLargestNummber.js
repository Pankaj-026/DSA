let arr = [2, 5, 6, 3, 5, 7, 4, 9];
let k = 8;

function KthLargest(arr, k) {
  if (k > arr.length) {
    return "k is bigger than arr";
  }
  let result = arr.sort((a, b) => b - a);
  return result[k - 1];
}

console.log(KthLargest(arr, k));
