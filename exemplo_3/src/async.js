window.async = (function() {
	var self = {};

	self.valor = 0;

	self.disparar = function() {
		setTimeout(function() {
			self.valor++;
		}, 1000);
	}

	return self;
})();