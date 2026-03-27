# Docker

Colocando em prática conhecimentos em Docker:

- Criação de imagem
- Bind de volumes
- Configuração de network
- Exposição de portas
- Uso de ENTRYPOINT e CMD
- Multistage build com Alpine
- Dockerização de aplicações
- otimizando imagens de desenvolvimento e produção

## Exemplos

- **Exemplo 1:** Proxy reverso Nginx + API Node.js + MySQL
- **Exemplo 2:** Aplicação Go

### Pré-requisito

- Docker instalado

---

## Exemplo 1: Proxy reverso Nginx + API Node + MySQL

```sh
# Executar
docker compose -f desafio-nginx-nodejs/docker-compose.yml up

# Acessar no navegador
localhost:8080
```


---

## Exemplo 2: Go

```sh
# Executar
docker build -t felipy/goapp -f desafio-go/Dockerfile .
docker run --rm felipy/goapp
```

