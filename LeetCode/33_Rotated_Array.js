
function rotatedArrayBinarySearch(arr, tar) {
    
    let st = 0;
    let end = arr.length - 1
    
    while(st <= end) {
        let mid = Math.floor(st + (end - st)/2)
        
        if(arr[mid] === tar) return mid;
        
        if(arr[st] <= arr[mid]){
            if(arr[st] <= tar && tar <= arr[mid]){
                end = mid - 1
            }else{
                st = mid + 1
            }
        } else {
            if(arr[mid] <= tar && tar <= arr[end]){
                st = mid + 1
            }else{
                end = mid - 1
            }
        }
        
    }
    
    return -1
    
}

let arr = [3,4,5,6,7,0,1,2];
let target = 0;
console.log(rotatedArrayBinarySearch(arr, target))
