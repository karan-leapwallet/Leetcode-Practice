/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const hashes = {};

    for (let str of strs) {
        let hash = new Array(26).fill(0);
        for (let ch of str) {
            hash[ch.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
        }
        if (!hashes[hash]) {
            hashes[hash] = []
        }
        hashes[hash].push(str);
    }
    return Object.values(hashes);
};