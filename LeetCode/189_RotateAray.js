// var rotate = function (nums, k) {
//     let x = []

//     for (let i = nums.length - k; i < nums.length; i++) {
//         x.push(nums[i]);
//     }
//     for (let j = 0; j < nums.length - k; j++) {
//         x.push(nums[j]);
//     }

//     for(let k = 0; k < nums.length; k++){
//         nums[k] = x[k]
//     }

// };

var rotate = function (nums, k) {
    let n = nums.length
    for (let i = 0; i < k; i++) {
        let temp = nums.pop(n)
        nums.unshift(temp)
        n--
    }
}

let nums = [1, 2, 3, 4, 5, 6, 7]
let k = 3

console.log(rotate(nums, k));
console.log(nums);


