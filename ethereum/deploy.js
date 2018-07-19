const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

//connect to infura API with our rinkeby account
const provider = new HDWalletProvider(
  'WALLET SEED (NMEMONIC)',
  'INFURA API KEY'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('attempting to deploy from account', accounts[0]);

  const res = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({gas: '1000000', from: accounts[0]});

  console.log('contract deployed to', res.options.address);
};

deploy();
