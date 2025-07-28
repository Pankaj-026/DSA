
var moveZeroes = function (nums) {
    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i]
            x++
        }
    }

    for (let j = x; j < nums.length; j++) {
        nums[j] = 0
    }
}

// With Methods
// var moveZeroes = function (nums) {
//     for(let i = 0; i < nums.length; i++){
//         if(nums[i] == 0) {
//             nums.splice(i, 1)
//             nums.push(0)
//         }
//     }
// };