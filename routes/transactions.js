const express = require('express');
const { transactionsMock } = require('../utils/mocks/transactions');

function transactionsApi(app) {
  const router = express.Router();
  app.use("/api/transactions", router);

  router.get('/', async function(req, res, next){
    try {
      const transactions = await Promise.resolve(transactionsMock);
      res.status(200).json({
        data: transactions,
        message: 'transactions listed',
      })
    } catch (error) {
      next(error);
    }
  });

  router.get('/:transactionId', async function(req, res, next){
    try {
      const transaction = await Promise.resolve(transactionsMock[0]);
      res.status(200).json({
        data: transaction,
        message: 'transaction retrieved',
      })
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function(req, res, next){
    try {
      const createTransactionId = await Promise.resolve(transactionsMock[0].id);
      res.status(201).json({
        data: createTransactionId,
        message: 'transaction created',
      })
    } catch (error) {
      next(error);
    }
  });

  router.put('/:transactionId', async function(req, res, next){
    try {
      const updatedTransactionId = await Promise.resolve(transactionsMock[0].id);
      res.status(200).json({
        data: updatedTransactionId,
        message: 'transaction updated',
      })
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:transactionId', async function(req, res, next){
    try {
      const deleteTransaction = await Promise.resolve(transactionsMock[0].id);
      res.status(200).json({
        data: deleteTransaction,
        message: 'transaction deleted',
      })
    } catch (error) {
      next(error);
    }
  });
}

module.exports = transactionsApi;