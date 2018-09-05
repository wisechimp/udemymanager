import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import {
   EMPLOYEE_UPDATE
 } from './types';

export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};

export const createEmployee = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  firebase.database().ref(`/users/${currentUser.uid}/employees`)
  .push({ name, phone, shift });
};