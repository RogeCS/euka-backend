const transactionsMock = [
  {
    id: '01fed6d0-b51e-4893-9e3e-bb13276a7515',
    title: 'Suspended Animation',
    tag: 'Thriller',
    amount: '$2951.77',
    date: '10/18/2020',
  },
  {
    id: 'e0801ff1-7325-40c2-b964-f99f3777489c',
    title: 'My Name Is Bruce',
    tag: 'Comedy|Horror',
    amount: '$5991.26',
    date: '8/19/2020',
  },
  {
    id: '9ba922a4-01ea-46c6-ae85-d3587251ada7',
    title: 'Magic Voyage of Sindbad, The (Sadko)',
    tag: 'Adventure|Fantasy',
    amount: '$2470.25',
    date: '12/15/2020',
  },
  {
    id: '3afcc8c6-8b7a-494a-ac63-19813653f6fe',
    title: 'Hunt, The (Jagten)',
    tag: 'Drama',
    amount: '$5472.61',
    date: '1/12/2021',
  },
  {
    id: '48ad46af-bf12-4be8-887b-9e286bf50771',
    title: 'Girl, The (Flickan)',
    tag: 'Drama',
    amount: '$4033.57',
    date: '11/4/2020',
  },
  {
    id: '21362691-f266-44f6-88e3-cdf84d324bde',
    title: 'Message, The (a.k.a. Mohammad: Messenger of God)',
    tag: 'Adventure|Drama|War',
    amount: '$9237.87',
    date: '8/24/2020',
  },
  {
    id: 'a39f76ad-dadf-42ff-af6e-6132f510b76d',
    title: 'Super Cops, The',
    tag: 'Action|Comedy|Crime|Drama|Thriller',
    amount: '$5470.64',
    date: '6/14/2021',
  },
  {
    id: '7ee2c3eb-8901-49ab-a2e5-68e87869e5d2',
    title: 'Family Guy Presents Stewie Griffin: The Untold Story',
    tag: 'Adventure|Animation|Comedy',
    amount: '$8784.79',
    date: '4/3/2021',
  },
  {
    id: 'ce801bee-b162-4734-833b-cd5a779833ce',
    title: 'Hell to Eternity',
    tag: 'Drama|War',
    amount: '$3321.55',
    date: '8/30/2020',
  },
  {
    id: '961531da-aa81-4246-b44c-74619e4b15a5',
    title: 'Two Family House',
    tag: 'Drama',
    amount: '$9235.35',
    date: '4/1/2021',
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
