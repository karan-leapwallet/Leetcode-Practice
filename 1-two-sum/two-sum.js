/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hashes = {}
    let l, r
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if (hashes[target - num] !== undefined) {
            l = hashes[target - num]
            r = i
            break
        }
        hashes[num] = i
    }
    return [l, r]
};