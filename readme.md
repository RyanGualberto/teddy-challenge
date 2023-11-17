# Teddy Challenge - Open Food Facts API

## Descrição do Projeto

Este projeto consiste na implementação de uma REST API para utilizar os dados do Open Food Facts, um banco de dados aberto contendo informações nutricionais de diversos produtos alimentícios. A finalidade é fornecer suporte à equipe de nutricionistas da Fitness Foods LC para revisar rapidamente as informações nutricionais dos alimentos publicadas pelos usuários por meio de uma aplicação móvel.

## Tecnologias Utilizadas

- Linguagem: Node.js
- Framework: Express.js
- Banco de Dados: MongoDB (Atlas)
- Outras Tecnologias: Axios, Body-parser, JSONStream, Mongoose, Morgan, Node-cron, Zlib

## Instalação e Uso

1. Clone o repositório: `git clone https://github.com/seu-usuario/teddy_challenge.git`
2. Acesse o diretório do projeto: `cd teddy_challenge`
3. Instale as dependências: `npm install`
4. Execute o projeto em modo de desenvolvimento: `npm run start:dev`

### Endpoints da API

- **GET /:**

  - Retorna detalhes da API, status da conexão com o banco de dados, horário da última execução do CRON, tempo online e uso de memória.

- **PUT /products/:code:**

  - Recebe atualizações do Projeto Web.

- **DELETE /products/:code:**

  - Muda o status do produto para trash.

- **GET /products/:code:**

  - Obtém informações de um produto específico na base de dados.

- **GET /products:**
  - Lista todos os produtos da base de dados com sistema de paginação.

## Apresentação do Projeto

Para uma apresentação completa do projeto, assista ao vídeo de demonstração disponível em [link_da_apresentação](#).

Este é um desafio proposto pela Coodesh.
