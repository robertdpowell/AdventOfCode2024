import { describe, it, expect } from 'vitest';
import { findSumOfDistances } from './day1';
import { findSimilarityScore } from './day1';


describe('findSumOfDistances', () => {
    it('should sum the values in the list of distances', () => {
        const input = [
            '3   4',
            '4   3',
            '2   5',
            '1   3',
            '3   9',
            '3   3'
        ];
        const result = findSumOfDistances(input);
        expect(result).toBe(11);
    });
});

describe('findSimilarityScore', () => {
    it('should sum the scores in the list of similarity scores', () => {
        const input = [
            '3   4',
            '4   3',
            '2   5',
            '1   3',
            '3   9',
            '3   3'
        ];
        const result = findSimilarityScore(input);
        expect(result).toBe(31);
    });
});
