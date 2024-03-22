import {ALL_STATES, FORMU_DATA, LOGIN_USER, LOGOUT} from '../action/types';

const initialState = {
  user: {},
  allStates: [],
  formuData: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        user: action.payload,
      };
    case ALL_STATES:
      return {
        ...state,
        allStates: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    case FORMU_DATA:
      return {
        ...state,
        formuData: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
