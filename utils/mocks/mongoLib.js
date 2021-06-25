const sinon = require('sinon');

const {
  transactionsMock,
  filteredTransactionsMocks,
} = require('./transactions');

const getAllStub = sinon.stub();
getAllStub.withArgs('transactions').resolves(transactionsMock);

const tagQuery = { tag: { $in: 'darma' } };
getAllStub
  .withArgs('transactions', tagQuery)
  .resolves(filteredTransactionsMocks('Drama'));

const createStub = sinon.stub().resolves(transactionsMock[0].id);

class MongoLibMock {
  getAll(collection, query) {
    return getAllStub(collection, query);
  }

  create(collection, data) {
    return createStub(collection, data);
  }
}

module.exports = {
  getAllStub,
  createStub,
  MongoLibMock,
};
