
let arr = [7, 1, 5, 3, 6, 4];

let maxProfit = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        let profit = arr[i] - arr[j] 
        if(profit > maxProfit){
            maxProfit = profit
        }
    }
}


console.log(maxProfit);
