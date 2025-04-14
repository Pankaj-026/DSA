let arr = [-1, 0, 3, 4, 5, 9, 12];
let target = 2 + 2;

function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (target > arr[mid]) {
      start = mid + 1;
    } else if (target < arr[mid]) {
      end = mid - 1;
    } else {
      return mid;
    }
  }
  return -1;
}

// console.log(binarySearch(arr, target));

// Recursive Binary Search

let tar = 12;
let st = 0;
let en = arr.length - 1;

function binarySearchRecursive(arr, tar, st, en) {
  if (st <= en) {
    let mid = Math.floor(st + (en - st) / 2);
    if (arr[mid] < tar) {
      return binarySearchRecursive(arr, tar, mid + 1, en);
    } else if (arr[mid] > tar) {
      return binarySearchRecursive(arr, tar, st, mid - 1);
    } else  {
      return mid;
    }
  }
  return -1;
}

console.log(binarySearchRecursive(arr, tar, st, en));
