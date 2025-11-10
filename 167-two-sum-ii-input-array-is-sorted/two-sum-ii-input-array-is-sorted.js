/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let n = numbers.length
    let left = 0, right = n - 1

    while (left < right) {
        const currSum = numbers[left] + numbers[right]
        if (currSum === target) {
            return [left + 1, right + 1]
        }
        if (currSum > target) {
            right--
        } else {
            left++
        }
    }
};