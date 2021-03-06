const plays = require('../plays.json');
const invoices = require('../invoices.json');
const { statement } = require('../statement');

describe('refactoring sample', () => {
  it('', () => {
    invoices.map((invoice) => {
      const result = statement(invoice, plays);
      const { nums } = result;
      const expected = ['$6.50', '$5.80', '$5.00', '$17.30'];
      expect(nums).toEqual(expected);
    });
  });
});
