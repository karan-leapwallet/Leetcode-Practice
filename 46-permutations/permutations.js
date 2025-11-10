/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []
    const hashes = {}
    const permuteGn = (nums, l, r) => {
        if (l >= nums.length || r < 0) {
            return;
        }
        const swappedNums = nums.map((_, i) => {
            if (i === l) {
                return nums[r];
            }
            if (i === r) {
                return nums[l];
            }
            return nums[i];
        })
        const copyNums = nums.map(x => x)
        const swappedNumsHash = swappedNums.join('.');
        const copyNumsHash = copyNums.join('.');
        if (!hashes[swappedNumsHash]) { 
            res.push(swappedNums);
            hashes[swappedNumsHash] = true;
        }
        if (!hashes[copyNumsHash]) { 
            res.push(copyNums);
            hashes[copyNumsHash] = true;
        }
        permuteGn(swappedNums, l + 1, r);
        permuteGn(swappedNums, l, r - 1);
        permuteGn(copyNums, l + 1, r);
        permuteGn(copyNums, l, r - 1);
    }
    permuteGn(nums, 0, nums.length - 1);
    return res
};