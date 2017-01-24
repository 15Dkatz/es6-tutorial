it('prints to standard output', function() {
    var stdout = '';

    spyOn(console, 'log').and.callFake(function() {
        stdout += Array.prototype.slice.call(arguments).join(' ') + '\n';
    });

    run();

    expect(stdout).toEqual('2\n3\n');
});
