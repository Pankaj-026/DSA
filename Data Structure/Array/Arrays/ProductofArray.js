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
