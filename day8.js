function makeTreeGrid(string) {
    let rows = string.split(' ');
    let grid = [];
    rows.forEach((row) => {
        grid.push(row.split(''));
    })
    console.log(grid);
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

function part2(inputString) {
    let solution = inputString;
    return solution;
}

export function day8(string) {
    return [part1(string), part2(string)];
}