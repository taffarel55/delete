# API de Cartões

Esta API permite gerenciar cartões.

## Criar um novo cartão

Cria um novo cartão com as informações fornecidas.

URL ```/cards```

Método HTTP ```POST```

Parâmetros de entrada
```json
{
    "id": "id_do_cartao",
    "name": "Nome do cartão",
    "permissions": ["permissão1", "permissão2"]
}
```

|Campo|Tipo|Descrição|
|:-: |:-:| :--|
|```id```|```string```|Obrigatório. O ID único do cartão.|
|```name```|```string```|Obrigatório. O nome do cartão.|
|```permissions```|```array``` de ```string```|As permissões do cartão. O valor padrão é um array vazio.|

Exemplo de requisição:

```bash
curl -X POST -H "Content-Type: application/json" -d '{
    "id": "id_do_cartao",
    "name": "Nome do cartão",
    "permissions": ["permissão1", "permissão2"]
}' http://134.209.122.150:1234/cards
```

Resposta de sucesso

Código: ```200 OK```

Exemplo de resposta:
```json
{
    "id": "id_do_cartao",
    "name": "Nome do cartão",
    "permissions": ["permissão1", "permissão2"]
}
```

## Obter um cartão existente

Obtém as informações de um cartão existente com o ID fornecido.

URL ```/cards/:id```

Substitua ```:id``` pelo ID do cartão desejado.

Método HTTP ```GET```

Parâmetros de entrada

Nenhum.

Exemplo de requisição:

```bash
curl -X GET http://134.209.122.150:1234/cards/id_do_cartao
```

Resposta de sucesso

Código: ```200 OK```

Exemplo de resposta:
```json
{
    "id": "id_do_cartao",
    "name": "Nome do cartão",
    "permissions": ["permissão1", "permissão2"]
}
```

## Atualizar um cartão existente

Atualiza as informações de um cartão existente com o ID fornecido.

URL

```/cards/:id```

Substitua ```:id``` pelo ID do cartão desejado.

Método HTTP

```PATCH```

Parâmetros de entradajson
```json
{
    "name": "Novo nome do cartão",
    "permissions": ["nova permissão"]
}
```

|Campo|Tipo|Descrição|
|:-: |:-:| :--|
|```name```|```string```|O novo nome do cartão.|
|```permissions```|```array``` de ```string```|As novas permissões do cartão.|

Exemplo de requisição:

```bash
curl -X PATCH -H "Content-Type: application/json" -d '{
    "name": "Novo nome do cartão",
    "permissions": ["permissão3", "permissão4"]
}' http://134.209.122.150:1234/cards/id_do_cartao
```

Resposta de sucesso

Código: ```200 OK```

Exemplo de resposta:
```json
{
    "id": "id_do_cartao",
    "name": "Novo nome do cartão",
    "permissions": ["nova permissão"]
}
```

Excluir um cartão existente

Exclui um cartão existente com o ID fornecido.

URL ```/cards/:id```

Substitua ```:id``` pelo ID do cartão desejado.

Método HTTP

```DELETE```

Parâmetros de entrada

Nenhum.

Exemplo de requisição:

```bash
curl -X DELETE http://134.209.122.150:1234/cards/id_do_cartao
```

Resposta de sucesso

Código: ```200 OK```

Exemplo de resposta:
```json
{
    "id": "id_do_cartao",
    "name": "Nome do cartão",
    "permissions": ["permissão1", "permissão2"]
}
```