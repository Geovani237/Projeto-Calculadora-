const soma = require('../src/JAVASCRIPT/soma');

test('somar 1 + 2 é igual a 3', () => {
  expect(soma(1, 2)).toBe(3);
});
test('somar -1 + 2 é igual a 1', () => {
    expect(soma(-1, 2)).toBe(1);
  });
  test('somar 0 + 2 é igual a 2', () => {
    expect(soma(0, 2)).toBe(2);
  });