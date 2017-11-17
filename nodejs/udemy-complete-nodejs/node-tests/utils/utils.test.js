const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    // Act
    const result = utils.add(33, 11);

    // Assert
    expect(result).toBe(44);
});

it('should add async', async () => {
    const result = await utils.asyncAdd(2, 3);

    expect(result).toBe(5);
});