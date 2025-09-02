Feature: Incluir produto no carrinho

  Scenario: Adicionar produto e validar no checkout
    Given que o usuário está na página inicial
    When ele busca por "Men tshirt"
    And adiciona o primeiro produto ao carrinho
    Then o produto deve estar visível na tela de checkout
