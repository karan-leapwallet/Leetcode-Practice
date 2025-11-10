/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const levelWiseValues = {}
    const traverse = (curr, level) => {
        if (!curr) {
            return;
        }

        if (!levelWiseValues[level]) {
            levelWiseValues[level] = [];
        }
        levelWiseValues[level].push(curr.val);
        traverse(curr.left, level + 1);
        traverse(curr.right, level + 1);
    }

    traverse(root, 0);

    return Object.values(levelWiseValues);
};