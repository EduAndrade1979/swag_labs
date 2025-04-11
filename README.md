# 🚀 Projeto de Testes Automatizados - Swag Labs

[![Cypress Tests](https://github.com/EduAndrade1979/swag_labs/actions/workflows/cypress.yml/badge.svg)](https://github.com/EduAndrade1979/swag_labs/actions)

Este projeto demonstra a automação de testes end-to-end (E2E) utilizando Cypress com Cucumber (BDD), adotando boas práticas como uso de Page Object Model (POM), variáveis de ambiente, biblioteca auxiliar `chance.js` e execução via CI/CD com GitHub Actions.

---

## 🚀 Tecnologias Utilizadas

- **[Cypress](https://www.cypress.io/)**: Ferramenta de testes E2E.
- **[Cypress Cucumber Preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor)**: Permite escrever testes em formato BDD.
- **[Chance.js](https://chancejs.com/)**: Geração de dados aleatórios.
- **GitHub Actions**: Execução automatizada dos testes.
- **dotenv**: Carrega variáveis de ambiente a partir de arquivos `.env`.

---

## ⚙️ Pré-requisitos

Certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [Git](https://git-scm.com/)

---

## 📦 Instalação

1. Clone o repositório:

```bash
git clone https://github.com/EduAndrade1979/swag_labs.git
cd swag_labs
```

2. Instale as dependências:

```bash
npm install --save-dev cypress
npm install --save-dev cypress-cucumber-preprocessor
npm install --save chance
npm install --save-dev dotenv
```

---

## 🔐 Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com as seguintes chaves:

```env
CYPRESS_BASE_URL=https://www.saucedemo.com/
CYPRESS_USERNAME=standard_user
CYPRESS_PASSWORD=secret_sauce
CYPRESS_USER_FIRSTNAME=Eduardo
CYPRESS_USER_LASTNAME=Andrade
CYPRESS_USER_POSTAL_CODE=12345
```

Essas variáveis também são usadas no pipeline CI/CD como `GitHub Secrets`.

---

## 🧠 Organização do Projeto

```bash
📁 .github
└── 📁 workflows
    └── cypress.yml           # Pipeline CI/CD do GitHub Actions

📁 cypress
├── 📁 e2e
│   └── 📁 features          # Arquivos .feature (BDD com Gherkin)
├── 📁 support
│   ├── 📁 pages             # Page Object Model
│   │   ├── loginPage.js
│   │   └── purchaseFlowPage.js
│   └── utils.js            # Funções auxiliares (ex: verificação de URL)

📄 cypress.config.js         # Configuração do Cypress com Cucumber
📄 package.json              # Dependências do projeto
📄 .env                      # Variáveis de ambiente (ignorado pelo Git)
📄 README.md                 # Este arquivo
```

---

## ✅ Executando os Testes

### Testes locais:

```bash
npx cypress open
# ou para modo headless:
npx cypress run
```

---

## 🤖 Integração Contínua com GitHub Actions

O projeto contém um arquivo `.github/workflows/cypress.yml` que define um pipeline CI/CD para rodar os testes automaticamente em cada `push` ou `pull request` na branch `main`.

As credenciais e dados sensíveis são configurados como **Secrets** no repositório do GitHub, garantindo segurança:

```yaml
env:
  CYPRESS_username: ${{ secrets.CYPRESS_USERNAME }}
  CYPRESS_password: ${{ secrets.CYPRESS_PASSWORD }}
  CYPRESS_firstName: ${{ secrets.CYPRESS_FIRSTNAME }}
  CYPRESS_lastName: ${{ secrets.CYPRESS_LASTNAME }}
  CYPRESS_postalCode: ${{ secrets.CYPRESS_POSTALCODE }}
  CYPRESS_baseUrl: ${{ secrets.CYPRESS_BASEURL }}
```

Esse uso de variáveis no pipeline é uma prática recomendada que separa dados sensíveis do código, contribuindo para a segurança e escalabilidade do projeto.

---

## ✨ Diferenciais do Projeto

- Testes escritos em **BDD** (Behavior Driven Development).
- Uso de **Page Object Model** para melhor organização e reutilização de código.
- **Geração dinâmica de dados** com `chance.js`.
- **Separação de configurações sensíveis** via `.env` e `GitHub Secrets`.
- Integração com **CI/CD via GitHub Actions**.
- Uso de **badges** para indicar status da integração contínua.

---

## 📷 Demonstração

Você pode visualizar os testes sendo executados com logs detalhados pelo Cypress CLI ou interface interativa com `npx cypress open`.

---

## 👨‍💻 Autor

**Eduardo Andrade**

Conecte-se comigo no [LinkedIn](https://www.linkedin.com/in/edu-andrade-qa/) para trocar ideias sobre QA, automação e tecnologia!

---

## 📄 Licença

Este é um projeto educacional de portfólio e **não está aberto a contribuições externas**.
Sinta-se à vontade para clonar, estudar ou adaptar o conteúdo para seus próprios projetos, mas colaborações via pull requests não serão aceitas.

