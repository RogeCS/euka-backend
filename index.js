const express = require('express');
const app = express();

const { config } = require('./config/index');
const transactionsApi = require('./routes/transactions.js');

transactionsApi(app);

app.listen(config.port, function() {
  console.log(`listening http://localhost:${config.port}`);
});