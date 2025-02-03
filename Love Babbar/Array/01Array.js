// ! Given an array arr[], the task is to reverse the array. Reversing an array means rearranging the elements such that the first element becomes the last, the second element becomes second last and so on.

let arr = [1, 2, 3, 4, 5, 6];

// ? 1
function reverseArr(arr) {
    let start = 0;
    let end = arr.length - 1;
    for (let i = 0; i < arr.length / 2; i++) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
    return arr;
}

// console.log(reverseArr(arr));

// ? 2
const revArr = (arr) => {
    let temp = []
    for(let i = arr.length - 1; i >= 0; i--) {
        temp.push(arr[i]);
    }
    return temp;
}
console.log(revArr(arr));

// ? 3
// console.log(arr.reverse());
