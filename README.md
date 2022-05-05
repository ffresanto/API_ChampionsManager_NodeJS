# API ChampionsManager NodeJS

Repositório responsável pela API da ChampionsManager. Essa API foi desenvolvida em NodeJS, 
com foco principal em aprimorar os meus conhecimentos em Node. Gostei bastante em fazer este pequeno projeto, pois utilizei alguns recursos como: Express, TypeScript, TypeORM, Migrations e CORS.

Futuramente pretendo aprimorar esse projeto, e criar um front-end para utilizar essa API.

## ☕ Sobre esse Projeto

Estou desenvolvendo esse projeto em minhas horas vagas e com o tempo atualizando no github. 
O objetivo desse projeto é ter controle de conquistas em games de futebol, mas com foco no rumo ao estrelato do PES, como quantidade de trófeus ganhos pelo club, gols, assistências marcadas e etc..

## :computer: Recursos Utilizados: 

Necessário realizar a instalação das aplicações/frameworks abaixo:


* Node

    * [Node.js](https://nodejs.org/en/)

* MySQL 8.0

    - **[MySQL Installer](https://dev.mysql.com/downloads/installer/)**
    - **[MySQL Workbench](https://dev.mysql.com/downloads/workbench/)**

## :fire: Configurando o Projeto Localmente

1) Abra o MySql Workbench e execute a seguinte Query para criação do Banco de Dados.

```sql
CREATE DATABASE db_championsmanager;
```
2) Na pasta raiz do projeto, entre no arquivo: **ormconfig.json**.

  - Com o arquivo aberto, coloque suas credenciais de conexão com o banco de dados

```json
{
  "type": "mysql",
  "host": "localhost",
  "port": 0000,
  "username": "seusuario",
  "password": "suasenha",
  "database": "db_championsmanager",
  "entities": ["./src/modules/**/typeorm/entities/*.ts"],
  "migrations": [
    "./src/shared/typeorm/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/shared/typeorm/migrations/"
  }
}

```

3) Abra o cmd do Windows ou o terminal do Linux e entre na pasta onde esta localizado o diretorio do projeto.

4) Execute o seguinte comando para fazer a instalar as dependências  do projeto:
```
npm install
```
5) Depois da instalação das dependências, execute as migrations para criar as tabelas no banco de dados
```
npm npm run typeorm
```
6) Já pode inicializar o projeto com o seguinte comando:
```
npm run dev
```

# ⌨️ Exemplos de Requisições

Awards (Prêmios)

`GET /api/awards/`
 
 ```
 http://localhost:3333/api/awards/
 ```
   
   Retorno:
   ```json
       [
        {
            "id": 1,
            "name": "Ballon d´Or",
            "origin": "Europe",
            "national": 0
        },
        {
            "id": 2,
            "name": "King of American",
            "origin": "America",
            "national": 0
        }
    ]
```

# 🔴 EndPoints

#### /api/awards
Path | Method | Description
---|---|---
/api/awards/ | GET | ListAwardService
/api/awards/:id | GET | ShowAwardService
/api/awards/ | POST | CreateAwardService
/api/awards/:id | PUT | UpdateAwardService
/api/awards/:id | DELETE | DeleteAwardService
