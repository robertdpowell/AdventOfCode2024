import { readTestData } from '../utility/fileHelper';

export const isLineSafe = (numbers: number[]): boolean => {
    const first = numbers[0];
    const second = numbers[1];

    if (first === second) {
        return false; 
    }

    if (first > second) {
        for (let i = 0; i < numbers.length - 1; i++) {
            const current = numbers[i];
            const next = numbers[i + 1];

            if (!(current > next && Math.abs(current - next) > 0 && Math.abs(current - next) <= 3)) {
                return false; 
            }
        }
    } else {
        for (let i = 0; i < numbers.length - 1; i++) {
            const current = numbers[i];
            const next = numbers[i + 1];

            if (!(current < next && Math.abs(current - next) > 0 && Math.abs(current - next) <= 3)) {
                return false; 
            }
        }
    }
    return true; 
};

export const findSafeReports = (lines: string[]): number => {
    let safeReports: number = 0;

    lines.forEach((line) => {
        const numbers = line.split(/\s+/).map(Number);

        if (isLineSafe(numbers)) {
            safeReports += 1;
        }
    });

    return safeReports;
};


export const findToleratedReports = (lines: string[]): number => {
    let toleratedReports: number = 0;

    lines.forEach((line) => {
        const numbers = line.split(/\s+/).map(Number);

        // Ignore safe lines
        if (!isLineSafe(numbers)) {
            for (let i = 0; i < numbers.length; i++) {
                
                // needed help with this bit!
                const variation = numbers.filter((_, index) => index !== i);

                // Check if the variation is safe
                if (isLineSafe(variation)) {
                    toleratedReports += 1;
                    return; 
                }
            }
        }
    });
    return toleratedReports;
};   

const filePath = './src/day2/input.txt';
const lines = readTestData(filePath);
console.log(`Part 1: Count of safe reports is: ${findSafeReports(lines)}`);
console.log(`Part 2: Count of safe reports is: ${findSafeReports(lines) + findToleratedReports(lines)}`);