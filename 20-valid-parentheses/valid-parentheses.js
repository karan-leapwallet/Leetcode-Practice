/**
 * @param {string} s
 * @return {boolean}
 */

const isReverse = (curr, ref) => {
    if (ref === '(') {
        return curr === ')';
    }
    if (ref === '[') {
        return curr === ']';
    }
    if (ref === '{') {
        return curr === '}';
    }
    return false
}

var isValid = function(s) {
    let stack = []
    for (let ch of s) {
        if (['(', '{', '['].includes(ch)) {
            stack.push(ch);
        } else if (!isReverse(ch, stack.pop())) {
            return false;
        }
    }

    return stack.length === 0;
};