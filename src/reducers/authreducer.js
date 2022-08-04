import * as types from '../constants/constant';

let initialState = {
    data: [],
    isAuthenticated: false,
    loading: false,
    error: '',
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case types.LOGIN_DATA:
        return {
          ...state,
          isAuthenticated: false,
          error: '',
          loading: true
        };
      case types.LOGIN_DATA_SUCCESS:
        return {
          ...state,
          error: '',
          data: action.data,
          isAuthenticated: true,
          loading: false
        };
      case types.LOGIN_DATA_FAIL:
        return {
          ...state,
          data: [],
          error: action.data.data.detail,
          isAuthenticated: false,
          loading: false
        };
      case types.LOGIN_DATA_CLEAR:
        return {
          ...state,
          error: '',
          data: [],
          isAuthenticated: false,
          loading: false
        };
      default:
        return state;
    }
  };
  