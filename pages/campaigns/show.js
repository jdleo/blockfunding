import React, {Component} from 'react';
import {Card, Grid} from 'semantic-ui-react';
import Layout from '../../components/Layout';
import Campaign from '../../ethereum/campaign';
import web3 from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';

class CampaignShow extends Component {

  static async getInitialProps(props) {
    const campaign = Campaign(props.query.address);

    const summary = await campaign.methods.getSummary().call();

    return {
      minimumContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4]
    };
  }

  renderCards() {
    const {
      balance,
      manager,
      minimumContribution,
      approversCount,
      requestsCount
    } = this.props;

    const items = [
      {
        header: manager,
        meta: 'Manager',
        description: 'ETH address for the manager of this campaign.',
        style: {overflowWrap: 'break-word'}
      },
      {
        header: `${web3.utils.fromWei(minimumContribution, 'ether')} ETH`,
        meta: 'Minumum Contribution',
        description: 'Minimum contribution to become an approver'
      },
      {
        header: approversCount,
        meta: 'Number of Approvers',
        description: 'Amount of approvers for this campaign'
      },
      {
        header: requestsCount,
        meta: 'Number of Requests',
        description: 'Amount of payment requests made by manager'
      },
      {
        header: `${web3.utils.fromWei(balance, 'ether')} ETH`,
        meta: 'Campaign Balance',
        description: 'Total amount of ETH available for spending'
      }
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Details</h3>
      <Grid>
        <Grid.Column width={10}>
          {this.renderCards()}
        </Grid.Column>
        <Grid.Column width={6}>
          <ContributeForm/>
        </Grid.Column>
      </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;
