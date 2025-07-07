function negativeReturn(arr) {
    let result = []

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            result.push(arr[i])
        }
    }

    return result
}

const arr = [2,-9,17,0,1,-10,0,-120]
console.log(negativeReturn(arr))