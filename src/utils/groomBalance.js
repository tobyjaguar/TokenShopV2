import Web3 from 'web3';

export function groomWei(weiValue) {
  var factor = Math.pow(10, 4)
  var balance = web3.utils.fromWei(weiValue)
  balance = Math.round(balance * factor) / factor
  return balance
}
