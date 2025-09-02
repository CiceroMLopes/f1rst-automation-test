# F1RST QA - Desafio Automação (Cypress + Cucumber)

## Tecnologias utilizadas
- Cypress
- Cucumber (BDD) via '@badeball/cypress-cucumber-preprocessor'
- JavaScript
-  TypeScript
- Page Objects

## Estrutura de pastas
- 'cypress/e2e/features/` → arquivos '.feature'
- 'cypress/support/stepDefinitions/' → steps
- 'cypress/pages/' → Page Objects

## Instalações
```bash
git clone https://github.com/seu-repo/f1rst-qa-cypress-bdd.git
cd f1rst-qa-cypress-bdd
npm install

## Executando os testes
- Via interface gráfica Cypress
```bash
npx cypress open

### Via CLI
```bash
npx cypress run

### Executar spec especifica (ex: login)
```bash
npx cypress run --spec "cypress/e2e/features/web/login.feature"
