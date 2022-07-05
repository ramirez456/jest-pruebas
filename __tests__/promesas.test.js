const palindrome = word => {
    return new Promise((resolve, reject) => {
        if(!word) {
            reject('No se ingreso una palabra');
        }
        const reverseWord = word.split('').reverse().join('');
        resolve(reverseWord);
    })
}

test('Verificar que hola es igual que aloh', () =>{
    return palindrome('hola').then(result => {
        expect(result).toBe('aloh');
    })
})

test('Verificar que hola es igual que aloh', async() =>{
    const response = await palindrome('hola')
    expect(response).toBe('aloh');
})