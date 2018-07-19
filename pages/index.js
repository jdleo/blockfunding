import React, {Component} from 'react';
import {Card, Button, Icon} from 'semantic-ui-react';
import factory from '../ethereum/factory';
import Layout from '../components/Layout';

class CampaignIndex extends Component {
  static async getInitialProps() {
    const campaigns = await factory.methods.getDeployedCampaigns().call();

    return {campaigns: campaigns};
  }

  renderCampaigns() {
    const items = this.props.campaigns.map(address => {
      return {
        header: address,
        description: <a>View Campaign</a>,
        fluid: true
      };
    });

    return <Card.Group items={items} />;
  }

  render() {
    return(
      <Layout>
        <div>
          <h3>Public Campaigns</h3>
          <Button
            floated="right"
            content="Create Campaign"
            icon="right arrow"
            labelPosition='right'
          />

          {this.renderCampaigns()}
        </div>
      </Layout>
    );
  }
}

export default CampaignIndex;
