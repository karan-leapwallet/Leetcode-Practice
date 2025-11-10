/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const str = s.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, '')
    return str === str.split('').reverse().join('')
};