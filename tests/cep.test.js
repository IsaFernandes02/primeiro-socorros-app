const fetch = require('node-fetch');

test('Teste simples da API ViaCEP', async () => {
    const resposta = await fetch('https://viacep.com.br/ws/01001000/json/');

    const dados = await resposta.json();

    expect(dados.localidade).toBe('São Paulo');
});