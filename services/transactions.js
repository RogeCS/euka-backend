const MongoLib = require('../lib/mongo');

class TransactionsService {
  constructor() {
    this.collection = 'transactions';
    this.mongoDB = new MongoLib();
  }

  async getTransactions({ tags }) {
    const query = tags && { tags: { $in: tags } };
    const transactions = await this.mongoDB.getAll(this.collection, query);
    return transactions || [];
  }

  async getTransaction({ transactionId }) {
    const transaction = await this.mongoDB.get(this.collection, transactionId);
    return transaction || {};
  }

  async createTransaction({ transaction }) {
    const createdTransactionId = await this.mongoDB.create(
      this.collection,
      transaction
    );
    return createdTransactionId;
  }

  async updateTransaction({ transactionId, transaction }) {
    const updatedTransactionId = await this.mongoDB.update(
      this.collection,
      transactionId,
      transaction
    );
    return updatedTransactionId;
  }

  async partialUpdateTransaction({ transactionId, transaction }) {
    const updatedTransactionId = await this.mongoDB.update(
      this.collection,
      transactionId,
      transaction
    );
    return updatedTransactionId;
  }

  async deleteTransaction({ transactionId }) {
    const deletedTransactionId = await this.mongoDB.delete(
      this.collection,
      transactionId
    );
    return deletedTransactionId;
  }
}

module.exports = TransactionsService;
