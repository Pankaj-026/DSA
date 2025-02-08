// ! Brute Force Approach
let arr = [1,8,6,2,5,4,8,3,7]
let n = arr.length;

function maxArea (arr,n){
    let h = 0
    let w = 0
    let maxWater = 0

    for(let i =0; i<n;i++){
        for(let j = i+1;j<n;j++){
            h = Math.min(arr[i], arr[j])
            w = j-i
            let area = h *w
            maxWater = Math.max(maxWater, area)
        }
    }
    return maxWater
}

console.log(maxArea(arr,n));
