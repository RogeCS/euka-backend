const { transactionsMock } = require('../utils/mocks/transactions');

class TransactionsService{
  async getTransactions() {
    const transactions = await Promise.resolve(transactionsMock);
    return transactions || [];
  }

  async getTransaction() {
    const transaction = await Promise.resolve(transactionsMock[0]);
    return transaction || {};
  }

  async createTransaction() {
    const createdTransactionId = await Promise.resolve(transactionsMock[0].id);
    return createdTransactionId;
  }

  async updateTransaction() {
    const updatedTransactionId = await Promise.resolve(transactionsMock[0].id);
    return updatedTransactionId;
  }

  async partialUpdateTransaction() {
    const updatedTransactionId = await Promise.resolve(transactionsMock[0].id);
    return updatedTransactionId;
  }

  async deleteTransaction() {
    const deletedTransactionId = await Promise.resolve(transactionsMock[0].id);
    return deletedTransactionId;
  }
}

module.exports = TransactionsService;