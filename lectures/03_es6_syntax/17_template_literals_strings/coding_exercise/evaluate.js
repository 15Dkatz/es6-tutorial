it('prints to standard output', function() {
  var stdout = '';

  spyOn(console, 'log').and.callFake(function() {
    stdout += Array.prototype.slice.call(arguments).join(' ') + '\n';
  });

  var expected = 'Luke first uses a blue-colored lightsaber. But his father, Vader, wields a red-colored lightsaber.\n';

  print();

  expect(stdout).toEqual(expected);
});
