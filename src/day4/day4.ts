import { readTestData } from '../utility/fileHelper';
type Grid = string[][];

//function to represent input as a 2d grid array
export const generateGrid = (lines: string[]): string[][] => {
    const grid: string[][] = [];
    lines.forEach(line => {
        const row: string[] = line.split('');
        grid.push(row);
    });
    return grid;
}

//helper to visualize the grid
export const findXmas = (grid: Grid): number => {
    let count: number = 0;
    for (let i = 0; i < grid.length; i++) {
        const line = grid[i];
        // Check up to length-3 to ensure we have room for full "XMAS"
        for (let j = 0; j < line.length - 3; j++) {
            // Check if current position starts an "XMAS" sequence
            if (line[j] === 'X' && 
                line[j + 1] === 'M' && 
                line[j + 2] === 'A' && 
                line[j + 3] === 'S') {
                console.log(`XMAS found at ${i},${j} and whole line is ${line}`);
                count++;
            }
        }
    }
    //find xmas backwards horizontally
    for (let i = 0; i < grid.length; i++) {
        const line = grid[i];
        // Check up to length-3 to ensure we have room for full "XMAS"
        for (let j = line.length - 1; j >= 3; j--) {
            // Check if current position starts an "XMAS" sequence
            if (line[j] === 'X' && 
                line[j - 1] === 'M' && 
                line[j - 2] === 'A' && 
                line[j - 3] === 'S') {
                console.log(`XMAS found backwards at ${i},${j} and whole line is ${line}`);
                count++;
            }
        }
    }
    //find xmas vertically downwards
    for (let i = 0; i < grid.length - 3; i++) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'X' && 
                grid[i + 1][j] === 'M' && 
                grid[i + 2][j] === 'A' && 
                grid[i + 3][j] === 'S') {
                console.log(`XMAS found downwards at ${i},${j}`);
                count++;
            }
        }
    }
    //find xmas vertically upwards
    for (let i = grid.length - 1; i >= 3; i--) {
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 'X' && 
                grid[i - 1][j] === 'M' && 
                grid[i - 2][j] === 'A' && 
                grid[i - 3][j] === 'S') {
                console.log(`XMAS found upwards at ${i},${j}`);
                count++;
            }
        }
    }
    //find xmas diagonally downwards right
    for (let i = 0; i < grid.length - 3; i++) {
        for (let j = 0; j < grid[i].length - 3; j++) {
            if (grid[i][j] === 'X' && 
                grid[i + 1][j + 1] === 'M' && 
                grid[i + 2][j + 2] === 'A' && 
                grid[i + 3][j + 3] === 'S') {
                console.log(`XMAS found diagonally downwards right at ${i},${j}`);
                count++;
            }
        }
    }
    //find xmas diagonally downwards left
    for (let i = 0; i < grid.length - 3; i++) {
        for (let j = grid[i].length - 1; j >= 3; j--) {
            if (grid[i][j] === 'X' && 
                grid[i + 1][j - 1] === 'M' && 
                grid[i + 2][j - 2] === 'A' && 
                grid[i + 3][j - 3] === 'S') {
                console.log(`XMAS found diagonally downwards left at ${i},${j}`);
                count++;
            }
        }
    }
    //find xmas diagonally upwards right
    for (let i = grid.length - 1; i >= 3; i--) {
        for (let j = 0; j < grid[i].length - 3; j++) {
            if (grid[i][j] === 'X' && 
                grid[i - 1][j + 1] === 'M' && 
                grid[i - 2][j + 2] === 'A' && 
                grid[i - 3][j + 3] === 'S') {
                console.log(`XMAS found diagonally upwards right at ${i},${j}`);
                count++;
            }
        }
    }
    //find xmas diagonally upwards left
    for (let i = grid.length - 1; i >= 3; i--) {
        for (let j = grid[i].length - 1; j >= 3; j--) {
            if (grid[i][j] === 'X' && 
                grid[i - 1][j - 1] === 'M' && 
                grid[i - 2][j - 2] === 'A' && 
                grid[i - 3][j - 3] === 'S') {
                console.log(`XMAS found diagonally upwards left at ${i},${j}`);
                count++;
            }
        }
    }
    return count;
};

//MAS MAS downwards
 export const findMas = (grid: Grid): number => {
    let masCount: number = 0;
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[i].length - 1; j++) {
            if (grid[i][j] === 'M' &&       // First M at (i,j)
                grid[i][j + 2] === 'M' &&   // Second M at (i,j+1)
                grid[i + 1][j+1] === 'A' &&   // A at (i+1,j)
                grid[i + 2][j] === 'S' &&   // First S at (i+2,j)
                grid[i + 2][j + 2] === 'S') // Second S at (i+2,j+1)
            {
                console.log(`MAS pattern found at ${i},${j}`);
                masCount++;
            }
        }
    }
    // SAM MAS downwords
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[i].length - 1; j++) {
            if (grid[i][j] === 'S' &&       
                grid[i][j + 2] === 'M' &&   
                grid[i + 1][j+1] === 'A' &&   
                grid[i + 2][j] === 'S' &&   
                grid[i + 2][j + 2] === 'M') 
            {
                console.log(`MAS pattern found at ${i},${j}`);
                masCount++;
            }
        }
    }
    // SAM SAM downwards
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[i].length - 1; j++) {
            if (grid[i][j] === 'S' &&       
                grid[i][j + 2] === 'S' &&   
                grid[i + 1][j+1] === 'A' &&   
                grid[i + 2][j] === 'M' &&   
                grid[i + 2][j + 2] === 'M') 
            {
                console.log(`MAS pattern found at ${i},${j}`);
                masCount++;
            }
        }
    }
    // MAS SAM downwards
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[i].length - 1; j++) {
            if (grid[i][j] === 'M' &&       
                grid[i][j + 2] === 'S' &&   
                grid[i + 1][j+1] === 'A' &&   
                grid[i + 2][j] === 'M' &&   
                grid[i + 2][j + 2] === 'S') 
            {
                console.log(`MAS pattern found at ${i},${j}`);
                masCount++;
            }
        }
    }
    
    return masCount;
};


const filePath = './src/day4/input.txt';
const lines = readTestData(filePath);
const grid = generateGrid(lines);
console.log(findXmas(grid));
console.log(findMas(grid));