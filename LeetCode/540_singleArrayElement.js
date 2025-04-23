nums = [1, 1, 2, 3, 3, 4, 4, 8, 8];

function SingleElement(nums) {
  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);

    if (nums[mid - 1] !== nums[mid] && nums[mid] !== nums[mid + 1])
      return nums[mid];

    if (mid % 2 == 0) {
      if (nums[mid] == nums[mid - 1]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    } else {
      if (nums[mid] == nums[mid - 1]) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
  }

  return -1;
}

console.log(SingleElement(nums));
