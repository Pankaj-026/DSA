// const arr = [1, 2, 3, 4, 5];
const arr = [3, -4, 5, 4, -1, 7, -8];
// const arr = ["pankaj", "Nakul", "Eshwa", "Vivek", "Raj"];
const n = arr.length;

+(function subArray(arr, n) {
  for (let start = 0; start < n; start++) {
    // todo : Run until reach n: 1
    let print = "";
    for (let end = start; end < n; end++) {
      // todo: run until reach n: n times
      for (let i = start; i <= end; i++) {
        //  todo : run according to end loop number
        print += `${arr[i]} `;
      }
      print += "\t";
    }
    console.log(print);
  }
})(arr, n);

/**
 * start 1 ==> end = n time => i  every n time ends run
 */

// ! Max SubArray Sum

// let arr2 = [];
let maxSum = 0;
+(function maxSubArray(arr, n) {
  for (let start = 0; start < n; start++) {
    let cs = 0;
    for (let end = start; end < n; end++) {
      cs += arr[end];
      maxSum = Math.max(cs, maxSum);
    }
  }
  console.log("\n");
  console.log(maxSum);
})(arr, n);
