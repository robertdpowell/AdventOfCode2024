import { readTestData } from '../utility/fileHelper';
type Operator = '+' | '*' | '||';

//main function
export const processLines = (lines: string[], operators: Operator[]): number => {
    let sum: number = 0;

    //function to generate all possible expressions
    const generateExpressions = (nums: number[], index: number, current: string): string[] => {
        if (index === nums.length - 1) {
            return [current + nums[index]];// base case
        }
        const results: string[] = []; 
        const next = current + nums[index]; 
        operators.forEach(op => {
            results.push(...generateExpressions(nums, index + 1, next + op));
        });
        return results;
    };

    const evaluateExpression = (expr: string): number => {
        const tokens = expr.split(/([+*]|\|\|)/).map(t => t.trim());
        let result = parseInt(tokens[0]);
        for (let i = 1; i < tokens.length; i += 2) {
            const operator = tokens[i];
            const num = parseInt(tokens[i + 1]);
            if (operator === '+') {
                result += num;
            } else if (operator === '*') {
                result *= num; 
            } else if (operator === '||') {
                result = parseInt(result.toString() + num.toString());
        }
    }
        return result;
    };

    lines.forEach((line) => {
        const parts = line.split(": ");
        const answer = parseInt(parts[0]);
        const numbers = parts[1].split(" ").map(x => parseInt(x));

        const expressions = generateExpressions(numbers, 0, '');
        for (const expr of expressions) {
            if (evaluateExpression(expr) === answer) {
                sum += answer;
                break;
            }
        }
    });
    return sum;
};

const filePath = './src/day7/input.txt';
const lines = readTestData(filePath);


const part1Result = processLines(lines, ['+', '*']);
console.log(`Part 1: Sum of valid lines using operators + and * is ${part1Result}`);

const part2Result = processLines(lines, ['+', '*', '||']);
console.log(`Part 2: Sum of valid lines using operators +, * and || is ${part2Result}`);