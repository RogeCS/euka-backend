const transactionsMock = [
  {
    title: 'Suspended Animation',
    tag: 'Thriller',
    amount: 2951.77,
    isIncome: false,
    date: '2021-06-25',
  },
  {
    title: 'My Name Is Bruce',
    tag: 'Comedy',
    amount: 5991.26,
    isIncome: false,
    date: '2021-06-25',
  },
  {
    title: 'Magic Voyage of Sindbad',
    tag: 'Adventure',
    amount: 2470.25,
    isIncome: true,
    date: '2021-06-25',
  },
  {
    title: 'Hunt, The (Jagten)',
    tag: 'Drama',
    amount: 5472.61,
    isIncome: false,
    date: '2021-06-25',
  },
  {
    title: 'Girl, The (Flickan)',
    tag: 'Drama',
    amount: 4033.57,
    isIncome: false,
    date: '2021-06-25',
  },
  {
    title: 'Message, The aka',
    tag: 'Adventure',
    amount: 9237.87,
    isIncome: true,
    date: '2021-06-25',
  },
  {
    title: 'Super Cops, The',
    tag: 'Action',
    amount: 5470.64,
    isIncome: false,
    date: '2021-06-25',
  },
  {
    title: 'Family Guy Presents',
    tag: 'Animation',
    amount: 8784.79,
    isIncome: false,
    date: '2021-06-25',
  },
  {
    title: 'Hell to Eternity',
    tag: 'War',
    amount: 3321.55,
    isIncome: false,
    date: '2021-06-25',
  },
  {
    title: 'Two Family House',
    tag: 'Drama',
    amount: 9235.35,
    isIncome: true,
    date: '2021-06-25',
  },
];

function filteredTransactionsMocks(tag) {
  return transactionsMock.filter((transaction) => transaction.tag === tag);
}

class TransactionsServiceMock {
  async getTransactions() {
    return Promise.resolve(transactionsMock);
  }

  async createTransaction() {
    return Promise.resolve(transactionsMock[0]);
  }
}

module.exports = {
  transactionsMock,
  filteredTransactionsMocks,
  TransactionsServiceMock,
};
