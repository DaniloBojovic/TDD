export class Ethereum {
  constructor(amount: number) {
    this.amount = amount;
  }

  protected amount: number;

  times(multiplier: number): Ethereum {
    return new Ethereum(this.amount * multiplier);
  }

  equals(object: Object) {
    let Ethereum = object as Ethereum;
    return this.amount == Ethereum.amount;
  }
}
