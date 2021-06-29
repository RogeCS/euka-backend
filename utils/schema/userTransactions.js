const joi = require('@hapi/joi');

const { transactionIdSchema } = require('./transactions');
const { userIdSchema } = require('./users');

const userTransactionIdSchema = joi.string().regex(/^[0-9a-fA-F]{24}/);

const createUserTransactionSchema = {
  userId: userIdSchema.required(),
  transactionId: transactionIdSchema.required(),
};

module.exports = {
  userTransactionIdSchema,
  createUserTransactionSchema,
};
