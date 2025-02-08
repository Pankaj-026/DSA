// ! Brute Force Approach
let arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let n = arr.length;

function maxArea(arr, n) {
  let h = 0;
  let w = 0;
  let maxWater = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      h = Math.min(arr[i], arr[j]);
      w = j - i;
      let area = h * w;
      maxWater = Math.max(maxWater, area);
    }
  }
  return maxWater;
}

// console.log(maxArea(arr,n));

// TODO: Optimal Approach

let arrw = [1, 8, 6, 2, 5, 4, 8, 3, 7];
function maxAreaOptimal(arr, n) {
  let lp = 0;
  let rp = n - 1;
  let maxWater = 0;

  while (lp < rp) {
    let w = rp - lp;
    let h = Math.min(arr[lp], arr[rp]);

    let area = w * h;
    maxWater = Math.max(area, maxWater);

    arr[rp] > arr[lp] ? lp++ : rp--;
  }

  return maxWater;
}

console.log(maxAreaOptimal(arr, n));
