Feature: Validar retorno API

  Scenario: Validar retorno do campo name e status code
    Given que envio um GET para a API do Trello
    Then a resposta deve ter status 200
    And deve exibir o campo name da estrutura list
