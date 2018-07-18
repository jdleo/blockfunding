contract CampaignFactory {
    address[] deployedCampaigns;

    constructor () public {

    }
    
    function createCampaign(uint minimum) public {
      address newCampaign = new Campaign(minimum, msg.sender);
      deployedCampaigns.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns (address[]) {
        return deployedCampaigns;
    }

}

contract Campaign {

    struct Request {
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }

    address public manager;
    uint public minimumAmount;
    uint public approversCount;
    Request[] public requests;
    mapping(address => bool) public approvers;

    modifier restricted {
        require(msg.sender == manager);
        _;
    }

    constructor (uint minimum, address sender) public {
        manager = sender;
        minimumAmount = minimum;
    }

    function contribute() public payable {
        require(msg.value > minimumAmount);

        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string description, uint value, address recipient) public restricted {
        Request memory newRequest = Request({
            description: description,
            value: value,
            recipient: recipient,
            complete: false,
            approvalCount: 0
        });

        requests.push(newRequest);
    }

    function approveRequest(uint index) public {
        Request storage req = requests[index];

        require(approvers[msg.sender]);
        require(!req.approvals[msg.sender]);

        req.approvals[msg.sender] = true;
        req.approvalCount++;
    }

    function finalizeRequest(uint index) public {
        Request storage req = requests[index];

        require(!req.complete);
        require(req.approvalCount > (approversCount / 2));

        req.complete = true;
        req.recipient.transfer(req.value);
    }
}
