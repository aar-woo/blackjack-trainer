const basicStrategyFunctions = require('../basicStrategy');
const compareHardTotal = basicStrategyFunctions.compareHardTotal;

test('function returns a string', () => {
    expect(typeof compareHardTotal(9, 17)).toBe('string')

})

