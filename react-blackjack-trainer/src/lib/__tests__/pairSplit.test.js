const basicStrategyFunctions = require('../basicStrategy');
const comparePair = basicStrategyFunctions.comparePair;


const expectedOutcomes = [
    [2, 2, true], [2, 3, true], [2, 4, false], [2, 6, true], [2, 7, true], [2, 9, true], [3, 2, true], [3, 3, true], [3, 4, false], [3, 6, true], [3, 7, true], [3, 9, true], [4, 2, true], [4, 3, true], [4, 4, false], [4, 6, true], [4, 7, true], [4, 9, true], [5, 2, true], [5, 3, true], [5, 4, true], [5, 6, true], [5, 7, true], [5, 9, true], [6, 2, true], [6, 3, true], [6, 4, true], [6, 6, true], [6, 7, true], [6, 9, true], [7, 2, true], [7, 3, true], [7, 4, false], [7, 6, false], [7, 7, true], [7, 9, false], [8, 2, false], [8, 3, false], [8, 4, false], [8, 6, false], [8, 7, false], [8, 9, true], [9, 2, false], [9, 3, false], [9, 4, false], [9, 6, false], [9, 7, false], [9, 9, true], [10, 2, false], [10, 3, false], [10, 4, false], [10, 6, false], [10, 7, false], [10, 9, false], [11, 2, false], [11, 3, false], [11, 4, false], [11, 6, false], [11, 7, false], [11, 9, false],
]

describe.each(expectedOutcomes)('With params %s, %s, %s', (upcard, pairCardValue, action) => {
    it(`Action should be ${action}`, () => {
        expect(comparePair(upcard, pairCardValue)).toBe(action);
    })
})
