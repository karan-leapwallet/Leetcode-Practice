/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let c1 = nums.length - 1;
    let c0 = 0;
    while (c0 < c1) {
        while (nums[c1] === val && c1 > c0) {
            c1 -= 1
        } 
        if (nums[c1] === val) {
            break
        }
        if (nums[c0] === val) {
            nums[c0] = nums[c1]
            nums[c1] = val
            c1 -= 1
        }
        c0 += 1
    }
    
    return c0 < nums.length && nums[c0] !== val ? c0 + 1 : c0
};