import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  //code is not running in browser AND metamask is running/injected
  web3 = new Web3(window.web3.currentProvider);
} else {
  //code is running in browser OR user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/UawBd2Uf27LzaCleE8j0'
  );
  web3 = new Web3(provider);
}

export default web3;
