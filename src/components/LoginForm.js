import React, { Component } from 'react';
import { Card, CardSection, InputField, Button } from './common';

class LoginForm extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <InputField
            label="Email"
            placeholder="email@gmail.com"
          />
        </CardSection>

        <CardSection>
          <InputField
            secureTextEntry
            label="Password"
            placeholder="password"
          />
        </CardSection>

        <CardSection>
          <Button>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
