/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function permute(nums) {
    const result = [];

    function backtrack(start) {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }

        for (let i = start; i < nums.length; i++) {
            // Swap
            [nums[start], nums[i]] = [nums[i], nums[start]];

            backtrack(start + 1);

            // Backtrack (swap back)
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }

    backtrack(0);

    return result;
}