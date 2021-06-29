//Libraries
const express = require('express');
const passport = require('passport');

//Services
const UserTransactionsService = require('../services/userTransactions');

//Validation handlers
const validationHandler = require('../utils/middleware/validationHandlers');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

//Schemas JOI
const { transactionIdSchema } = require('../utils/schema/transactions');
const { userIdSchema } = require('../utils/schema/users');
const {
  createUserTransactionSchema,
} = require('../utils/schema/userTransactions');

//JWT strategy
require('../utils/auth/strategies/jwt');

//API
function userTransactionApi(app) {
  const router = express.Router();
  app.use('/api/user-transactions', router);

  const userTransactionsService = new UserTransactionsService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read-user:transactions']),
    validationHandler({ userId: userIdSchema }, 'query'),
    async function (req, res, next) {
      const { userId } = req.query;

      try {
        const userTransactions =
          await userTransactionsService.getUserTransactions({ userId });

        res.status(200).json({
          data: userTransactions,
          message: 'user transactions listed',
        });
      } catch (error) {
        next(error);
      }
    }
  );
  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:user-transactions']),
    validationHandler(createUserTransactionSchema),
    async function (req, res, next) {
      const { body: userTransaction } = req;

      try {
        const createdUserTransactionId =
          await userTransactionsService.createUserTransaction({
            userTransaction,
          });

        res.status(201).json({
          data: createdUserTransactionId,
          message: 'user transaction created',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:userTransactionId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:user-transactions']),
    validationHandler({ userTransactionId: transactionIdSchema }, 'params'),
    async function (req, res, next) {
      const { userTransactionId } = req.params;
      try {
        const deletedUserTransactionId =
          await userTransactionsService.deleteUserTransaction({
            userTransactionId,
          });
        res.status(200).json({
          data: deletedUserTransactionId,
          message: 'user transaction deleted',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = userTransactionApi;
