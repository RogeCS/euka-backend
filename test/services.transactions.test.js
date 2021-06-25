const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { transactionsMock } = require('../utils/mocks/transactions');

describe('services - transactions', function () {
  const TransactionServices = proxyquire('../services/transactions', {
    '../lib/mongo': MongoLibMock,
  });
  const transactionsService = new TransactionServices();
  describe('when getTransactions method is called', async function () {
    it('should call the getall MongoLib method', async function () {
      await transactionsService.getTransactions({});
      assert.strictEqual(getAllStub.called, true);
    });
    it('should return an array of transactions', async function () {
      const result = await transactionsService.getTransactions({});
      const expected = transactionsMock;
      assert.deepEqual(result, expected);
    });
  });
});
