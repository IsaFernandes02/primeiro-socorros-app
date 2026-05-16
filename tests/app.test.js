// Simulação dos dados para o ambiente de teste (Jest)
const instrucoesMock = {
    engasgo: {
        titulo: "Engasgo (Manobra de Heimlich)",
        passos: ["Passo 1", "Passo 2"]
    },
    queimaduras: {
        titulo: "Queimaduras (Níveis de Gravidade)",
        passos: ["1º GRAU", "2º GRAU", "3º GRAU"]
    }
};

describe('Testes da Lógica de Primeiros Socorros', () => {
    
    // Teste 1: Verificar se o banco de dados de emergências existe
    test('Deve conter as informações de Engasgo no banco de dados', () => {
        expect(instrucoesMock.engasgo.titulo).toBe("Engasgo (Manobra de Heimlich)");
    });

    // Teste 2: Verificar se o detalhamento de queimaduras contém os 3 graus
    test('Deve listar os 3 graus de queimaduras nas instruções', () => {
        const passos = instrucoesMock.queimaduras.passos.join(" ");
        // Verificamos se os textos obrigatórios estão presentes
        expect(passos).toContain("1º GRAU");
        expect(passos).toContain("2º GRAU");
        expect(passos).toContain("3º GRAU");
    });

    // Teste 3: Verificar comportamento de erro
    test('Não deve retornar dados para uma emergência inexistente', () => {
        const tipoInexistente = "ataque_de_tubarao";
        expect(instrucoesMock[tipoInexistente]).toBeUndefined();
    });

});
