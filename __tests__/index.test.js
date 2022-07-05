test('prueba con tobe', () => {
    expect(2+2).toBe(4);
});

test('prueba con equals ', () => {
    expect(2+2).toEqual(4);
});

test('prueba con equals 5 > 4 ', () => {
    expect(5).toBeGreaterThan(4);
});

test('prueba con equals 4 < 4 ', () => {
    expect(4).toBeLessThan(5);
});