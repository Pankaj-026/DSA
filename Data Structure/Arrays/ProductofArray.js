let a = [1, 2, 3, 4];

// Brute Force Approach
function productOfArray(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let product = 1;
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        product *= arr[j];
      }
    }
    result.push(product);
  }

  return result;
}

console.log(productOfArray(a));

// Optimized Approach
let b = [1, 2, 3, 4];

function productOfArrayOptimized(arr) {
  let result = new Array(arr.length);
  let prefix = [];
  let suffix = [];
  prefix[0] = 1;
  suffix[arr.length - 1] = 1;

  for (let i = 1; i < arr.length; i++) {
    prefix[i] = arr[i - 1] * prefix[i - 1];
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    suffix[i] = arr[i + 1] * suffix[i + 1];
  }

  for (let i = 0; i < arr.length; i++) {
    result[i] = prefix[i] * suffix[i];
  }

  return result;
}

console.log(productOfArrayOptimized(a));

// cleaner version of the optimized approach
function productOfArrayCleaner(arr) {
  let result = new Array(arr.length).fill(1);
  let prefix = 1;
  let suffix = 1;

  for (let i = 0; i < arr.length; i++) {
    result[i] *= prefix;
    prefix *= arr[i];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    result[i] *= suffix;
    suffix *= arr[i];
  }

  return result;
}