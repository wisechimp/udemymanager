import React, { Component } from 'react';
import { connect } from 'react-redux';
import { employeeUpdate, createEmployee, resetEmployeeForm } from '../actions';
import { Card, CardSection, Button } from './common';
import EmployeeForm from './EmployeeForm';

class NewEmployeeForm extends Component {

  componentWillMount() {
    this.props.resetEmployeeForm();
  }

  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.createEmployee({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <EmployeeForm {...this.props} />
        <CardSection>
          <Button whenPressed={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, {
  employeeUpdate,
  createEmployee,
  resetEmployeeForm
})(NewEmployeeForm);
