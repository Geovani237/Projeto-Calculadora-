const subtracao = require('../src/JAVASCRIPT/subtracao');

test ('subtração de 1 - 2 é igual a -1', () => {
    expect(subtracao(1, 2)).toBe(-1);
});
test ('subtração de -1 - (-2) é igual a 1', () => {
    expect(subtracao(-1, -2)).toBe(1);
});
test('subtração de 0 - 0 é igual a 0', () => {
    expect(subtracao(0, 0)).toBe(0);
});
test('subtração de 10 - (+5) é igual a -15', () => {
    expect(subtracao(10, +5)).toBe(5);
});
