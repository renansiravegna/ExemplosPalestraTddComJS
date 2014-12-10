describe('Async', function() {

	beforeEach(function(done) {
		window.async.disparar();
		
		setTimeout(function() {
			done();
		}, 1100)
	});

	it('deve somar ao valor quando passar 1 segundo', function(done) {
		expect(window.async.valor).toBe(1);
		done();
	});
});