// DEBUG=app:* node scripts/mongo/seedTransactions.js

const chalk = require('chalk');
const debug = require('debug')('app:scripts:movies');
const MongoLib = require('../../lib/mongo');
const { transactionsMock } = require('../../utils/mocks/transactions');

async function seedTransactions() {
  try {
    const mongoDB = new MongoLib();

    const promises = transactionsMock.map(async (transaction) => {
      await mongoDB.create('transactions', transaction);
    });

    await Promise.all(promises);
    debug(chalk.green(`${promises.length} transactions have been created successfully`)); // prettier-ignore
    return process.exit(0);
  } catch (error) {
    debug(chalk.red(error));
    process.exit(1);
  }
}

seedTransactions();
