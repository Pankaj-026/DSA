// TODO:  Union of Arrays with Duplicates

let a = [85, 25, 1, 32, 54, 6];
let b = [85, 2];

+(function UnionSet(a, b) {
  let result = [...new Set([...a, ...b])];
  console.log(result.length);
})(a, b);

function UnionArray(a, b) {
  let result = [];

  for (let i = 0; i < a.length; i++) {
    result[result.length] = a[i];
  }

  for (let i = 0; i < b.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < a.length; j++) {
      if (a[i] === b[i]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      result[result.length] = b[i];
    }
  }

  return result;
}

console.log(UnionArray(a, b));
