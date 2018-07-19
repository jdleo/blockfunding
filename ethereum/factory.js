import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

//CONFIG:
//CHANGE THE ETHEREUM ADDRESS IN THE CALL BELOW
//TO THE ADDRESS OF YOUR DEPLOYED FACTORY CONTRACT
//npm run deploy
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //CHANGE THIS BELOW
  '0xD2fbB5dAAc116DA1C0e042FC642C0214C7C023e4'
);

export default instance;
