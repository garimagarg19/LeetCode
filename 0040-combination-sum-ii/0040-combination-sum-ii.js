/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
function combinationSum2(candidates, target) {
    candidates.sort((a, b) => a - b);

    const result = [];

    function backtrack(start, path, sum) {
        if (sum === target) {
            result.push([...path]);
            return;
        }

        if (sum > target) return;

        for (let i = start; i < candidates.length; i++) {
            // Skip duplicates
            if (i > start && candidates[i] === candidates[i - 1]) {
                continue;
            }

            path.push(candidates[i]);

            // Move to next index (each number can be used only once)
            backtrack(i + 1, path, sum + candidates[i]);

            path.pop();
        }
    }

    backtrack(0, [], 0);

    return result;
}