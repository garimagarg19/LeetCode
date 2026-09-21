/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    // Step 1: Sort intervals by starting value
    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];

    // Step 2: Traverse intervals
    for (let i = 0; i < intervals.length; i++) {
        let current = intervals[i];

        // If result is empty OR no overlap
        if (result.length === 0 || result[result.length - 1][1] < current[0]) {
            result.push(current);
        } 
        else {
            // Overlap → merge
            result[result.length - 1][1] = Math.max(
                result[result.length - 1][1],
                current[1]
            );
        }
    }

    return result;
};