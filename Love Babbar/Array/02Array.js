//*? Given an array of size N. The task is to find the maximum and the minimum element of the array using the minimum number of comparisons.

//*? Examples:
//*? Input: arr[] = {3, 5, 4, 1, 9}
//*? Output: Minimum element is: 1
//*?         Maximum element is: 9

let arr = [1, 2, 3, 4, 5];

function minMaxFromArr(arr) {
  let min = arr[0];
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return `Minimum element is: ${min} \nMaximum element is: ${max}`;
}

console.log(minMaxFromArr(arr));
