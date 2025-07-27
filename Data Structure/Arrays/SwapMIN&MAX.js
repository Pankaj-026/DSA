let arr = [2,5,3,11,7,6,9]

function SwapMinToMax(arr) {
    // let samll= arr[0];
    // let large= arr[0];
    let min = 0
    let max = 0

    for (let i=0; i<arr.length; i++) {
        if (arr[min] > arr[i]){
            // samll = arr[i]
            min = i
        }
        if(arr[max] < arr[i]){
            // large = arr[i]
            max = i
        }
    }

    let temp = arr[max]
    arr[max] = arr[min]
    arr[min] = temp

    console.log(min,max);
}

console.log(arr);
SwapMinToMax(arr)
console.log(arr);