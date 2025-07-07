function searchElement(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if (arr[i] == target) {
            return i;
        }
    }

    return -1;
}

const arr = [4, 3, 2, 0, 10, 8, 20];

console.log(searchElement(arr, 0));
