//Libraries
const express = require('express');
const passport = require('passport');
const TransactionsService = require('../services/transactions');

//Schemas
const {
  transactionIdSchema,
  createTransactionSchema,
  updateTransactionSchema,
} = require('../utils/schema/transactions');

//Validation Handlers
const validationHandler = require('../utils/middleware/validationHandlers');
const scopesValidationHandler = require('../utils/middleware/scopesValidationHandler');

//Cache
const cacheResponse = require('../utils/cacheResponse');
const {
  FIVE_MINUTE_IN_SECONDS,
  SIXTY_MINUTES_IN_SECONDS,
} = require('../utils/time');

//JWT strategy
require('../utils/auth/strategies/jwt');

//API
function transactionsApi(app) {
  const router = express.Router();
  app.use('/api/transactions', router);

  const transactionsService = new TransactionsService();

  router.get(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:transactions']),
    async function (req, res, next) {
      cacheResponse(res, FIVE_MINUTE_IN_SECONDS);
      const { tags } = req.query;
      try {
        const transactions = await transactionsService.getTransactions({
          tags,
        });
        res.status(200).json({
          data: transactions,
          message: 'transactions listed',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.get(
    '/:transactionId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['read:transactions']),
    validationHandler({ transactionId: transactionIdSchema }, 'params'),
    async function (req, res, next) {
      cacheResponse(res, SIXTY_MINUTES_IN_SECONDS);
      const { transactionId } = req.params;
      try {
        const transaction = await transactionsService.getTransaction({
          transactionId,
        });
        res.status(200).json({
          data: transaction,
          message: 'transaction retrieved',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:transactions']),
    validationHandler(createTransactionSchema),
    async function (req, res, next) {
      const { body: transaction } = req;
      try {
        const createTransactionId = await transactionsService.createTransaction(
          {
            transaction,
          }
        );
        res.status(201).json({
          data: createTransactionId,
          message: 'transaction created',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.put(
    '/:transactionId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['update:transactions']),
    validationHandler({ transactionId: transactionIdSchema }, 'params'),
    validationHandler(updateTransactionSchema),
    async function (req, res, next) {
      const { transactionId } = req.params;
      const { body: transaction } = req;
      try {
        const updatedTransactionId =
          await transactionsService.updateTransaction({
            transactionId,
            transaction,
          });
        res.status(200).json({
          data: updatedTransactionId,
          message: 'transaction updated',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.patch(
    '/:transactionId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['create:transactions']),
    validationHandler({ transactionId: transactionIdSchema }, 'params'),
    validationHandler(updateTransactionSchema),
    async function (req, res, next) {
      const { transactionId } = req.params;
      const { body: transaction } = req;
      try {
        const updatedTransactionId =
          await transactionsService.partialUpdateTransaction({
            transactionId,
            transaction,
          });
        res.status(200).json({
          data: updatedTransactionId,
          message: 'transaction partially updated',
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.delete(
    '/:transactionId',
    passport.authenticate('jwt', { session: false }),
    scopesValidationHandler(['delete:transactions']),
    validationHandler({ transactionId: transactionIdSchema }, 'params'),
    async function (req, res, next) {
      const { transactionId } = req.params;
      try {
        const deleteTransaction = await transactionsService.deleteTransaction({
          transactionId,
        });
        res.status(200).json({
          data: deleteTransaction,
          message: 'transaction deleted',
        });
      } catch (error) {
        next(error);
      }
    }
  );
}

module.exports = transactionsApi;
