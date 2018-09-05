import React, { Component } from 'react';
import { Picker, Text } from 'react-native';
import { connect } from 'react-redux';
import { employeeUpdate, createEmployee } from '../actions';
import { Card, CardSection, InputField, Button } from './common';

class NewEmployeeForm extends Component {
  onButtonPress() {
    const { name, phone, shift } = this.props;

    this.props.createEmployee({ name, phone, shift: shift || 'Monday' });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <InputField
            label='Name'
            placeholder='Jane Smith'
            value={this.props.name}
            onChangeText={value => this.props.employeeUpdate({ prop: 'name', value })}
          />
        </CardSection>

        <CardSection>
          <InputField
            label='Phone'
            placeholder='07XX-XX-XX-XX'
            value={this.props.phone}
            onChangeText={value => this.props.employeeUpdate({ prop: 'phone', value })}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextLabelStyle}>Select Shift</Text>
          <Picker
            selectedValue={this.props.shift}
            onValueChange={value => this.props.employeeUpdate({ prop: 'shift', value })}
          >
            <Picker.Item label='Monday' value='monday' />
            <Picker.Item label='Tuesday' value='tuesday' />
            <Picker.Item label='Wednesday' value='wednesday' />
            <Picker.Item label='Thursday' value='thursday' />
            <Picker.Item label='Friday' value='friday' />
            <Picker.Item label='Saturday' value='saturday' />
            <Picker.Item label='Sunday' value='sunday' />
          </Picker>
        </CardSection>

        <CardSection>
          <Button whenPressed={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  pickerTextLabelStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
};

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;

  return { name, phone, shift };
};

export default connect(mapStateToProps, { employeeUpdate, createEmployee })(NewEmployeeForm);
