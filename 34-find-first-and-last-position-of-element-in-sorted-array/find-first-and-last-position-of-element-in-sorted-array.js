/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    const leftTarget = (l, r) => {
        if (l > r) {
            return -1;
        }
        if (l === r) {
            return nums[l] === target ? l : -1;
        }
        const mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else {
            r = mid;
        }
        return leftTarget(l, r)
    }

    const rightTarget = (l, r) => {
        if (l > r) {
            return -1;
        }
        if (l === r) {
            return nums[l] === target ? l : -1;
        }
        const mid = Math.ceil((l + r) / 2);
        if (nums[mid] > target) {
            r = mid - 1;
        } else {
            l = mid;
        }
        return rightTarget(l, r)
    }
    return [leftTarget(0, nums.length), rightTarget(0, nums.length - 1)]
};