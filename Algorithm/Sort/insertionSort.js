
function insertionSort(nums) {
    let n = nums.length;

    for (let i = 1; i < n; i++) {
        let current = nums[i]
        let previous = i - 1

        while (previous >= 0 && nums[previous] > current) {
            nums[previous + 1] = nums[previous]
            previous--;
        }
        
        nums[previous + 1] = current
    }
    return nums
}

console.log(insertionSort([7, 5, 6, 4, 3, 1, 2]));
