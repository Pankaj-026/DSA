//  Todo: Kadane's Algorithm
//  ? To find Maximun subarray

const arr = [2, 3, -8, 7, -1, 2, 3];

function Kadane(arr) {
  let max = arr[0];
  let curMax = 0;
  for (let i = 0; i < arr.length; i++) {
    curMax += arr[i]; // * Add the current element to 'curMax'

    max = Math.max(max, curMax); // * Update 'max' if 'curMax' is greater than the current 'max'

    if (curMax < 0) {
      // * If 'curMax' becomes negative, reset it to 0
      curMax = 0; // * This helps to start a new subarray since negative sums won't contribute to the maximum sum
    }
  }

  return max; // * Return the maximum subarray sum found
}

console.log(Kadane(arr));
