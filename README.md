<div align="center">

# 🚑 Guia de Primeiros Socorros Rápido

Orientações essenciais para agir com segurança em emergências domésticas.

🧠 Informação clara • ⚡ Resposta rápida • ❤️ Foco em salvar vidas

## 🌐 Aplicação Online

https://isafernandes02.github.io/primeiro-socorros-app/

</div>

---

# 📋 Descrição do Problema Real

Situações de emergência dentro de casa são mais comuns do que parecem. Engasgos, desmaios, queimaduras e outros acidentes podem acontecer a qualquer momento.

Nesses instantes críticos, a capacidade de agir rapidamente é fundamental. Porém, o pânico, a falta de informação e a dificuldade em encontrar orientações confiáveis podem atrasar o atendimento inicial e agravar a situação.

Este projeto busca fornecer instruções rápidas e acessíveis para auxiliar pessoas em momentos de emergência até a chegada do atendimento profissional.

---

# 💡 Proposta da Solução

O Guia de Primeiros Socorros Rápido é uma aplicação web desenvolvida para auxiliar usuários em situações emergenciais, oferecendo orientações claras, simples e organizadas.

A aplicação foi projetada para que qualquer pessoa consiga encontrar rapidamente informações úteis em momentos de urgência, mesmo sem possuir conhecimento prévio em primeiros socorros.

A plataforma prioriza:

- Clareza das informações
- Facilidade de navegação
- Rapidez no acesso ao conteúdo
- Interface intuitiva
- Disponibilidade online

---

# 🎯 Objetivos do Projeto

- Fornecer orientações confiáveis sobre primeiros socorros.
- Reduzir o impacto do pânico em situações críticas.
- Facilitar o acesso à informação em emergências.
- Promover conscientização sobre procedimentos básicos de atendimento.
- Demonstrar a integração entre APIs públicas, banco de dados e deploy em nuvem.

---

# 👥 Público-Alvo

Este projeto foi pensado para atender pessoas que podem se deparar com emergências no dia a dia:

- 👨‍👩‍👧 Pais, responsáveis e cuidadores
- 👴 Idosos e familiares
- 🧑‍🤝‍🧑 Pessoas sem treinamento em primeiros socorros
- 🏠 Qualquer pessoa que deseje estar preparada para situações domésticas

---

# ✨ Funcionalidades Principais

### 🚑 Guias de Primeiros Socorros

Instruções rápidas e objetivas para:

- Engasgo
- Queimaduras
- Desmaio

### 📍 Consulta de Endereço por CEP

Integração com a API ViaCEP para localizar rapidamente um endereço durante uma emergência.

Exibe:

- Rua
- Bairro
- Cidade
- Estado

### 📋 Registro de Atendimentos

Permite registrar:

- Nome da pessoa atendida
- Tipo de emergência

Os registros ficam armazenados em banco de dados na nuvem.

### ☁️ Banco de Dados em Nuvem

Integração com Supabase para persistência dos dados.

Cada atendimento é armazenado com:

- Nome
- Emergência
- Data e hora do registro

### 📞 Ligação Rápida para Emergência

Botão de acesso rápido ao SAMU:

- 192

---

# 🧩 Diferenciais

- Interface simples e intuitiva.
- Foco em situações reais de emergência.
- Consulta de endereço integrada.
- Persistência dos registros em banco de dados.
- Aplicação leve e responsiva.
- Disponível online para acesso imediato.

---

# 🛠️ Tecnologias Utilizadas

### Front-end

- HTML5
- CSS3
- JavaScript (Vanilla JS)

### APIs e Banco de Dados

- ViaCEP API
- Supabase

### Testes e Qualidade

- Jest
- ESLint
- GitHub Actions

### Hospedagem

- GitHub Pages

---

# 🚀 Como Executar o Projeto

## 1. Clonar o Repositório

```bash
git clone https://github.com/IsaFernandes02/primeiro-socorros-app.git
```

## 2. Entrar na Pasta

```bash
cd primeiro-socorros-app
```

## 3. Instalar Dependências

```bash
npm install
```

## 4. Executar os Testes

```bash
npm test
```

## 5. Abrir a Aplicação

Abra o arquivo:

```text
index.html
```

ou utilize a extensão Live Server do VS Code.

---

# 🧪 Qualidade e Automação

O projeto utiliza integração contínua através do GitHub Actions.

### Testes Automatizados

Realizados com Jest para validar:

- Funcionalidades da aplicação
- Consumo da API ViaCEP

### Linting

Utilização do ESLint para garantir:

- Padronização do código
- Boas práticas de desenvolvimento

---

# ☁️ Banco de Dados

A aplicação utiliza o Supabase como serviço de banco de dados em nuvem.

Tabela principal:

### atendimentos

Campos:

| Campo | Tipo |
|---------|---------|
| id | bigint |
| nome | text |
| emergencia | text |
| data_ocorrencia | timestamp |

---

# 📈 Versionamento

Este projeto segue o conceito de Versionamento Semântico (SemVer).

Versão atual:

```text
1.0.0
```

---

# 👩‍💻 Autoria

### Desenvolvedora

**Isadora Fernandes da Silva**

---

# 🔗 Links do Projeto

### Repositório GitHub

https://github.com/IsaFernandes02/primeiro-socorros-app

### Aplicação Publicada

https://isafernandes02.github.io/primeiro-socorros-app/

---

# 📚 Projeto Acadêmico

Projeto desenvolvido para a disciplina de BootCamp II, contemplando:

- Git e GitHub
- GitHub Actions
- APIs REST
- Testes Automatizados
- Deploy
- Banco de Dados em Nuvem
- Integração Contínua (CI/CD)

---

<div align="center">

## 🚨 Aviso

Este guia possui caráter educacional e não substitui o atendimento médico profissional.

Em situações graves, ligue imediatamente para o SAMU (192).

</div>



