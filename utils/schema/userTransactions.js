const joi = require('@hapi/joi');

const { transactionIdSchema } = require('./transactions');
const { userIdSchema } = require('./users');

const userTransactionIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}/);

const createUserTransactionSchema = {
  userId: userIdSchema,
  transactionId: transactionIdSchema,
};

module.exports = {
  userTransactionIdSchema,
  createUserTransactionSchema,
};
