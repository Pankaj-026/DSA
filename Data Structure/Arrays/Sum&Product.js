let arr = [1,2,3,4,5]

function Sums(arr){
    let sum = 0
    let product = 1
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
        product *= arr[i]
    }
    console.log(`sum: ${sum} \nproduct: ${product}`);
}

Sums(arr)