// Todo: Rotate Array by One

// ? Input: arr[] = [1, 2, 3, 4, 5]
// ? Output: [5, 1, 2, 3, 4]
// ? Explanation: If we rotate arr by one position in clockwise 5 come to the front and remaining those are shifted to the end.

const arr = [1, 2, 3, 4, 5];

function rotateByOne(arr) {
    arr.unshift(arr[arr.length - 1]);
    arr.pop(-1);
    return arr;
}

rotateByOne(arr);

// ! without builtin methods

const arr2 = [1, 2, 3, 4, 5];
function rotateByOne2(arr) {
  let last = arr[arr.length - 1];
  let result = [];
  result[0] = last;

  for (let i = 1; i < arr.length; i++) {
    result[i] = arr[i - 1];
  }

  return result;
}

console.log(rotateByOne2(arr2));
