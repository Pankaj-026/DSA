let arr = [2, 3, 2];

const majorityElement = (nums) => {
  let majority = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (counter === 0) {
      majority = arr[i];
    }
    counter += arr[i] === majority ? 1 : -1;
  }
  return majority;
};

console.log(majorityElement(arr));

const nums = [2, 7, 11, 15];
const target = 17;
const pairSum = (nums, target) => {
  const ans = [];

  let i = 0;
  let j = nums.length - 1;

  while (i < j) {
    let pairSums = nums[i] + nums[j];
    if (pairSums > target) {
      j--;
    } else if (pairSums < target) {
      i++;
    } else {
      ans.push(i);
      ans.push(j);
      return ans;
    }
  }

  return "no pair found";
};

console.log(pairSum(nums, target));

// ! Brute Force Approach

const arrMJ = [1, 2, 2, 1, 1];

function bruteMJ(nums) {
  let n = nums.length;
  let ans = 0;

  if (n == 0) {
    return `array is empty`;
  }

  for (let i = 0; i < n; i++) {
    let counter = 0;

    for (let j = 0; j < n; j++) {
      if (nums[i] == nums[j]) {
        counter++;
      }
    }
    if (counter > n / 2) {
      return nums[i];
    } else {
      return `both number are equal`;
    }
  }
}

console.log(bruteMJ(arrMJ));
// let a =[]
// console.log(bruteMJ(a));

//  todo: morse approach

function morseMJ(arrMJ) {
  let n = arrMJ.length;
  let freq = 0,
    ans = 0;

  for (let i = 0; i < n; i++) {
    if (freq == 0) {
      ans = arrMJ[i];
    }
    if (ans == arrMJ[i]) {
      freq++;
    } else {
      freq--;
    }
  }

  let count = 0;
  for (let i of arrMJ) {
    if (i == ans) {
      count++;
    }
  }

  if (count > n / 2) {
    return ans;
  } else {
    return "no higher freakkk" ;
  }
}

console.log(morseMJ(arrMJ));
