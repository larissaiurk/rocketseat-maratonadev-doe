<h1 align="center">
  <img src="public/logo.png" width="250px" /><br>
  Toda doação é importante!
</h2>
<p align="center">
  <a href="https://rocketseat.com.br">
    <img alt="Made by Rocketseat" src="https://img.shields.io/badge/made%20by-Rocketseat-red">
  </a>
  
</p>

<br>

### :syringe: Projeto

DOE é um projeto que visa ser um banco de dados para doadores de sangue. Ele foi desenvolvido durante a [MaratonaDev](https://rocketseat.com.br/maratonadev/inscricao/3.0)

### :rocket: Tecnologias usadas
O projeto foi desenvolvido com as seguintes tecnologias:
- [HTML](https://www.w3schools.com/html/)
- [CSS](https://www.w3schools.com/css/)
- [Node.js](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

Use the package manager [npm](https://www.npmjs.com/) to install the project dependencies.

```bash
npm install
```

### :runner: Run the project

Use the <b>start</b> comand to start the server. We use nodemon to watch code changes.

```bash
npm start
```

### :mortar_board: Quem ministrou?

A maratona foi ministrada pelo [Mayk Brito](https://github.com/maykbrito)

### Status do projeto
Nesse projeto aprendi a manipular novos atributos de css, a conectar meu backend com o banco PostgreSQL, a adicionar favicon, e utilizar o Nunjucks.

Também me permiti explorar o markdown, e esse é o READ.me mais bonito que escrevi até agora.
### Docker Postgrees

```bash
docker run --name some-postgres -e POSTGRES_PASSWORD=1234 -d postgres
```

### SQL
```sql
CREATE TABLE public.donors (
	id int4 NOT NULL,
	"name" varchar(250) NULL,
	email varchar(250) NULL,
	blood varchar(250) NULL,
	CONSTRAINT donors_pk PRIMARY KEY (id)
);
```
---

Feito com ❤️ por Larissa Iurk