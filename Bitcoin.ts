import { Cryptocurrency } from './Cryptocurrency';

export class Bitcoin extends Cryptocurrency {
  constructor(amount: number) {
    super();
    this.amount = amount;
  }

  amount: number;

  times(multiplier: number): Bitcoin {
    return new Bitcoin(this.amount * multiplier);
  }

  equals(object: Object): boolean {
    let cryptocurrency = object as Cryptocurrency;
    return this.amount == cryptocurrency.amount;
  }
}
