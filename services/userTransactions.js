const MongoLib = require('../lib/mongo');

class UserTransactionsService {
  constructor() {
    this.collection = 'users-transactions';
    this.mongoDB = new MongoLib();
  }

  async getUserTransactions({ userId }) {
    const query = userId && { userId };
    const userTransactions = await this.mongoDB.getAll(this.collection, query);

    return userTransactions || [];
  }

  async createUserTransaction({ userTransaction }) {
    const createUserTransactionId = await this.mongoDB.create(
      this.collection,
      userTransaction
    );
    return createUserTransactionId;
  }

  async deleteUserTransaction({ userTransactionId }) {
    const deleteUserTransactionId = await this.mongoDB.delete(
      this.collection,
      userTransactionId
    );
    return deleteUserTransactionId;
  }
}
module.exports = UserTransactionsService;
