# Docker com Nginx + Node.js + MySQL

Este repositório contém uma api, utilizando Nginx como proxy reverso, Node.js e MySQL.

## Pré-requisitos

- É necessário ter o **Docker** instalados em sua máquina.

## Desafio

Utilizei nginx como proxy reverso. A ideia principal é que quando um usuário acesse o nginx, o mesmo fará uma chamada em nossa aplicação node.js. Essa aplicação, por sua vez, adicionará um registro em nosso banco de dados mysql, cadastrando um nome na tabela `people`.

O retorno da aplicação node.js para o nginx deverá ser:

<h1>Full Cycle Rocks!</h1>

- Lista de nomes cadastrada no banco de dados.

* A linguagem de programação para este desafio é Node/JavaScript.

## Como Executar

1. Certifique-se de que o Docker e o Docker Compose estão instalados em sua máquina.
2. Clone este repositório.
3. No diretório do projeto, execute o comando abaixo para subir todos os serviços:

   ```sh
   docker-compose up -d
   ```

4. Acesse a aplicação no navegador através do endereço: [http://localhost:8080](http://localhost:8080)
