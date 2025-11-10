/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    nums = nums.sort((a, b) => Number(a) - Number(b));
    return nums.at(-k);
};