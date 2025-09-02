Feature: Buscar produtos

  Scenario: Buscar um produto existente
    Given que o usuário está na página inicial para busca
    When ele busca por "dress"
    Then a lista de resultados deve conter "dress"
