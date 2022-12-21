const basicStrategyFunctions = require('../basicStrategy');
const compareHardTotal = basicStrategyFunctions.compareHardTotal;

// for (let upcard = 2; upcard <= 11; i++) {
//     for (let i = 2; i < 22; i++) {
//         const currHand = [];
//         currHand.push()
//     }
// }

const hands = [
    [2, 8, 'h'],
    [2, 9, 'h'],
    [2, 10, 'd'],
    [2, 11, 'd'], 
    [2, 12, 'h'],
    [2, 13, 's'],
    [2, 14, 's'],
    [2, 15, 's'],
    [2, 16, 's'],
    [2, 18, 's'],
    [2, 19, 's'],
    [2, 20, 's'],
    [2, 21, 's']
]

describe.each(hands) ('With params %s, %s, %s', (upcard, playerTotal, action) => {
    it(`Action should be ${action}`, () => {
        expect(compareHardTotal(upcard, playerTotal)).toBe(action);
    })
})

// test('function returns a string', () => {
//     expect(typeof compareHardTotal(9, 17)).toBe('string')
// })

