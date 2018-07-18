const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

//get reference to build directory
const buildPath = path.resolve(__dirname, 'build');

//delete build folder (we only ever want one build in prod)
fs.removeSync(buildPath);

//get reference to contract source file
const campaignPath = path.resolve(__dirname, 'contracts/Campaign.sol');

//read contract source
const source = fs.readFileSync(campaignPath, 'utf8');

//compile contract with solc and grab contracts property
const output = solc.compile(source, 1).contracts;

//recreate build folder
fs.ensureDirSync(buildPath);

//iterate over compiled contracts in output
for (let contract in output) {
  //build contract and write json file to build path
  fs.outputJsonSync(
    path.resolve(buildPath, contract + '.json'),
    output[contract]
  );
}
