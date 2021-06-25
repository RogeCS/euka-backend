const assert = require('assert');
const proxyquire = require('proxyquire');

const {
  transactionsMock,
  TransactionsServiceMock,
} = require('../utils/mocks/transactions');

const testServer = require('../utils/testServer');

describe('routes - transactions', function () {
  const route = proxyquire('../routes/transactions', {
    '../services/transactions': TransactionsServiceMock,
  });

  const request = testServer(route);

  describe('GET /transactions', function () {
    it('should respond with status 200', function (done) {
      request.get('/api/transactions').expect(200, done);
    });

    it('should respond with the list of transactions', function (done) {
      request.get('/api/transactions').end((err, res) => {
        assert.deepEqual(res.body, {
          data: transactionsMock,
          message: 'transactions listed',
        });
        done();
      });
    });
  });
});
