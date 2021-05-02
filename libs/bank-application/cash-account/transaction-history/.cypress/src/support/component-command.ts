import { SelectorOptions, get } from '@srleecode/component-command-utils';

declare global {
  namespace Cypress {
    interface Chainable<Subject> {
      bankApplicationCashAccountTransactionHistory(selector?: SelectorOptions): Chainable<BankApplicationCashAccountTransactionHistory>
    }
  }
}

export class BankApplicationCashAccountTransactionHistory {
    constructor(public element: JQuery) {}
}

Cypress.Commands.add('bankApplicationCashAccountTransactionHistory', (selector?: SelectorOptions) => get(selector, BankApplicationCashAccountTransactionHistory, 'write component tag selector here'));
