const arr = [0,3,8,9,5,2]

function peakIndex(arr){
    let st = 1
    let end = arr.length - 2
    
    while(st <= end){
        let mid = Math.floor(st + (end - st)/2)
        
        if(arr[mid-1] < arr[mid] && arr[mid] > arr[mid+1]) return mid
        
        if(arr[mid] > arr[mid-1]){
            st = mid+1
        }else{
            end = mid-1
        }
    }
    
    return -1
}

console.log(peakIndex(arr))