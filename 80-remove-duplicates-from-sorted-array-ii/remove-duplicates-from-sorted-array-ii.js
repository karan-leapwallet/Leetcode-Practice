/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length <= 2) {
        return nums.length;
    }

    let lastPushedIndex = 0;
    let lastPushedOccurences = 1;
    let current = 1;

    while (current < nums.length) {
        if (nums[current] === nums[lastPushedIndex] && lastPushedOccurences < 2) {
            lastPushedIndex += 1
            nums[lastPushedIndex] = nums[current];
            lastPushedOccurences += 1;
        } else if (nums[current] !== nums[lastPushedIndex]) {
            lastPushedIndex += 1
            lastPushedOccurences = 1
            nums[lastPushedIndex] = nums[current]
        } else {

        }
        current += 1
    }

    return lastPushedIndex + 1;
};