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

describe('blockfunding', () => {
  it('intializes test data', () => {
    //check if any of these test instances are undefince
    assert.ok(accounts);
    assert.ok(factory);
    assert.ok(campaignAddress);
    assert.ok(campaign);
  });
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

  it('allows people to contribute money, then marks them as an approver', async () => {
    //attempt to contribute valid amount of ETH to campaign
    await campaign.methods.contribute().send({
      value: '1000',
      from: accounts[1],
      gas: '1000000'
    });

    //since we contributed from account 1, check if account 1 is in approvers
    const isApproved = campaign.methods.approvers(accounts[1]).call();

    //if it's true, user was added into approvers
    assert.ok(isApproved);
  });

  it('enforces minimum contribution amount', async () => {
    //attempt to contribute invalid amount of ETH to campaign
    try {
      await campaign.methods.contribute().send({
        value: '10',
        from: accounts[2],
        gas: '1000000'
      });
      assert(false);

    } catch (err) {

      //error is good, it means it blocked this user from contributing less than min
      assert(err);
    }
  });

  it('allows manager to make payment request', async () => {
    //attempt to make request from account 0 (manager)
    await campaign.methods
      .createRequest('test description', '1000', accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
    });

    //get request at index 0
    const req = await campaign.methods.requests(0).call();

    //check to see if the request properties are as expected
    assert.equal('test description', req.description);
    assert.equal('1000', req.value);
    assert.equal(accounts[1], req.recipient);
  });

  it('processes requests from creation to finalization', async () => {
    //attempt to contribute 10 ETH
    await campaign.methods.contribute().send({
      from: accounts[0],
      value: web3.utils.toWei('10', 'ether')
    });

    //create request from manager for 5 ETH to be transferred to account 1
    await campaign.methods
      .createRequest('TEST', web3.utils.toWei('5', 'ether'), accounts[1])
      .send({
        from: accounts[0],
        gas: '1000000'
      });

      //approve request from account 0 (our only contributor)
      await campaign.methods.approveRequest(0).send({
        from: accounts[0],
        gas: '1000000'
      });

      //get balance of account 1 before finalizing
      let balanceBefore = await web3.eth.getBalance(accounts[1]);
      balanceBefore = web3.utils.fromWei(balanceBefore, 'ether');
      balanceBefore = parseFloat(balanceBefore);

      //attempt to finalize request
      await campaign.methods.finalizeRequest(0).send({
        from: accounts[0],
        gas: '1000000'
      });

      //get balance of recipient account from request (account 1)
      let balance = await web3.eth.getBalance(accounts[1]);
      balance = web3.utils.fromWei(balance, 'ether');
      balance = parseFloat(balance);

      //if current balance is ~5 ETH greater than it was before, pass
      assert((balance - balanceBefore) > 4.9);
  });
});
