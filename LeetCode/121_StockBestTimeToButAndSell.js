let prices = [7, 1, 5, 3, 6, 4];
var maxProfit = function (prices) {
  let maxProfit = 0;
  let BestBuy = prices[0];

  for (let i = 0; i < prices.length; i++) {
    maxProfit = Math.max(maxProfit, prices[i] - BestBuy);
    BestBuy = Math.min(BestBuy, prices[i]);
  }

  return maxProfit;
};

console.log(maxProfit(prices));
