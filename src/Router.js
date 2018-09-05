import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import NewEmployeeForm from './components/NewEmployeeForm';
import EmployeeFile from './components/EmployeeFile';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key='root' hideNavBar>
        <Scene key='auth'>
          <Scene
            key='login'
            component={LoginForm}
            title='Please Login'
            initial
          />
        </Scene>
        <Scene key='main'>
          <Scene
            rightTitle='Add'
            onRight={() => Actions.newEmployeeForm()}
            key='employeeList'
            component={EmployeeList}
            title='Employee List'
            initial
          />
          <Scene
            key='newEmployeeForm'
            component={NewEmployeeForm}
            title='New Employee Form'
          />
          <Scene
            key='employeeFile'
            component={EmployeeFile}
            title='Employee File'
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
