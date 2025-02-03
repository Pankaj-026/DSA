//? Linear Search : It searches it target by traversing an array in assending order and returning it index number or that value itself.

// todo: Find Element in Array: Write a program to search for a given element in an array using linear search. Return the index of the element if found, otherwise return -1.

let arr = [1, 4, 26, 34, 56, 69, 106, 26];
let result;
let log = "";

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // But its not providing index number
    if (!arr.includes(target)) {
      console.log("Target Not Founded");
      return -1;
    }

    if (arr[i] == target) {
      result = i;
      console.log(result);
      return result;
    }
  }
}

console.log(arr[linearSearch(arr, 69)]);

// todo: Count Occurrences: Find the total number of occurrences of a given element in an array.

function FindOccurence(arr, target) {
  let occured = [];
  for (let i = 0; i < arr.length; i++) {
    // But its not providing index number
    if (!arr.includes(target)) {
      console.log("Target Not Founded");
      return -1;
    }

    if (arr[i] == target) {
      occured.push(i);
    }
  }
  return occured;
}

console.log("aa", FindOccurence(arr, 26));

// todo: Find Maximum Element: Use linear search to find the maximum element in an array.
// todo: Find Minimum Element: Use linear search to find the minimum element in an array.

let smallest = arr[0];
let biggest = arr[0];
for (let i = 0; i < arr.length; i++) {
  if (smallest > arr[i]) {
    smallest = arr[i];
  }

  if (biggest < arr[i]) {
    biggest = arr[i];
  }
}
console.log(smallest);
console.log(biggest);

