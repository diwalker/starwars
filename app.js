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

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('App - Intro Star Wars');
});

// eslint-disable-next-line no-console
app.listen(3000, () => console.log('Aplicação executando na porta 3000!'));
