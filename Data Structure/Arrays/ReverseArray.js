let arr = [1,2,3,4,5,6,7];

function ReverseArray(arr) {

    let start = 0
    let end = arr.length-1
    let temp = 0
    for (let i = 0; i < arr.length/2; i++) {
            temp = arr[start]
            arr[start] = arr[end]
            arr[end] = temp
            start++
            end--
          
    }
    return arr
}

console.log(ReverseArray(arr));

