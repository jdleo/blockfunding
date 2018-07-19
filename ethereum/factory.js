import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json');

//CONFIG:
//CHANGE THE ETHEREUM ADDRESS IN THE CALL BELOW
//TO THE ADDRESS OF YOUR DEPLOYED FACTORY CONTRACT
//npm run deploy
const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  //CHANGE THIS BELOW
  'CONTRACT ADDRESS'
);

export default instance;
