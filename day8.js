function makeTreeGrid(string) {
    let rows = string.split(' ');
    let grid = [];
    rows.forEach((row) => {
        grid.push(row.split(''));
    })
    return grid;
}

function checkVisibility(treeHeight, row, column, grid) {
    const ROW_SIZE = grid.length - 1;
    const COLUMN_SIZE = grid[row].length - 1;
    let left = true;
    let right = true;
    let top = true;
    let bottom = true;
    for(let i = 0; i < row; i++) {
        if(grid[i][column] >= treeHeight) {
            left = false;
            break;
        }
    }
    for(let i = ROW_SIZE; i > row; i--) {
        if(grid[i][column] >= treeHeight) {
            right = false;
            break;
        }
    }
    for(let i = 0; i < column; i++) {
        if(grid[row][i] >= treeHeight) {
            top = false;
            break;
        }
    }
    for(let i = COLUMN_SIZE; i > column; i--) {
        if(grid[row][i] >= treeHeight) {
            bottom = false;
            break;
        }
    }

    return left || right || top || bottom;
}

function part1(inputString) {
    let solution = 0;
    let treeGrid = makeTreeGrid(inputString);
    treeGrid.forEach((row, rowIndex) => {
        row.forEach((treeHeight, columnIndex) => {
            solution += checkVisibility(treeHeight, rowIndex, columnIndex, treeGrid);
        })
    })
    return solution;
}

function getScenicScore(treeHeight, row, column, grid) {
    const ROW_SIZE = grid.length;
    const COLUMN_SIZE = grid[row].length;
    let left = 0;
    let right = 0;
    let top = 0;
    let bottom = 0;
    for(let i = 1; (row + i) < ROW_SIZE; i++) {
        right++;
        if(grid[row + i][column] >= treeHeight) {
            break;
        }
    }
    for(let i = 1; (row - i) >= 0; i++) {
        left++;
        if(grid[row - i][column] >= treeHeight) {
            break;
        }
    }
    for(let i = 1; (column + i) < COLUMN_SIZE; i++) {
            top++;
            if(grid[row][column + i] >= treeHeight) {
            break;
        }
    }
    for(let i = 1; (column - i) >= 0; i++) {
        bottom++;
        if(grid[row][column - i] >= treeHeight) {
            break;
        }
    }
    return left * right * top * bottom;
}

function part2(inputString) {
    let solution = 0;
    let treeGrid = makeTreeGrid(inputString);
    let scenicScore;
    treeGrid.forEach((row, rowIndex) => {
        row.forEach((treeHeight, columnIndex) => {
            scenicScore = getScenicScore(treeHeight, rowIndex, columnIndex, treeGrid);
            solution = solution > scenicScore ? solution : scenicScore;
        })
    })
    return solution;
}

export function day8(string) {
    return [part1(string), part2(string)];
}