function pessoa(nome, sobrenome, idade) {
	if (nome === undefined)
		throw new Error('Nome deve ser informado');

	if (sobrenome === undefined)
		throw new Error('Sobrenome deve ser informado');

	if (idade === undefined)
		throw new Error('Idade deve ser informada');

	this.nome = nome;
	this.sobrenome = sobrenome;
	this.idade = idade;
}