const basicStrategyFunctions = require('../basicStrategy');
const compareSoftTotal = basicStrategyFunctions.compareSoftTotal;


const expectedOutcomes = [
    [2, 13, 'h'], [2, 14, 'h'], [2, 15, 'h'], [2, 16, 'h'], [2, 17, 'h'], [2, 18, 'd'], [2, 19, 's'], [3, 13, 'h'], [3, 14, 'h'], [3, 15, 'h'], [3, 16, 'h'], [3, 17, 'd'], [3, 18, 'd'], [3, 19, 's'], [4, 13, 'h'], [4, 14, 'h'], [4, 15, 'd'], [4, 16, 'd'], [4, 17, 'd'], [4, 18, 'd'], [4, 19, 's'], [5, 13, 'd'], [5, 14, 'd'], [5, 15, 'd'], [5, 16, 'd'], [5, 17, 'd'], [5, 18, 'd'], [5, 19, 's'], [6, 13, 'd'], [6, 14, 'd'], [6, 15, 'd'], [6, 16, 'd'], [6, 17, 'd'], [6, 18, 'd'], [6, 19, 'd'], [7, 13, 'h'], [7, 14, 'h'], [7, 15, 'h'], [7, 16, 'h'], [7, 17, 'h'], [7, 18, 's'], [7, 19, 's'], [8, 13, 'h'], [8, 14, 'h'], [8, 15, 'h'], [8, 16, 'h'], [8, 17, 'h'], [8, 18, 's'], [8, 19, 's'], [9, 13, 'h'], [9, 14, 'h'], [9, 15, 'h'], [9, 16, 'h'], [9, 17, 'h'], [9, 18, 'h'], [9, 19, 's'], [10, 13, 'h'], [10, 14, 'h'], [10, 15, 'h'], [10, 16, 'h'], [10, 17, 'h'], [10, 18, 'h'], [10, 19, 's'], [11, 13, 'h'], [11, 14, 'h'], [11, 15, 'h'], [11, 16, 'h'], [11, 17, 'h'], [11, 18, 'h'], [11, 19, 's'],
]

describe.each(expectedOutcomes)('With params %s, %s, %s', (upcard, playerTotal, action) => {
    it(`Action should be ${action}`, () => {
        expect(compareSoftTotal(upcard, playerTotal)).toBe(action);
    })
})
