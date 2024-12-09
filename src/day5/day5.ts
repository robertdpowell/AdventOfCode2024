import { readTestData } from '../utility/fileHelper';

// Split the input into rules and updates
export const splitRulesAndUpdates = (lines: string[]): { rules: string[]; updates: string[] } => {
    const blankLineIndex = lines.indexOf(''); 
    const rules = lines.slice(0, blankLineIndex);
    const updates = lines.slice(blankLineIndex + 1);
    return { rules, updates };
};

// Find the sum of the middle number of each update that passes all rules
export const findValidUpdates = (rules: string[], updates: string[]): [number, number] => {
    let middleSum: number = 0;
    let invalidMiddleSum: number = 0; // Correct spelling

    updates.forEach((update) => {
        const numbers = update.split(',').map(Number);

        // Filter rules to only include those relevant to this update
        const relevantRules = rules.filter((rule) => {
            const [before, after] = rule.split('|').map(Number);
            return numbers.includes(before) && numbers.includes(after);
        });

        // Check if all relevant rules pass
        const allRulesPass = relevantRules.every((rule) => {
            const [before, after] = rule.split('|').map(Number);
            const beforeIndex = numbers.indexOf(before);
            const afterIndex = numbers.indexOf(after);
            return beforeIndex < afterIndex;
        });

        // Check if any relevant rule fails
        const anyRuleFails = relevantRules.some((rule) => {
            const [before, after] = rule.split('|').map(Number);
            const beforeIndex = numbers.indexOf(before);
            const afterIndex = numbers.indexOf(after);
            return beforeIndex > afterIndex;
        });
    

        // If all rules pass, add the middle number to the sum
        if (allRulesPass) {
            const middleIndex = Math.floor(numbers.length / 2);
            middleSum += numbers[middleIndex];
        }

        if (anyRuleFails) {
            // reorder the numbers using the relevant rules
            const newNumbers = numbers.slice();
            

            const middleIndex = Math.floor(numbers.length / 2);
            invalidMiddleSum += numbers[middleIndex];
        }
    });
    return [middleSum, invalidMiddleSum];
};

const filePath = './src/day5/input.txt';
const lines = readTestData(filePath);
const { rules, updates } = splitRulesAndUpdates(lines);
const [validSum, invalidSum] = findValidUpdates(rules, updates); // Destructure the tuple
console.log('Valid Sum:', validSum);
console.log('Invalid Sum:', invalidSum);