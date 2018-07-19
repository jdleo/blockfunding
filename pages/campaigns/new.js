import React, {Component} from 'react';
import {Form, Button, Input, Message} from 'semantic-ui-react';
import Layout from '../../components/Layout';

import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

import {Link, Router} from '../../routes';

class CampaignNew extends Component {
  state = {
    minimumContribution: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async (event) => {
    event.preventDefault();

    this.setState({loading: true, errorMessage: ''});

    try {
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(web3.utils.toWei(this.state.minimumContribution, 'ether'))
        .send({
          from: accounts[0]
        });

        //after deploying campaign was success, re-route to root
        Router.pushRoute('/');
    } catch (err) {
      this.setState({errorMessage: err.message});
    }

    this.setState({loading: false});
  };

  render() {
    return(
      <Layout>
        <h3>Deploy a new campaign</h3>
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Minimum contribution that users have to make to be a payment approver</label>
          <Input
            label="ETH"
            labelPosition="right"
            value={this.state.minimumContribution}
            onChange={event => this.setState({minimumContribution: event.target.value})}
          />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button
            content="Deploy"
            icon="right arrow"
            labelPosition='right'
            loading={this.state.loading}
          />
        </Form>
      </Layout>
    );
  }
}

export default CampaignNew;
