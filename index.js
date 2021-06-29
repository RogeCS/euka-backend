const express = require('express');
const helmet = require('helmet');
const app = express();
const debug = require('debug')('app:server');

const { config } = require('./config/index');
const authApi = require('./routes/auth');
const transactionsApi = require('./routes/transactions.js');
const userTransactionsApi = require('./routes/userTransactions');

const {
  logErrors,
  errorHandler,
  wrapErrors,
} = require('./utils/middleware/errorHandlers.js');

const notFoundHandler = require('./utils/middleware/notFoundHandler');

//middleware: body parser
app.use(express.json());
app.use(helmet());

//routes
authApi(app);
transactionsApi(app);
userTransactionsApi(app);

//catch 404
app.use(notFoundHandler);

//Errors middleware
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);

app.listen(config.port, function () {
  debug(`listening http://localhost:${config.port}`);
});
