/**
 * @param {string} digits
 * @return {string[]}
 */
 
const mapping = {
    "2": ['a', 'b', 'c'],
    "3": ['d', 'e', 'f'],
    "4": ['g', 'h', 'i'],
    "5": ['j', 'k', 'l'],
    "6": ['m', 'n', 'o'],
    "7": ['p', 'q', 'r', 's'],
    "8": ['t', 'u', 'v'],
    "9": ['w', 'x', 'y', 'z'],
}
var letterCombinations = function(digits) {
    const n  = digits.length
    const res = []
    const create = (str, i) => {
        if (i === n) {
            res.push(str);
            return;
        }
        for (let ch of mapping[digits[i]]) {
            create(str + ch, i + 1);
        }
    }
    
    create('', 0);
    return res;
};