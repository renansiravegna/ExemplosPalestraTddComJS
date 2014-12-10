describe('Requisição ajax', function() {

	beforeEach(function() {
		spyOn($, 'post');
	});

	it('deve salvar cliente', function() {
		var nome = 'Renan',
			cpf = '123.456.789-10',
			url = '/clientes',
			dadosEnviados = { nome: nome, cpf: cpf },
			callback = window.requisicaoAjax.aposSalvar;

		window.requisicaoAjax.salvar(nome, cpf);

		expect($.post).toHaveBeenCalledWith(url, dadosEnviados, callback);
	});
});