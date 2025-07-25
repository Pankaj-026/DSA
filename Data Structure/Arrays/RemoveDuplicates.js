let nums =[0,0,1,1,1,2,2,3,3,4]

var removeDuplicates = function (nums) {
    let x = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[x]) {
            nums[x + 1] = nums[i];
            x++;
        }
    }
    return nums;
};

console.log(removeDuplicates(nums));
