const assert = require('assert');
const buildMessage = require('../utils/buildMessages');

describe.only('utils - buildMessage', function () {
  describe('when receives an entity and an action', function () {
    it('should return the respective message', function () {
      const result = buildMessage('transaction', 'create');
      const expected = 'transaction created';
      assert.strictEqual(result, expected);
    });
  });
  describe('when receives an entity and an action but it is a list', function () {
    it('should return the respective message with the entity in plural', function () {
      const result = buildMessage('transaction', 'list');
      const expected = 'transactions listed';
      assert.strictEqual(result, expected);
    });
  });
});
