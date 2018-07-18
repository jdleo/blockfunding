const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

//bring in both CompaignFactory and Campaign contracts
const compiledFactory = require('../ethereum/build/CampaignFactory.json');
const compiledCampaign = require('../ethereum/build/Campaign.json');

//local variables
let accounts;
let factory;
let campaignAddress;
let campaign;

//run everything async inside block before tests
beforeEach(async () => {
  //get usable test accounts
  accounts = await web3.eth.getAccounts();

  //deploy campaign factory contract to manage test campaigns
  factory = await new web3.eth.Contract(JSON.parse(compiledFactory.interface))
    .deploy({data: compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'});

  //use campaign factory to deploy new campaign contract
  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  //take first deployed campaign and assign it to campaignAddress test variable
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();
});
