describe('Selecionador', function() {

	beforeEach(function() {
		var fixture = $('<div id="fixture"></div>');
		$('body').append(fixture);
	});

	afterEach(function() {
		$('#fixture').remove();
	});

	it('deve marcar um determinado elemento', function() {
		var elemento = $('#fixture');

		window.selecionador.selecionar(elemento);

		expect(elemento.attr('class')).toBe('selecionado');
	});

	xit('não deve marcar vários elementos', function() {

	});

	xit('deve esconder os elementos irmãos', function() {

	});
});