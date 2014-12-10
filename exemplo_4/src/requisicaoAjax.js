window.requisicaoAjax = (function() {
	var self = {};

	self.salvar = function(nome, cpf) {
		var dados = { nome: nome, cpf: cpf }

		$.post('/clientes', dados, self.aposSalvar);
	};

	self.aposSalvar = function() {
		// Faça algo...
	};

	return self;
})();