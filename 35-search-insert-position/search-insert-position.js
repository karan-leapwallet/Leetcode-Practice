/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    const find = (l, r) => {
        if (l > r) {
            return -1;
        }
        if (l === r) {
            return nums[l] < target ? l + 1 : l;
        }
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid;
        }
        return find(l, r);
    }

    return find(0, nums.length - 1)
};