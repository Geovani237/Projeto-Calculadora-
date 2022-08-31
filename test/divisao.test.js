const divisao = require('../src/JAVASCRIPT/divisao');

test('divisão de 2 / 5 é igual a 0.4', () =>{
    expect(divisao(2, 5)).toBe(0.4);
})
test('divisão de 5 / 2 é igual a 2.5', () =>{
    expect(divisao(5, 2)).toBe(2.5);
})
test('divisão de 0 / 2 é igual a 0', () =>{
    expect(divisao(0, 2)).toBe(0);
})
test('divisão de 2.5 / 10 é igual a 0.25', () =>{
    expect(divisao(2.5, 10)).toBe(0.25);
})


