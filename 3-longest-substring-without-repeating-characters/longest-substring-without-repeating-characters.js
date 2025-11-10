/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let left = 0, right = 0;
    let maxLen = 0;
    const runningHash = {};
    while (right < s.length) {
        const curr = s[right]
        if (runningHash[curr]) {
            while (s[left] !== curr) {
                runningHash[s[left]]--;
                left++;
            }
            left++;
            while (right < left) {
                right++;
            }
        } 
        runningHash[curr] = 1;
        maxLen = Math.max(right - left + 1, maxLen);
        right++;
    }

    return maxLen
};