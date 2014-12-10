/*
	Exemplo (não testado) de como funciona o spy do Jasmine,
	utilizado apenas na explicação
*/

window.postSpy = function() {

	var _postOriginal = $.post;
	var _urlChamada, _dadosChamado, _callbackChamado;

	$.post = postSpy;

	function postSpy(url, dados, callback) {
		_urlChamada = url;
		_dadosChamado = dados;
		_callbackChamado = callback;

		$.post = _postOriginal;
	}

	self.foiChamadoCom = function(url, dados, callback) {
		return _urlChamada === url &&
			   _dadosChamado === dados &&
			   _callbackChamado === callback;
	};

	return self;
};