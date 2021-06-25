const express = require('express');
const app = express();

const { config } = require('./config/index');
const transactionsApi = require('./routes/transactions.js');

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//middleware: body parser
app.use(express.json());

//routes
transactionsApi(app);

//catch 404
app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  console.log(`listening http://localhost:${config.port}`);
});
