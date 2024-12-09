import { readTestData } from '../utility/fileHelper';

//Part 1
export const findSumOfDistances = (lines: string[]): number => {
    let firstList: number[] = [];
    let secondList: number[] = [];
    let distancesList: number[] = [];

    lines.forEach((line) => {
        const numbers = line.match(/\d+/g);
        if (numbers?.[0]) firstList.push(parseInt(numbers[0], 10)); 
        if (numbers?.[1]) secondList.push(parseInt(numbers[1], 10)); 
    });
    
    const sortedFirstList = firstList
        .sort((a, b) => b - a);
    
    const sortedSecondList = secondList
        .sort((a, b) => b - a);
    
    const listLength = Math.min(sortedFirstList.length, sortedSecondList.length);
    
    for (let i = 0; i < listLength; i++) {
        const distance = Math.abs(sortedFirstList[i] - sortedSecondList[i]); 
        distancesList.push(distance);
    }

    const sumOfDistances = distancesList.reduce((sum, distance) => sum + distance, 0);
    return sumOfDistances; 
};


//Part 2
export const findSimilarityScore = (lines: string[]): number => {
    let firstList: number[] = [];
    let secondList: number[] = [];
    let similaritiesList: number[] = [];

    lines.forEach((line) => {
        const numbers = line.match(/\d+/g);
        if (numbers?.[0]) firstList.push(parseInt(numbers[0], 10)); 
        if (numbers?.[1]) secondList.push(parseInt(numbers[1], 10)); 
    });

    const listLength = Math.min(firstList.length, secondList.length);
    
    for (let i = 0; i < listLength; i++) {
        let similarity = 0;

        secondList.forEach((num) => {
            if (num === firstList[i]) {
                similarity++;
            } 
        });
        let similarityScore = similarity * firstList[i];
        similaritiesList.push(similarityScore);
    }

    const sumOfSimilarities = similaritiesList.reduce((sum, distance) => sum + distance, 0);
    return sumOfSimilarities; 
};


const filePath = './src/day1/input.txt';
const lines = readTestData(filePath);

console.log(`Part 1: The sum of the distances is: ${findSumOfDistances(lines)}`);
console.log(`Part 2: The similarity score is: ${findSimilarityScore(lines)}`);
