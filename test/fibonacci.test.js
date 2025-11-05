describe('fibonacci', () => {
  it('debería lanzar RangeError si n ≤ 0', () => {
    expect(() => fibonacci(-1)).to.throw(RangeError, 'solo números enteros ≥ 0');
    expect(() => fibonacci(0)).to.throw(RangeError, 'solo números enteros ≥ 0');
  });

  it('debería devolver 1 si n = 1', () => {
    expect(fibonacci(1)).to.equal(1);
  });

  it('debería devolver 1 si n = 2', () => {
    expect(fibonacci(2)).to.equal(1);
  });

  it('debería devolver 5 si n = 5', () => {
    expect(fibonacci(5)).to.equal(5);
  });

  it('debería devolver 13 si n = 7', () => {
    expect(fibonacci(7)).to.equal(13);
  });
});
