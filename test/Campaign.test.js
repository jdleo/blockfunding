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
    .deploy({data: '0x' + compiledFactory.bytecode})
    .send({from: accounts[0], gas: '1000000'});

  //use campaign factory to deploy new campaign contract
  await factory.methods.createCampaign('100').send({
    from: accounts[0],
    gas: '1000000'
  });

  //take first deployed campaign and assign it to campaignAddress test variable
  [campaignAddress] = await factory.methods.getDeployedCampaigns().call();

  //reference already-deployed campaign contract
  campaign = await new web3.eth.Contract(
    JSON.parse(compiledCampaign.interface),
    campaignAddress
  );
});

//tests for Campaign Factory contract
describe('Campaign Factory', () => {
  it('deploys factory', () => {
    //if contract address exists, most likely contract exists
    assert.ok(factory.options.address);
  });

  it('deploys campaign', () => {
    //if contract address exists, most likely contract exists
    assert.ok(campaign.options.address);
  });
})

//tests for Campaign contract
describe('Campaign', () => {
  it('assigns campaign creator to campaign manager', async () => {
    //get manager data field from campaign contract
    const manager = await campaign.methods.manager().call();

    //check if equal to the account we deployed from
    assert.equal(accounts[0], manager);
  });
});
