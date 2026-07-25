/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum(candidates, target) {
    const result = [];

    function backtrack(start, path, sum) {
        if (sum === target) {
            result.push([...path]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            path.push(candidates[i]);

            // Same element can be used multiple times
            backtrack(i, path, sum + candidates[i]);

            path.pop();
        }
    }

    backtrack(0, [], 0);

    return result;
}