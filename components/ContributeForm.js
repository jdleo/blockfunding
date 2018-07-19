import React, {Component} from 'react';
import {Form, Input, Message, Button} from 'semantic-ui-react';

class ContributeForm extends Component {
  render() {
    return (
      <Form>
        <Form.Field>
          <label>Amount to Contribute</label>
          <Input
            label="ETH"
            labelPosition="right"
          />
        </Form.Field>
        <Button
          floated="right"
          content="Contribute"
          icon="right arrow"
          labelPosition='right'
        />
      </Form>
    );
  }
}

export default ContributeForm;
