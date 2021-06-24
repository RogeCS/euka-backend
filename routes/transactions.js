const express = require('express');
const TransactionsService = require('../services/transactions');

function transactionsApi(app) {
  const router = express.Router();
  app.use("/api/transactions", router);

  const transactionsService = new TransactionsService();

  router.get('/', async function(req, res, next){
    const { tags } = req.query;
    try {
      const transactions = await transactionsService.getTransactions({ tags });
      res.status(200).json({
        data: transactions,
        message: 'transactions listed',
      })
    } catch (error) {
      next(error);
    }
  });

  router.get('/:transactionId', async function(req, res, next){
    const { transactionId } = req.params;
    try {
      const transaction = await transactionsService.getTransaction({ transactionId });
      res.status(200).json({
        data: transaction,
        message: 'transaction retrieved',
      })
    } catch (error) {
      next(error);
    }
  });

  router.post('/', async function(req, res, next){
    const { body: transaction } = req;
    try {
      const createTransactionId = await transactionsService.createTransaction({ transaction });
      res.status(201).json({
        data: createTransactionId,
        message: 'transaction created',
      })
    } catch (error) {
      next(error);
    }
  });

  router.put('/:transactionId', async function(req, res, next){
    const { transactionId } = req.params;
    const { body: transaction } = req;
    try {
      const updatedTransactionId = await transactionsService.updateTransaction({ transactionId, transaction});
      res.status(200).json({
        data: updatedTransactionId,
        message: 'transaction updated',
      })
    } catch (error) {
      next(error);
    }
  });

  router.patch('/:transactionId', async function(req, res, next){
    const { transactionId } = req.params;
    const { body: transaction } = req;
    try {
      const updatedTransactionId = await transactionsService.partialUpdateTransaction({ transactionId, transaction});
      res.status(200).json({
        data: updatedTransactionId,
        message: 'transaction partially updated',
      })
    } catch (error) {
      next(error);
    }
  });

  router.delete('/:transactionId', async function(req, res, next){
    const { transactionId } = req.params;
    try {
      const deleteTransaction = await transactionsService.getTransactions({ transactionId });
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