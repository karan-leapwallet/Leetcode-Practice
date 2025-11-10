/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let result = 0
    let majority = 0

    for (let element of nums) {
        if(majority === 0) {
            result = element;
        }
        majority += result === element ? 1 : -1
    }

    return result;
};