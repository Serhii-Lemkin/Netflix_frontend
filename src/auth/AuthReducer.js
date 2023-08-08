import { GET_FAIL } from '../pages/home/HomePageReducer';
import {
  LOGOUT,
  LOGIN_START,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  ADD_TO_MY_LIST,
  REMOVE_FROM_MY_LIST,
} from './AuthAction';

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN_START:
      return { ...state, user: null, isFetching: true, error: false };

    case LOGIN_SUCCESS:
      console.log('login success');
      return {
        ...state,
        user: action.payload,
        isFetching: false,
        error: false,
      };

    case LOGIN_FAIL:
      return { ...state, user: null, isFetching: false, error: true };

    case LOGOUT:
      console.log('logout here');
      localStorage.removeItem('user');
      localStorage.removeItem('myList');
      return { ...state, user: null, isFetching: false, error: false };

    case ADD_TO_MY_LIST:
      console.log('added to list success');

      localStorage.setItem('myList', JSON.stringify(action.payload));
      return { ...state, myList: action.payload, error: false };

    case REMOVE_FROM_MY_LIST:
      return { ...state, myList: action.payload, error: false };

    case GET_FAIL:
      return { ...state, myList: null, error: action.payload };
    default:
      return { ...state };
  }
};

export default authReducer;
