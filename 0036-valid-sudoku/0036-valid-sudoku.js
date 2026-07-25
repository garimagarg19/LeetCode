/**
 * @param {character[][]} board
 * @return {boolean}
 */
function isValidSudoku(board) {
    const rows = new Set();
    const cols = new Set();
    const boxes = new Set();

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];

            if (num === '.') continue;

            const rowKey = `${i}-${num}`;
            const colKey = `${j}-${num}`;
            const boxKey = `${Math.floor(i / 3)}-${Math.floor(j / 3)}-${num}`;

            if (
                rows.has(rowKey) ||
                cols.has(colKey) ||
                boxes.has(boxKey)
            ) {
                return false;
            }

            rows.add(rowKey);
            cols.add(colKey);
            boxes.add(boxKey);
        }
    }

    return true;
}