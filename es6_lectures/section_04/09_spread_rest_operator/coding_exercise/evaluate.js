describe('butter()', function() {
  it('should throw if the wrong result is returned', function() {
    expect(butter(4, 5, 6)).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
