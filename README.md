![blockfunding banner](https://i.imgur.com/XEFEcwD.png)  

# blockfunding  
Blockfunding is a yet, another decentralized crowdfunding platform. It's build entirely on the blockchain. Its' main backbone is two ethereum (solidity) contracts that manage the entire backend. The front-end is React, and setup is as easy as a one-click-deploy.  

## one-click deploy  
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)  

## install depencencies  
```
npm install
```  

## setup/config  
paste both your Infura API key (don't have one, get one) and your 12-word mnemonic in `ethereum/deploy.js` (you'll see where)  

## deploy (do this before starting dev/prod server obviously)  
```
npm run compile
npm run deploy
```  
it should show "contract deployed to:" and then an address. copy that address.
take that address, and paste it in `ethereum/factory.js` (you'll see where)

## dev  
```
npm run dev
```  

## tests  
```
npm run test
```  
**Note:** you need to compile contracts before testing, but you should have at this point
