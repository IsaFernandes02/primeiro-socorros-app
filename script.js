// Banco de dados local com as instruções
const instrucoesEmergencia = {
    engasgo: {
        titulo: "Engasgo (Manobra de Heimlich)",
        descricao: "Ação rápida para desobstruir as vias aéreas.",
        passos: [
            "Posicione-se atrás da pessoa e envolva-a com os braços ao redor da cintura.",
            "Feche uma das mãos (punho fechado) e coloque a parte do polegar logo acima do umbigo.",
            "Segure o punho com a outra mão e faça pressões rápidas para dentro e para cima.",
            "Continue até que o objeto seja expelido ou a pessoa perca a consciência."
        ],
        alerta: "⚠️ Se a pessoa desmaiar, ligue para o 192 imediatamente."
    },

    queimaduras: {
        titulo: "Queimaduras (Níveis de Gravidade)",
        descricao: "As queimaduras podem variar de leves a graves. Identifique o tipo e siga as orientações adequadas:",
        passos: [
            "1º GRAU: Pele vermelha, dolorida e sem bolhas. → Resfrie a área com água corrente fria por 15 minutos. Não use gelo.",
            "2º GRAU: Presença de bolhas e dor intensa. → Resfrie com água, não fure as bolhas e cubra levemente com gaze limpa.",
            "3º GRAU: Pele branca, escura ou carbonizada, geralmente sem dor (lesão profunda). → NÃO use água. Não remova roupas grudadas.",
            "TRANSPORTE: Se houver destruição de tecidos, mantenha a pessoa aquecida e hidratada (se consciente) durante o trajeto.",
            "HOSPITAL: Procure atendimento imediatamente se a queimadura for de 2º ou 3º grau, ou atingir rosto, mãos ou genitais."
        ],
        alerta: "⚠️ NUNCA use pasta de dente, manteiga ou pó de café. Isso pode causar infecções graves."
    },

    desmaio: {
        titulo: "Desmaio",
        descricao: "Procedimento para quando alguém perde a consciência subitamente.",
        passos: [
            "Deite a pessoa de costas em um local ventilado.",
            "Eleve as pernas da pessoa cerca de 30cm para ajudar o sangue a fluir para o cérebro.",
            "Afrouxe roupas apertadas como cintos e golas.",
            "Após recuperar os sentidos, a pessoa deve permanecer sentada por alguns minutos."
        ],
        alerta: "⚠️ Se a pessoa não acordar em até 1 minuto, verifique a respiração e peça ajuda."
    }
};

// Função principal para mostrar instruções
function mostrarInstrucao(tipo) {

    const dados = instrucoesEmergencia[tipo];

    if (dados) {

        // Título
        document.getElementById("titulo-emergencia").innerText = dados.titulo;

        // Descrição
        document.getElementById("descricao-emergencia").innerText = dados.descricao;

        // Alerta
        document.getElementById("alerta").innerText = dados.alerta;

        // Área dos passos
        const listaPassos = document.getElementById("texto-passos");

        // Limpa conteúdo anterior
        listaPassos.innerHTML = "<ol></ol>";

        const ol = listaPassos.querySelector("ol");

        // Adiciona cada passo
        dados.passos.forEach(passo => {

            const li = document.createElement("li");

            li.innerText = passo;

            ol.appendChild(li);

        });

        // Esconde botões principais
        document.getElementById("grid-principal")
            .classList.add("escondido");

        // Mostra área de instruções
        document.getElementById("area-instrucao")
            .classList.remove("escondido");

        // Rola para o topo
        window.scrollTo(0, 0);
    }
}

// Função voltar
function voltar() {

    document.getElementById("grid-principal")
        .classList.remove("escondido");

    document.getElementById("area-instrucao")
        .classList.add("escondido");
}

// ============================
// BUSCA DE CEP VIA API VIACEP
// ============================

async function buscarCEP() {

    // Pega o CEP digitado
    const cep = document.getElementById("cep").value;

    // Validação simples
    if (cep === "") {

        alert("Digite um CEP!");

        return;
    }

    try {

        // Faz requisição para API
        const resposta = await fetch(
            `https://viacep.com.br/ws/${cep}/json/`
        );

        // Converte para JSON
        const dados = await resposta.json();

        // Verifica se CEP existe
        if (dados.erro) {

            document.getElementById("resultadoCEP")
                .style.display = "block";

            document.getElementById("resultadoCEP")
                .innerHTML = `
                    <p>CEP não encontrado.</p>
                `;

            return;
        }

        // MOSTRA RESULTADO
        document.getElementById("resultadoCEP")
            .style.display = "block";

        // Exibe dados do endereço
        document.getElementById("resultadoCEP")
            .innerHTML = `
                <p><strong>Rua:</strong> ${dados.logradouro}</p>
                <p><strong>Bairro:</strong> ${dados.bairro}</p>
                <p><strong>Cidade:</strong> ${dados.localidade}</p>
                <p><strong>Estado:</strong> ${dados.uf}</p>
            `;

    } catch (erro) {

        document.getElementById("resultadoCEP")
            .style.display = "block";

        document.getElementById("resultadoCEP")
            .innerHTML = `
                <p>Erro ao buscar CEP.</p>
            `;

        console.error(erro);
    }
}