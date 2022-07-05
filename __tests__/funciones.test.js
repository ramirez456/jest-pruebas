const palindromo = word => word.split('').reverse().join('');
test('verificar que hola es igual a aloh', () => {
    expect(palindromo('hola')).toBe('aloh');   
});