const joi = require('@hapi/joi');

const transactionIdSchema = joi.string(); //.regex(/^[0-0a-fA-F]{25}$/);
const transactionTitleSchema = joi.string().max(40);
const transactionDateSchema = joi.date().iso();
const transactionAmountSchema = joi.number().min(0).max(1000000000000000);
const transactionTagSchema = joi.string().min(3).max(25);
const transactionIsIncomeSchema = joi.boolean();

const createTransactionSchema = {
  title: transactionTitleSchema.required(),
  date: transactionDateSchema.required(),
  amount: transactionAmountSchema.required(),
  isIncome: transactionIsIncomeSchema.required(),
  tag: transactionTagSchema.required(),
};

const updateTransactionSchema = {
  title: transactionTitleSchema,
  date: transactionDateSchema,
  amount: transactionAmountSchema,
  isIncome: transactionIsIncomeSchema,
  tag: transactionTagSchema,
};

module.exports = {
  transactionIdSchema,
  createTransactionSchema,
  updateTransactionSchema,
};
