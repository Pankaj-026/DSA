let arr1 = [1, 2, 3, 4, 5];
let arr2 = [0, 3, 4, 5, 6, 11];

function Insertion(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    let count = 0;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
      }
    }
    if (count === 0) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let count = 0;
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i] === arr2[j]) {
        count++;
      }
    }
    if (count === 1 || count === 0) {
      result.push(arr2[i]);
    }
  }

  return result.sort((a, b) => (a < b ? -1 : 1));
}

console.log(Insertion(arr1, arr2));
