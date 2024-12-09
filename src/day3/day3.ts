import { readTestData } from '../utility/fileHelper';

// Part 1
export const processLine = (line: string): number => {
  const regex = /mul\((\d+),(\d+)\)/g;
  let match;
  let lineSum: number = 0;

  while ((match = regex.exec(line)) !== null) {
    const num1 = parseInt(match[1], 10); 
    const num2 = parseInt(match[2], 10); 
    const product = num1 * num2; 
    lineSum += product;
}
  return lineSum;
};

export const sumLines = (lines: string[]): number => {
  let totalSum: number = 0;
  lines.forEach((line) => {
    totalSum += processLine(line)
  });
  return totalSum;
};

// Part 2
export const preprocessInput = (input: string): string => {
  // remove any text following 'don't' up until the next 'do'
  const regex = /don't.*do/g;
  return input.replace(regex, '');
  
};

// Main Execution
const filePath = './src/day3/input.txt';
const lines = readTestData(filePath);
const preprocessedLines = lines.map(preprocessInput);
console.log(`Lines: ${lines}`);
console.log(`Preprocessed lines: ${preprocessedLines}`);
console.log(`Part 1: Answer is: ${sumLines(lines)}`);
console.log(`Part 2: Answer is: ${sumLines(preprocessedLines)}`);