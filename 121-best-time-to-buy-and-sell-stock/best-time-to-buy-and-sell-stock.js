/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let b = 0;
    let maxProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < prices[b]) {
            b = i;
        } else {
            maxProfit = Math.max(prices[i] - prices[b], maxProfit);
        }
    }
    return maxProfit
};