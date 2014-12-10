describe('Aviso com alert', function() {

	beforeEach(function() {
		spyOn(window, 'alert');
	});

	it('deve dar feedback ao salvar', function() {
		window.aviso.salvar();

		expect(window.alert).toHaveBeenCalledWith('Salvo com sucesso');
	});
});