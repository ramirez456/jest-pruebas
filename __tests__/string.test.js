var helloWord = 'hola mundo';
test('que la palabra hola este dentro de mi variabnle',()=>{
    expect(helloWord).toContain('hola');
    expect(helloWord).toMatch(/hola/);
});

test('que la palabra hola este dentro de mi variabnle',()=>{
    expect(helloWord).not.toMatch(/todos/);
});