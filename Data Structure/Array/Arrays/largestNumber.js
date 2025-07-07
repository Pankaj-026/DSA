function largestNumber(arr) {
    let max = -Infinity;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max
}

// const arr = [1, 3, 5, 5, 343, 3243, 432, 3, 53]

const arr = [-10,-1, -2,-4]
console.log(largestNumber(arr));
