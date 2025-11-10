/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    const n = nums.length
    const updatedK = k % n;
    const reverse = (left, right) => {
        while (left < right) {
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            left++
            right--
        }
    }
    reverse(0, n - 1);
    reverse(0, updatedK - 1);
    reverse(updatedK, n - 1);
};