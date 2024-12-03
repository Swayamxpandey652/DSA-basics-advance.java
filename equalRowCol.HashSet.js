/**
 * @param {number[][]} grid
 * @return {number}
 */
var equalPairs = function(grid) {
    const n = grid.length;
    const rowMap = new Map();
    let count = 0;

    for(let i=0;i<n;i++){
        const rowKey = grid[i].join(",");
        rowMap.set(rowKey,(rowMap.get(rowKey)||0)+1);
    }

    for(let j=0;j<n;j++){
        const column = [];
        for(let i=0;i<n;i++){
            column.push(grid[i][j]);
        }

        const columnKey = column.join(",");
        if(rowMap.has(columnKey)){
            count += rowMap.get(columnKey);
        }
    }

    return count;
};
