import {
  EMPLOYEE_UPDATE,
  CREATE_EMPLOYEE,
  EDIT_EMPLOYEE_SUCCESS,
  RESET_EMPLOYEE_FORM
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
    //action.payload has the form prop: 'name' and value: 'Jane'
      return { ...state, [action.payload.prop]: action.payload.value };
    case CREATE_EMPLOYEE:
     return INITIAL_STATE;
    case EDIT_EMPLOYEE_SUCCESS:
      return INITIAL_STATE;
    case RESET_EMPLOYEE_FORM:
      return INITIAL_STATE;
    default:
      return state;
  }
};
