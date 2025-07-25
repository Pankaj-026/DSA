// function secondLargest(arr){
//     const sortedArr = arr.sort((a,b)=> b-a)
//     return sortedArr[1]
// }

function secondLargest(arr) {
    if (arr.length < 2)
        return null
    let firstLargest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            secondLargest = firstLargest;
            firstLargest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== firstLargest) {
            secondLargest = arr[i];
        }

    }

    return secondLargest
    // return firstLargest
}

console.log(secondLargest([2, 3, 40, 14, 9, 40 ,34]));
