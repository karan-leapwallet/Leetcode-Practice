/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let c1 = m - 1;
    let c2 = n - 1;
    let mc = m + n - 1;
    while (c1 > -1 || c2 > -1) {
        // handle base cases
        if (c1 === -1) {
            nums1[mc] = nums2[c2]
            c2 -= 1
            mc -= 1
            continue
        }

        if (c2 === -1) {
            nums1[mc] = nums1[c1]
            c1 -= 1
            mc -= 1
            continue
        }

        //
        if (nums1[c1] >= nums2[c2]) {
            nums1[mc] = nums1[c1]
            c1 -= 1
        } else {
            nums1[mc] = nums2[c2]
            c2 -= 1
        }
        mc -= 1
    }
};