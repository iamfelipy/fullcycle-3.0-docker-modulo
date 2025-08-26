# Resposta do Desafio Full Cycle 3.0 - Nginx + Node.js + MySQL

Este repositório contém a solução para o desafio do curso Full Cycle 3.0, utilizando Nginx como proxy reverso, Node.js e MySQL, **feita por durante o curso**.

## Pré-requisitos

- É necessário ter o **Docker** e o **Docker Compose** instalados em sua máquina.

## Desafio

Nesse desafio você colocará em prática o que aprendemos em relação à utilização do nginx como proxy reverso. A ideia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação, por sua vez, adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela `people`.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

Gere o docker-compose de uma forma que basta apenas rodarmos: `docker-compose up -d` que tudo deverá estar funcionando e disponível na porta: 8080.

Não esqueça de colocar o volume na aplicação para o ambiente de desenvolvimento.

Suba tudo em um repositório e faça a entrega.

* A linguagem de programação para este desafio é Node/JavaScript.

## Como Executar

1. Certifique-se de que o Docker e o Docker Compose estão instalados em sua máquina.
2. Clone este repositório.
3. No diretório do projeto, execute o comando abaixo para subir todos os serviços:

   ```sh
   docker-compose up -d
   ```

4. Acesse a aplicação no navegador através do endereço: [http://localhost:8080](http://localhost:8080)

Pronto! O ambiente estará disponível e funcionando conforme o desafio.
