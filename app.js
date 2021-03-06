/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
/**
 * Arquivo: app.js
 * Descrição: Arquivo responsável por executar a aplicação e levantar o servidor
 * local.
 * Data: 20/12/2019
 * Author: Diego Pereira
 */

const express = require('express');

// eslint-disable-next-line no-unused-vars
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('App - Intro Star Wars');
});

// eslint-disable-next-line no-console
app.listen(PORT, () => 
console.log('Servidor iniciado em http://localhost:" + PORT));
