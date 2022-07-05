var nombres = ['Juan', 'Pedro', 'Maria', 'Juan', 'Pedro', 'Maria'];

test('varificaciones en arrays', () =>{
    expect(nombres).toContain('Juan');
    expect(nombres).toContain('Pedro');
    expect(nombres).toContain('Maria');
    expect(nombres).not.toContain('Juanito');
    expect(new Set(nombres)).toContain('Juan');
})