import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

//CONFIG:
//CHANGE THE ETHEREUM ADDRESS IN THE CALL BELOW
//TO THE ADDRESS OF YOUR DEPLOYED FACTORY CONTRACT
//npm run deploy
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //CHANGE THIS BELOW
  '0xd2cf86a326a99217f931F601c3C4E04439595BA1'
);

export default instance;
