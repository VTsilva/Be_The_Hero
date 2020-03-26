const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);




/*
ROTA // RECURSO 
*/

/**
 * 
 * MÉTODOS HTTPS
 * 
 * GET: BUSCAR UMA INFORMAÇÃO DO BACK-END
 * POST: CRIAR UMA INFORMAÇÃO NO BACK-END
 * PUT: ALTERAR UMA INFORMAÇÃO NO BACK-END
 * DELETE: DELETAR UMA INFORMAÇÃO NO BACK-END
 */

/**
 * TIPOS DE PARÂMETROS:
 * 
 * QUERY PARAMS: PARÂMETROS NOMEADOS ENVIADOS NA ROTA APÓS O "?" (FILTROS, PAGINAS) 
 * ROUTES PARAMS: PARÂMETROS UTILIZADOS PARA IDENTIFICAR RECURSOS 
 * REQUEST BODY: CORPO DA REQUISIÇÃO, UTILIZADO PARA CRIAR OU ALTERAR RECURSOS
 */

/**
 * TIPOS DE BANCO DE DADOS:
 * 
 * SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
 * NoSQL: MongoDB, CouchDB, etc
 */

/**
 * Drivers: SELECT*FROM USERS
 * Query Builder: TABLE('USERS').SELECT('*').WHERE() 
 */

/** 
 
app.post('/users', (request, response) => {
    const body = request.body;

    console.log(body);

    return response.json({
        evento: 'Semana OminiStack 11.0',
        aluno: 'Victor da silva'
    });
});

*/