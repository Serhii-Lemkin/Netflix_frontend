import { LOGOUT, LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS } from './AuthAction';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { user: null, isFetching: true, error: false };

    case LOGIN_SUCCESS:
      return { user: action.payload, isFetching: false, error: false };

    case LOGIN_FAIL:
      return { user: null, isFetching: false, error: true };

    case LOGOUT:
      localStorage.removeItem("user");
      return { user: null, isFetching: false, error: false };

    default:
      return { ...state };
  }
};

export default authReducer;
