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
            "1º GRAU: Pele vermelha, dolorida e sem bolhas. → Resfrie a área com água corrente fria por 15 min. Não use gelo.",
            "2º GRAU: Presença de bolhas e dor intensa. → Resfrie com água, não fure as bolhas e cubra levemente com gaze limpa.",
            "3º GRAU: Pele branca, escura ou carbonizada, geralmente sem dor (lesão profunda). → NÃO use água. Não remova roupas grudadas.",
            "TRANSPORTE: Se houver destruição de tecidos, mantenha a pessoa aquecida e hidratada (se consciente) durante o trajeto.",
            "HOSPITAL: Procure o hospital imediatamente se a queimadura for de 2º ou 3º grau, ou se atingir rosto, mãos ou genitais."
        ],
        alerta: "⚠️ NUNCA use pasta de dente, manteiga ou pó de café. Isso causa infecções graves."
    },
    desmaio: {
        titulo: "Desmaio",
        descricao: "Procedimento para quando alguém perde a consciência subitamente.",
        passos: [
            "Deite a pessoa de costas em um local ventilado.",
            "Eleve as pernas da pessoa (cerca de 30cm) para ajudar o sangue a fluir para o cérebro.",
            "Afrouxe roupas apertadas (cintos, golas).",
            "Após recuperar os sentidos, a pessoa deve permanecer sentada por alguns minutos."
        ],
        alerta: "⚠️ Se a pessoa não acordar em 1 minuto, verifique a respiração e peça ajuda."
    }
};

// Função principal para mostrar a instrução
function mostrarInstrucao(tipo) {
    const dados = instrucoesEmergencia[tipo];

    if (dados) {
        // Preenche os textos
        document.getElementById('titulo-emergencia').innerText = dados.titulo;
        document.getElementById('descricao-emergencia').innerText = dados.descricao;
        document.getElementById('alerta').innerText = dados.alerta;

        // Cria a lista de passos numerada (OL) conforme seu CSS planejou
        const listaPassos = document.getElementById('texto-passos');
        listaPassos.innerHTML = '<ol></ol>'; // Limpa e cria a lista
        const ol = listaPassos.querySelector('ol');

        dados.passos.forEach(passo => {
            const li = document.createElement('li');
            li.innerText = passo;
            ol.appendChild(li);
        });

        // Alterna as telas: esconde os botões e mostra a instrução
        document.getElementById('grid-principal').classList.add('escondido');
        document.getElementById('area-instrucao').classList.remove('escondido');
        
        // Rola para o topo para facilitar a leitura
        window.scrollTo(0, 0);
    }
}

// Função para voltar à tela inicial
function voltar() {
    document.getElementById('grid-principal').classList.remove('escondido');
    document.getElementById('area-instrucao').classList.add('escondido');
}