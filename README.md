# Backend Access Control

## dev

Suba o banco de dados via docker conforme o comando abaixo:

```
docker run -dp 27017:27017 --name mongodb mongo
```

> Caso queira excluir o banco: `docker rm mongodb --force`

E execute os comandos abaixos para executar a aplicação:

```
npm install
```

```
npm run dev
```
