import React, { Component } from 'react';
import { Button, Col, Icon, Input, Row} from 'react-materialize';

class SignupForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      password: '',
      agree: false
    }

    this.handleInput = this.handleInput.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(event) {
    const state = {};
    state[event.target.name] = event.target.value;
    this.setState(state);
  }

  handleCheckbox(event) {
    const state = {};
    state[event.target.name] = event.target.checked;
    this.setState(state);
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <form className='col s12 m10 l8 offset-m1 offset-l2 z-depth-5' onSubmit={this.handleSubmit}>
        <Row>
          <Col>
            <h5 className="center">Create account</h5>
            <Input s={12} name='name' label='Full name' value={this.state.name} onChange={this.handleInput} validate>
              <Icon>person</Icon>
            </Input>

            <Input s={12} name='email' label="Email" type='email' value={this.state.email} onChange={this.handleInput} validate>
              <Icon>email</Icon>
            </Input>
            
            <Input s={12} name='password' label="Password" type='password' value={this.state.password} onChange={this.handleInput} validate>
              <Icon>lock</Icon>
            </Input>

            <Input name='agree' label='I have read and accept use terms.' type='checkbox' onChange={this.handleCheckbox} />
          </Col>
        </Row>
        <Row>
          <center>
            <Button waves='light' className='center blue-grey'>Create account</Button>
          </center>
        </Row>
      </form>
    )
  }
}

export default SignupForm