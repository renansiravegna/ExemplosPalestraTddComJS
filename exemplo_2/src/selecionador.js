window.selecionador = (function() {
	var self = {};

	self.selecionar = function(elemento) {
		$(elemento).addClass('selecionado');
	}

	return self;
})();