describe('Pessoa', function() {
	it('não deve criar sem nome', function() {
		expect(function() {
			new pessoa();
		}).toThrowError('Nome deve ser informado');
	});

	it('não deve criar sem sobrenome', function() {
		expect(function() {
			new pessoa('Renan');
		}).toThrowError('Sobrenome deve ser informado');
	});

	it('não deve criar sem idade', function() {
		expect(function() {
			new pessoa('Renan', 'Siravegna');
		}).toThrowError('Idade deve ser informada');
	})

	it('deve criar corretamente', function() {
		var nome = 'Renan';
			sobrenome = 'Siravegna';
			idade = 25;

		var novaPessoa = new pessoa(nome, sobrenome, idade);

		expect(novaPessoa.nome).toBe(nome);
		expect(novaPessoa.sobrenome).toBe(sobrenome);
		expect(novaPessoa.idade).toBe(idade);
	});
});