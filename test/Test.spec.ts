import { assert } from 'chai';
import { Bitcoin } from '../Bitcoin';
import { Ethereum } from '../Ethereum';

describe('TestMultiplication', () => {
  it('check if equal', () => {
    let five = new Bitcoin(5);
    assert.deepEqual(new Bitcoin(10), five.times(2));
    assert.deepEqual(new Bitcoin(15), five.times(3));
  });
});

describe('TestEquality', () => {
  it('check if equal', () => {
    assert.isTrue(new Bitcoin(5).equals(new Bitcoin(5)));
    assert.isFalse(new Bitcoin(5).equals(new Bitcoin(6)));
  });
});

describe('TestEthereumMultiplication', () => {
  it('check if equal', () => {
    let five = new Ethereum(5);
    assert.deepEqual(new Ethereum(10), five.times(2));
    assert.deepEqual(new Ethereum(15), five.times(3));
  });
});
