# Boas vindas ao projeto de Front-End Online Store!

Este é um projeto que foi desenvolvido durante o curso de Desenvolvimento Web na Trybe.

Essa é uma versão simplificada, sem persistência no banco de dados, de uma **loja online**, desenvolvendo em grupo (Priscila silva, Gabriele Castro, Cristiane Souza, Meiryland Melo), em um cenário mais próximo ao do mercado de trabalho.

Teremos uma aplicação onde os usuários poderão:
  - Buscar produtos por termos e categorias a partir da _API do Mercado Livre_;
  - Interagir com os produtos buscados de modo a adicioná-los e removê-los de um carrinho de compras em diferentes quantidades;
  - Visualizar detalhes e avaliações prévias de um produto, bem como criar novas avaliações;
  - E por fim, finalizar a compra (simulada) dos itens selecionados.

## Habilidades
  - Entender o que são Métodos Ágeis

  - Entender o que é Kanban

  - Entender o que é Scrum

  - Trabalhar em equipes utilizando Kanban ou Scrum de maneira eficaz

  - Praticar todas as habilidades desenvolvidas até agora no módulo de Front-End

# Desenvolvimento
  <details>
    <summary>
      <h3>
        Antes de começar a desenvolver
      </h3>
    </summary>

  1. Clone o repositório
    * `git clone git@github.com:mabiiak/frontend-online-store.git`
    * Entre na pasta do repositório que você acabou de clonar:
      * `cd frontend-online-store`

  2. Instale as dependências e inicialize o projeto
    * Instale as dependências:
      * `npm install`
    * Inicialize o projeto:
      * `npm start` (uma nova página deve abrir no seu navegador com um texto simples)

  </details>

  <details>
    <summary>
      <h3>
        Documentação da API do Mercado Livre
      </h3>
    </summary>

  Sua página _web_ irá consumir os dados da API do _Mercado Livre_ para realizar a busca de itens da sua loja online. Para realizar essas buscas, vocês precisarão consultar os seguintes _endpoints_:

  - Para listar as categorias disponíveis:
    - Tipo da requisição: `GET`
    - Endpoint: https://api.mercadolibre.com/sites/MLB/categories
  - Para buscar por itens por termo:
    - Tipo da requisição: `GET`
    - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
    - Endpoint: https://api.mercadolibre.com/sites/MLB/search?q=$QUERY
  - Para buscar itens por categoria:
    - Tipo da requisição: `GET`
    - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
    - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
  - Para buscar itens de uma categoria por termo (vale ressaltar, que este endpoint não necessariamente precisa receber ambos os parâmetros para funcionar):
    - Tipo da requisição: `GET`
    - Parâmetro de busca $QUERY (este parâmetro deve ser substituído pelo valor do campo de busca)
    - Parâmetro de busca $CATEGORY_ID (este parâmetro deve ser substituído pelo ID da categoria selecionada)
    - Endpoint: https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID&q=$QUERY
  - Para buscar detalhes de um item especifico:
    - Tipo de requisição: `GET`
    - Parâmetro de busca $PRODUCT_ID (este parâmetro deve ser substituído pelo valor do campo de busca)
    - Endpoint: https://api.mercadolibre.com/items/$PRODUCT_ID


  Se você quiser aprender mais sobre a API do _Mercado Livre_, veja a [documentação](https://developers.mercadolivre.com.br/pt_br/itens-e-buscas).


  ### Exemplo de requisição para listar categorias

  ```
  "https://api.mercadolibre.com/sites/MLB/categories"
  ```

  O retorno desse endpoint será algo no formato:

  ```json
  [
      {
          "id": "MLB5672",
          "name": "Acessórios para Veículos"
      },
      ...
  ]
  ```

  ### Exemplo de requisição de busca

  ```
  "https://api.mercadolibre.com/sites/MLB/search?category=MLB1055&q=Motorola"
  ```

  O retorno desse endpoint será algo como o exemplo que temos [neste arquivo](exemplo-motorola.json).

  </details>

## Requisitos

    ✅ 1 Implemente o módulo de acesso à api do Mercado Livre

    ✅ 2 Crie uma página de listagem de produtos vazia

    ✅ 3 Crie a página do carrinho de compras

    ✅ 4 Liste as categorias de produtos disponíveis via API na página principal

    ✅ 5 Liste os produtos buscados por termos, com os dados resumidos, associados a esses termos

    ✅ 6 Selecione uma categoria e mostre somente os produtos daquela categoria

    ✅ 7 Redirecione para uma tela com a exibição detalhada ao clicar na exibição resumida de um produto

    ✅ 8 Adicione produtos a partir da tela de listagem de produtos

    ✅ 9 Adicione um produto ao carrinho a partir de sua tela de exibição detalhada

    ✅ 10 Visualize a lista de produtos adicionados ao carrinho em sua página e permita a manipulação da sua quantidade

    ❌ 11 Avalie e comente acerca de um produto em sua tela de exibição detalhada

    ❌ 12 Finalize a compra vendo um resumo dela, preenchendo os seus dados e escolhendo a forma de pagamento

  <details>
  <summary>
    <h3>
      Bônus
    </h3>
  </summary>

    ❌ 13 Mostre junto ao ícone do carrinho a quantidade de produtos dentro dele, em todas as telas em que ele aparece

    ❌ 14 Limite a quantidade de produtos adicionados ao carrinho pela quantidade disponível em estoque

    ❌ 15 Mostre quais produtos tem o frete grátis

  <summary>
    <h3>
      Não avaliativos
    </h3>
  </summary>

    ❌ 16 Faça um layout para o site

    ❌ 17 Faça um layout responsivo para o site

    ❌ 18 Crie um seletor dropdown para ordenar a lista de produto por maior e menor preço

    ❌ 19 Coloque uma animação no carrinho para quando um produto for adicionado

    ❌ 20 Crie um slider lateral para exibir o carrinho na tela principal

    ❌ 21 Destaque, na tela principal, os produtos já adicionados ao carrinho

    ❌ 22 Impeça que a quantidade do produto seja negativa
  </details>

## Obrigada pela visita!
