const arr = [3, -4, 5, 4, -1, 7, -8];
+(function kadane(arr) {
  let maxSum = Number.MIN_SAFE_INTEGER;
  let curSum = 0;
  for (let i = 0; i < arr.length; i++) {
    curSum += arr[i];
    maxSum = Math.max(curSum, maxSum);
    if (curSum < 0) curSum = 0;
  }
  console.log(maxSum);
})(arr);

console.log();
