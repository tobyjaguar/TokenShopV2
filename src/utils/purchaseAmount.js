import web3 from 'web3';

export function convertAmount(amount) {
  var int = Math.floor(amount);
  var dec = Math.round((amount - int) * 100);
  var intBN = web3.utils.toBN(int);
  var decBN = web3.utils.toBN(dec);
  var weiDec = web3.utils.toBN(web3.utils.toWei('1', 'ether'));
  var hundredBN = web3.utils.toBN('100')
  decBN = decBN.mul(weiDec).div(hundredBN);
  var intEth = web3.utils.toWei(intBN, 'ether');
  var decEth = web3.utils.fromWei(decBN, 'ether');
  return intEth.add(decBN).toString();
}
