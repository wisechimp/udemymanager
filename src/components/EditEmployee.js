import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';
import { Card, CardSection, Button, ConfirmModal } from './common';
import { employeeUpdate, editEmployeeData, deleteEmployee } from '../actions';
import EmployeeForm from './EmployeeForm';

class EditEmployee extends Component {
  state = {modalVisibility: false};
  componentWillMount() {
    _.each(this.props.employee, (value, prop) => {
      this.props.employeeUpdate({ prop, value });
    });
  }

  onButtonPressed() {
    const { name, phone, shift } = this.props;

    this.props.editEmployeeData({ name, phone, shift, uid: this.props.employee.uid });
  }

  onTextButtPressed() {
    const { phone, shift } = this.props;

    Communications.text(phone, `Your upcoming shift is on ${shift}`);
  }

  onAccept() {
    const { uid } = this.props.employee;

    this.props.deleteEmployee({ uid });
  }

  onDecline() {
    this.setState({ modalVisibility: false });
  }

  render() {
    return (
      <Card>
        <EmployeeForm />

        <CardSection>
          <Button whenPressed={this.onButtonPressed.bind(this)}>
            Save Changes
          </Button>
        </CardSection>

        <CardSection>
          <Button whenPressed={this.onTextButtPressed.bind(this)}>
            Text Employee
          </Button>
        </CardSection>

        <CardSection>
          <Button
            whenPressed={() => this.setState({ modalVisibility: !this.state.modalVisibility })}
          >
            Fire Employee
          </Button>
        </CardSection>

        <ConfirmModal
          visible={this.state.modalVisibility}
          onAccept={this.onAccept.bind(this)}
          onDecline={this.onDecline.bind(this)}
        >
          Are you sure you want to delete this Employee
        </ConfirmModal>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps,
  { employeeUpdate, editEmployeeData, deleteEmployee })(EditEmployee);
