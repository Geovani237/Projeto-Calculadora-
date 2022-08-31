const multiplicacao = require('../src/JAVASCRIPT/multiplicacao');

test('multiplicar 5 * 5 é igual a 25', () => {
    expect(multiplicacao(5, 5)).toBe(25);
});
test('multiplicar -5 * 5 é igual a -25', () => {
    expect(multiplicacao(-5, 5)).toBe(-25);
});
test('multiplicar -5 * 0 é igual a 0', () => {
    expect(multiplicacao(0, -5)).toBe(-0);
});
test('multiplicar 0.25 * 5 é igual a 1.25', () => {
    expect(multiplicacao(0.25, 5)).toBe(1.25);
});


