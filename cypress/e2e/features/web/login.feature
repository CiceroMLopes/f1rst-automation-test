Feature: Login no site Automation Practice

  Scenario: Login com credenciais válidas
    Given que o usuário está na página de login
    When ele preenche o e-mail e senha válidos
    And clica no botão de login
    Then ele deve visualizar a tela inicial logado
